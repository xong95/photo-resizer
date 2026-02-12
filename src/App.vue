<template>
  <div id="app" class="app">
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-title">
          <span class="title-icon">📷</span>
          증명사진/여권사진 리사이징
        </h1>
        <p class="app-subtitle">클라이언트 기반 이미지 리사이징 도구</p>
      </div>
    </header>

    <main class="app-main">
      <div class="container">
        <!-- 이미지 업로더 섹션 -->
        <section class="section">
          <h2 class="section-title">1단계: 이미지 업로드</h2>
          <ImageUploader
            ref="uploaderRef"
            @imageLoaded="handleImageLoaded"
            @imageCleared="handleImageCleared"
          />
        </section>

        <!-- 규격 선택 섹션 -->
        <section class="section" v-if="uploadedImage">
          <h2 class="section-title">2단계: 사진 규격 선택</h2>
          <SizeSelector v-model="selectedSpec" />
        </section>

        <!-- 미리보기 & 다운로드 섹션 -->
        <section class="section" v-if="uploadedImage && selectedSpec">
          <div class="preview-download-wrapper">
            <div class="preview-section">
              <ImagePreview
                :sourceImage="uploadedImage"
                :selectedSpec="selectedSpec"
              />
            </div>
            <div class="download-section" v-if="resizedCanvas">
              <h2 class="section-title download-title">3단계: 다운로드</h2>
              <DownloadButton
                :canvas="resizedCanvas"
                :selectedSpec="selectedSpec"
              />
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p class="footer-text">
          이 도구는 클라이언트 사이드에서만 동작하며, 업로드된 이미지는 서버에 저장되지 않습니다.
        </p>
        <p class="footer-text">
          <span class="footer-highlight">팁:</span>
          최고 품질의 이미지를 얻으려면 원본 이미지는 최소 2048x2048px 이상이어야 합니다.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useImageResize } from './composables/useImageResize'
import ImageUploader from './components/ImageUploader.vue'
import SizeSelector from './components/SizeSelector.vue'
import ImagePreview from './components/ImagePreview.vue'
import DownloadButton from './components/DownloadButton.vue'

const uploaderRef = ref(null)
const uploadedImage = ref(null)
const selectedSpec = ref(null)
const resizedCanvas = ref(null)

const { loadImage, resizeImage } = useImageResize()

const handleImageLoaded = async (file) => {
  try {
    const image = await loadImage(file)
    uploadedImage.value = image
    selectedSpec.value = null // 새 이미지 업로드시 규격 선택 초기화
    resizedCanvas.value = null
  } catch (error) {
    console.error('이미지 로드 실패:', error)
  }
}

const handleImageCleared = () => {
  uploadedImage.value = null
  selectedSpec.value = null
  resizedCanvas.value = null
}

// 이미지 또는 규격 선택시 Canvas 리사이징
watch([uploadedImage, selectedSpec], () => {
  if (uploadedImage.value && selectedSpec.value) {
    resizedCanvas.value = resizeImage(uploadedImage.value, selectedSpec.value)
  } else {
    resizedCanvas.value = null
  }
})
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
}

.app-header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 48px 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.app-title {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.title-icon {
  font-size: 40px;
}

.app-subtitle {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  opacity: 0.95;
}

.app-main {
  flex: 1;
  padding: 48px 24px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section {
  margin-bottom: 48px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

.preview-download-wrapper {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.preview-section {
  flex: 0 0 50%;
  min-width: 0;
}

.download-section {
  flex: 0 0 calc(50% - 24px);
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.download-title {
  margin: 0;
}

.app-footer {
  background-color: white;
  border-top: 1px solid var(--border-color);
  padding: 32px 24px;
  margin-top: auto;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
}

.footer-text {
  font-size: 14px;
  color: #6b7280;
  margin: 8px 0;
  line-height: 1.6;
}

.footer-text:first-child {
  margin-top: 0;
}

.footer-highlight {
  font-weight: 600;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .app-header {
    padding: 32px 16px;
  }

  .app-title {
    font-size: 28px;
  }

  .title-icon {
    font-size: 32px;
  }

  .app-subtitle {
    font-size: 14px;
  }

  .app-main {
    padding: 32px 16px;
  }

  .section {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: 18px;
  }

  .app-footer {
    padding: 24px 16px;
  }

  .footer-text {
    font-size: 13px;
  }

  .preview-download-wrapper {
    flex-direction: column;
  }

  .preview-section,
  .download-section {
    flex: 1 1 100%;
  }
}
</style>
