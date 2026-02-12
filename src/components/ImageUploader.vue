<template>
  <div class="uploader-container">
    <div class="upload-area" @click="() => fileInput.click()" @drop="handleDrop" @dragover.prevent @dragenter.prevent>
      <input
        type="file"
        ref="fileInput"
        accept="image/jpeg,image/png"
        @change="handleFileSelect"
        class="file-input"
      />
      <div class="upload-content">
        <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <p class="upload-text">이미지를 여기로 드래그하세요</p>
        <p class="upload-subtext">또는 클릭하여 선택</p>
        <p class="upload-format">지원 형식: JPG, PNG (최대 10MB)</p>
      </div>
    </div>

    <div v-if="preview" class="preview-section">
      <div class="preview-info">
        <p class="preview-title">선택된 이미지</p>
        <p class="preview-filename">{{ fileName }}</p>
        <p class="preview-size">{{ fileSize }}</p>
      </div>
      <img :src="preview" :alt="fileName" class="preview-image" />
    </div>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['imageLoaded'],['imageCleared'])
const fileInput = ref(null)
const preview = ref(null)
const fileName = ref('')
const fileSize = ref('')
const error = ref(null)

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    processFile(file)
  }
}

const handleDrop = (event) => {
  event.preventDefault()
  event.stopPropagation()
  const file = event.dataTransfer.files[0]
  if (file) {
    processFile(file)
  }
}

const processFile = (file) => {
  error.value = null

  // 파일 유형 검증
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    error.value = 'JPG 또는 PNG 파일만 지원합니다.'
    return
  }

  // 파일 크기 검증
  if (file.size > MAX_FILE_SIZE) {
    error.value = '파일 크기가 10MB를 초과합니다.'
    return
  }

  fileName.value = file.name
  fileSize.value = `${(file.size / 1024 / 1024).toFixed(2)} MB`

  // 미리보기 생성
  const reader = new FileReader()
  reader.onload = (event) => {
    preview.value = event.target.result
    emit('imageLoaded', file)
  }
  reader.readAsDataURL(file)
}

const clearUpload = () => {
  preview.value = null
  fileName.value = ''
  fileSize.value = ''
  error.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  emit('imageCleared')
}

defineExpose({
  clearUpload
})
</script>

<style scoped>
.uploader-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.upload-area {
  border: 2px dashed var(--border-color);
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: rgba(79, 70, 229, 0.05);
}

.upload-area:hover {
  border-color: var(--primary-color);
  background-color: rgba(79, 70, 229, 0.1);
}

.file-input {
  display: none;
}

.upload-content {
  pointer-events: none;
}

.upload-icon {
  width: 48px;
  height: 48px;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.upload-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
  margin: 8px 0;
}

.upload-subtext {
  font-size: 14px;
  color: #9ca3af;
  margin: 4px 0 8px 0;
}

.upload-format {
  font-size: 12px;
  color: #d1d5db;
}

.preview-section {
  margin-top: 24px;
  padding: 20px;
  background-color: var(--background);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.preview-info {
  margin-bottom: 16px;
}

.preview-title {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  margin: 0 0 4px 0;
}

.preview-filename {
  font-size: 14px;
  color: var(--text-color);
  margin: 4px 0;
  word-break: break-all;
}

.preview-size {
  font-size: 12px;
  color: #9ca3af;
  margin: 4px 0;
}

.preview-image {
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  object-fit: contain;
}

.error-message {
  margin-top: 16px;
  padding: 12px;
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-size: 14px;
}

@media (max-width: 768px) {
  .upload-area {
    padding: 30px 15px;
  }

  .upload-icon {
    width: 40px;
    height: 40px;
  }

  .upload-text {
    font-size: 16px;
  }
}
</style>
