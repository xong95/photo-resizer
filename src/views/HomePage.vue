<template>
  <div id="app" class="app">
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
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useImageResize } from '../composables/useImageResize'
import ImageUploader from '../components/ImageUploader.vue'
import SizeSelector from '../components/SizeSelector.vue'
import ImagePreview from '../components/ImagePreview.vue'
import DownloadButton from '../components/DownloadButton.vue'

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

@media (max-width: 768px) {
  .app-main {
    padding: 32px 16px;
  }

  .section {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: 18px;
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
