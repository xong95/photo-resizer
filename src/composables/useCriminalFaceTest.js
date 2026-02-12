import { ref } from 'vue'
import * as faceapi from 'face-api.js'

export const useCriminalFaceTest = () => {
  const isAnalyzing = ref(false)
  const error = ref(null)
  const modelsLoaded = ref(false)

  // 관상 카테고리 정의
  const crimeCategories = [
    { id: 'good', name: '선한상', icon: '😇', color: '#10b981', isGood: true },
    { id: 'honest', name: '정직한상', icon: '🤝', color: '#14b8a6', isGood: true },
    { id: 'fraud', name: '사기상', icon: '💰', color: '#f59e0b', isGood: false },
    { id: 'drug', name: '마약상', icon: '💊', color: '#ef4444', isGood: false },
    { id: 'assault', name: '폭행상', icon: '👊', color: '#dc2626', isGood: false },
    { id: 'theft', name: '절도상', icon: '🥷', color: '#6366f1', isGood: false },
    { id: 'embezzlement', name: '횡령상', icon: '💼', color: '#8b5cf6', isGood: false },
    { id: 'cybercrime', name: '사이버범죄상', icon: '💻', color: '#3b82f6', isGood: false },
    { id: 'gambling', name: '도박상', icon: '🎲', color: '#ec4899', isGood: false },
    { id: 'arson', name: '방화범상', icon: '🔥', color: '#f97316', isGood: false },
    { id: 'harassment', name: '추행범상', icon: '🚫', color: '#be123c', isGood: false },
    { id: 'dui', name: '음주운전상', icon: '🍺', color: '#ea580c', isGood: false },
    // { id: 'other', name: '기타상', icon: '❓', color: '#64748b', isGood: false }
  ]

  /**
   * face-api.js 모델 로드
   */
  const loadFaceDetectionModel = async () => {
    if (!modelsLoaded.value) {
      try {
        console.log('Loading face-api.js models...')

        // CDN에서 모델 로드 (더 빠르고 간단함)
        const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model'

        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
        ])

        modelsLoaded.value = true
        console.log('face-api.js models loaded successfully')
      } catch (err) {
        console.error('Face detection model load failed:', err)
        throw new Error('얼굴 인식 모델 로드 실패')
      }
    }
  }

  /**
   * 이미지 파일을 로드합니다
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
   * 이미지를 Canvas에 그립니다 (BlazeFace가 더 잘 인식하도록)
   * 큰 이미지는 리사이즈 (BlazeFace는 작은 이미지를 더 잘 인식)
   */
  const imageToCanvas = (image, maxSize = 640) => {
    const canvas = document.createElement('canvas')

    // 이미지가 너무 크면 리사이즈
    let width = image.width
    let height = image.height

    if (width > maxSize || height > maxSize) {
      if (width > height) {
        height = (height / width) * maxSize
        width = maxSize
      } else {
        width = (width / height) * maxSize
        height = maxSize
      }
    }

    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    ctx.drawImage(image, 0, 0, width, height)

    return canvas
  }

  /**
   * 이미지에서 얼굴을 감지합니다
   */
  const detectFace = async (image) => {
    try {
      await loadFaceDetectionModel()

      // Canvas로 변환
      const canvas = imageToCanvas(image)

      console.log('Detecting faces in canvas:', canvas.width, 'x', canvas.height)

      // 얼굴 감지 (SSD Mobilenet 사용 - 더 정확함)
      const detections = await faceapi
        .detectAllFaces(canvas, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.7 }))

      console.log('Detected faces:', detections.length)

      return detections
    } catch (err) {
      console.error('Face detection failed:', err)
      // 에러를 throw하지 않고 빈 배열 반환
      return []
    }
  }

  /**
   * 이미지를 분석하여 범죄 유형별 퍼센트를 반환합니다
   * (실제로는 랜덤 생성 - 재미 목적)
   */
  const analyzeFace = async (imageFile, options = { skipFaceDetection: false }) => {
    isAnalyzing.value = true
    error.value = null

    try {
      // 이미지 로드
      const image = await loadImage(imageFile)

      let faces = []
      let faceDetectionWarning = null

      // 얼굴 감지 (선택적)
      if (!options.skipFaceDetection) {
        faces = await detectFace(image)

        // 얼굴이 감지되지 않으면 에러
        if (!faces || faces.length === 0) {
          throw new Error('얼굴을 인식할 수 없어요. 얼굴이 잘 보이는 다른 사진을 올려주세요.')
        }

        // 여러 얼굴이 감지되면 에러
        if (faces.length > 1) {
          throw new Error(`${faces.length}명의 얼굴이 감지되었어요. 한 명의 얼굴만 있는 사진을 올려주세요.`)
        }

        // 얼굴이 감지되면 성공 로그
        console.log('✓ Face detected successfully!')
      }

      // 분석 시뮬레이션 (1.5~2.5초 대기)
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000))

      // 랜덤 퍼센트 생성 (합이 100이 되도록)
      const results = generateRandomPercentages()

      // 가장 높은 범죄 유형 찾기
      const maxCrime = results.reduce((max, current) =>
        current.percentage > max.percentage ? current : max
      )

      return {
        image,
        results,
        topCrime: maxCrime,
        analyzedAt: new Date(),
        faceDetected: faces[0] || null,
        faceCount: faces.length,
        warning: faceDetectionWarning
      }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isAnalyzing.value = false
    }
  }

  /**
   * 랜덤 퍼센트 생성 (합이 100이 되도록)
   */
  const generateRandomPercentages = () => {
    // 각 카테고리에 랜덤 가중치 부여
    const weights = crimeCategories.map(() => Math.random() * 100)
    const totalWeight = weights.reduce((sum, w) => sum + w, 0)

    // 가중치를 퍼센트로 변환
    let percentages = weights.map(w => Math.round((w / totalWeight) * 100))

    // 반올림 오차로 인한 합계 조정
    let sum = percentages.reduce((a, b) => a + b, 0)
    if (sum !== 100) {
      const diff = 100 - sum
      const maxIndex = percentages.indexOf(Math.max(...percentages))
      percentages[maxIndex] += diff
    }

    // 결과 객체 생성
    return crimeCategories.map((category, index) => ({
      ...category,
      percentage: percentages[index]
    })).sort((a, b) => b.percentage - a.percentage) // 높은 순으로 정렬
  }

  /**
   * 결과를 이미지로 생성합니다 (공유용)
   */
  const generateResultImage = (analysisResult) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // 캔버스 크기 설정 (Instagram Story 크기)
    canvas.width = 1080
    canvas.height = 1920

    // 배경 그라데이션
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, '#667eea')
    gradient.addColorStop(1, '#764ba2')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // 제목
    ctx.fillStyle = 'white'
    ctx.font = 'bold 80px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('범죄자 관상 테스트', canvas.width / 2, 150)

    ctx.font = '40px Arial'
    ctx.fillText('결과 분석', canvas.width / 2, 220)

    // 원본 이미지 표시
    const imgSize = 400
    const imgX = (canvas.width - imgSize) / 2
    const imgY = 280

    // 원형 클리핑
    ctx.save()
    ctx.beginPath()
    ctx.arc(canvas.width / 2, imgY + imgSize / 2, imgSize / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()

    // 이미지 그리기
    const img = analysisResult.image
    const scale = Math.max(imgSize / img.width, imgSize / img.height)
    const scaledWidth = img.width * scale
    const scaledHeight = img.height * scale
    const offsetX = imgX + (imgSize - scaledWidth) / 2
    const offsetY = imgY + (imgSize - scaledHeight) / 2
    ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight)
    ctx.restore()

    // 테두리
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 8
    ctx.beginPath()
    ctx.arc(canvas.width / 2, imgY + imgSize / 2, imgSize / 2, 0, Math.PI * 2)
    ctx.stroke()

    // 결과 표시
    let yPos = imgY + imgSize + 80

    ctx.fillStyle = 'white'
    ctx.font = 'bold 60px Arial'
    ctx.fillText(`가장 높은 유형: ${analysisResult.topCrime.icon} ${analysisResult.topCrime.name}`,
                 canvas.width / 2, yPos)

    ctx.font = 'bold 100px Arial'
    ctx.fillText(`${analysisResult.topCrime.percentage}%`, canvas.width / 2, yPos + 100)

    yPos += 200

    // 상위 5개 범죄 유형 표시
    ctx.font = '36px Arial'
    ctx.textAlign = 'left'

    analysisResult.results.slice(0, 5).forEach((crime, index) => {
      const x = 100
      const y = yPos + (index * 80)

      // 바 배경
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.fillRect(x, y - 30, 880, 50)

      // 바 (퍼센트)
      ctx.fillStyle = crime.color
      const barWidth = (880 * crime.percentage) / 100
      ctx.fillRect(x, y - 30, barWidth, 50)

      // 텍스트
      ctx.fillStyle = 'white'
      ctx.fillText(`${crime.icon} ${crime.name}`, x + 20, y)
      ctx.textAlign = 'right'
      ctx.fillText(`${crime.percentage}%`, x + 860, y)
      ctx.textAlign = 'left'
    })

    // 하단 면책 조항
    ctx.font = '28px Arial'
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.textAlign = 'center'
    ctx.fillText('⚠️ 이 결과는 재미 목적이며 실제 범죄 예측과 무관합니다',
                 canvas.width / 2, canvas.height - 100)

    ctx.font = 'bold 32px Arial'
    ctx.fillText('letstest.cloud', canvas.width / 2, canvas.height - 40)

    return canvas
  }

  /**
   * 결과 이미지를 다운로드합니다
   */
  const downloadResultImage = (canvas, filename = 'criminal-face-test-result.jpg') => {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }, 'image/jpeg', 0.95)
  }

  return {
    isAnalyzing,
    error,
    crimeCategories,
    loadImage,
    detectFace,
    analyzeFace,
    generateResultImage,
    downloadResultImage
  }
}
