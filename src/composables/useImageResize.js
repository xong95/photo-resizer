import { ref } from 'vue'

export const useImageResize = () => {
  const isProcessing = ref(false)
  const error = ref(null)

  /**
   * 파일로부터 이미지를 로드합니다
   */
  const loadImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error('이미지 로드 실패'))
        img.src = event.target.result
      }

      reader.onerror = () => reject(new Error('파일 읽기 실패'))
      reader.readAsDataURL(file)
    })
  }

  /**
   * 고품질 단계적 리사이징 헬퍼 함수
   * 큰 이미지를 작게 만들 때 여러 단계로 나누어 축소하면 품질이 향상됩니다
   */
  const stepDownResize = (sourceCanvas, targetWidth, targetHeight) => {
    let currentCanvas = sourceCanvas
    let currentWidth = sourceCanvas.width
    let currentHeight = sourceCanvas.height

    // 목표 크기보다 2배 이상 크면 단계적으로 축소
    while (currentWidth > targetWidth * 2 || currentHeight > targetHeight * 2) {
      const nextWidth = Math.max(Math.floor(currentWidth / 2), targetWidth)
      const nextHeight = Math.max(Math.floor(currentHeight / 2), targetHeight)

      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = nextWidth
      tempCanvas.height = nextHeight

      const tempCtx = tempCanvas.getContext('2d')
      tempCtx.imageSmoothingEnabled = true
      tempCtx.imageSmoothingQuality = 'high'

      tempCtx.drawImage(currentCanvas, 0, 0, nextWidth, nextHeight)

      currentCanvas = tempCanvas
      currentWidth = nextWidth
      currentHeight = nextHeight
    }

    // 최종 목표 크기로 조정
    if (currentWidth !== targetWidth || currentHeight !== targetHeight) {
      const finalCanvas = document.createElement('canvas')
      finalCanvas.width = targetWidth
      finalCanvas.height = targetHeight

      const finalCtx = finalCanvas.getContext('2d')
      finalCtx.imageSmoothingEnabled = true
      finalCtx.imageSmoothingQuality = 'high'

      finalCtx.drawImage(currentCanvas, 0, 0, targetWidth, targetHeight)
      currentCanvas = finalCanvas
    }

    return currentCanvas
  }

  /**
   * 이미지를 Canvas에 리사이징합니다
   * @param {Image} image - 로드된 이미지 객체
   * @param {Object} spec - 사진 규격 정보
   * @param {string} backgroundColor - 배경색 (기본: white)
   * @returns {HTMLCanvasElement} 리사이징된 Canvas
   */
  const resizeImage = (image, spec, backgroundColor = '#ffffff') => {
    const targetWidth = spec.widthPx
    const targetHeight = spec.heightPx
    const targetRatio = targetWidth / targetHeight

    let srcX, srcY, srcWidth, srcHeight

    // 원본 이미지의 비율 계산
    const imgRatio = image.width / image.height

    if (imgRatio > targetRatio) {
      // 이미지가 더 넓은 경우: 높이를 맞추고 양쪽을 자름
      srcHeight = image.height
      srcWidth = image.height * targetRatio
      srcX = (image.width - srcWidth) / 2
      srcY = 0
    } else {
      // 이미지가 더 좁은 경우: 너비를 맞추고 위아래를 자름
      srcWidth = image.width
      srcHeight = image.width / targetRatio
      srcX = 0
      srcY = (image.height - srcHeight) / 2
    }

    // 1단계: 크롭된 부분을 임시 Canvas에 그리기
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = srcWidth
    tempCanvas.height = srcHeight

    const tempCtx = tempCanvas.getContext('2d')
    tempCtx.imageSmoothingEnabled = true
    tempCtx.imageSmoothingQuality = 'high'

    // 크롭된 원본 이미지를 임시 Canvas에 그리기
    tempCtx.drawImage(
      image,
      srcX,
      srcY,
      srcWidth,
      srcHeight,
      0,
      0,
      srcWidth,
      srcHeight
    )

    // 2단계: 단계적 고품질 리사이징 적용
    const resizedCanvas = stepDownResize(tempCanvas, targetWidth, targetHeight)

    // 3단계: 최종 Canvas에 배경색과 함께 출력
    const finalCanvas = document.createElement('canvas')
    finalCanvas.width = targetWidth
    finalCanvas.height = targetHeight

    const finalCtx = finalCanvas.getContext('2d')

    // 배경색 채우기
    finalCtx.fillStyle = backgroundColor
    finalCtx.fillRect(0, 0, targetWidth, targetHeight)

    // 리사이징된 이미지 그리기
    finalCtx.imageSmoothingEnabled = true
    finalCtx.imageSmoothingQuality = 'high'
    finalCtx.drawImage(resizedCanvas, 0, 0, targetWidth, targetHeight)

    return finalCanvas
  }

  /**
   * Canvas를 이미지 파일로 다운로드합니다
   * @param {HTMLCanvasElement} canvas - Canvas 요소
   * @param {string} filename - 다운로드할 파일명
   * @param {number} quality - JPEG 품질 (0-1)
   */
  const downloadImage = (canvas, filename = 'photo.jpg', quality = 1.0) => {
    canvas.toBlob(
      (blob) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      },
      'image/jpeg',
      quality
    )
  }

  /**
   * Canvas를 이미지 데이터 URL로 변환합니다 (미리보기용)
   */
  const canvasToDataURL = (canvas, quality = 1.0) => {
    return canvas.toDataURL('image/jpeg', quality)
  }

  return {
    isProcessing,
    error,
    loadImage,
    resizeImage,
    downloadImage,
    canvasToDataURL
  }
}
