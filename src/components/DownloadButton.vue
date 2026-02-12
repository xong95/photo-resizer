<template>
  <div class="download-container">
    <div class="download-controls">
      <div class="quality-control">
        <label for="quality" class="quality-label">이미지 품질:</label>
        <div class="quality-slider-wrapper">
          <input
            id="quality"
            v-model.number="quality"
            type="range"
            min="0.5"
            max="1"
            step="0.05"
            class="quality-slider"
          />
          <span class="quality-value">{{ Math.round(quality * 100) }}%</span>
        </div>
      </div>
    </div>

    <button
      @click="handleDownload"
      :disabled="!canDownload || isDownloading"
      class="download-button"
    >
      <span v-if="isDownloading" class="button-loading">
        <svg class="spinner" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"></circle>
        </svg>
        다운로드 중...
      </span>
      <span v-else>
        <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        다운로드
      </span>
    </button>

    <div v-if="downloadMessage" :class="['message', downloadMessage.type]">
      {{ downloadMessage.text }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useImageResize } from '../composables/useImageResize'

const props = defineProps({
  canvas: {
    type: HTMLCanvasElement,
    default: null
  },
  selectedSpec: {
    type: Object,
    default: null
  }
})

const { downloadImage } = useImageResize()
const quality = ref(1.0)
const isDownloading = ref(false)
const downloadMessage = ref(null)

const canDownload = computed(() => {
  return props.canvas && props.selectedSpec
})

const getFilename = () => {
  if (!props.selectedSpec) return 'photo.jpg'

  const timestamp = new Date().toISOString().split('T')[0]
  return `photo-${props.selectedSpec.widthCm}x${props.selectedSpec.heightCm}cm-${props.selectedSpec.dpi}dpi-${timestamp}.jpg`
}

const handleDownload = async () => {
  if (!canDownload.value) return

  isDownloading.value = true
  downloadMessage.value = null

  try {
    const filename = getFilename()
    downloadImage(props.canvas, filename, quality.value)

    downloadMessage.value = {
      type: 'success',
      text: `✓ ${filename} 다운로드 완료`
    }

    setTimeout(() => {
      downloadMessage.value = null
    }, 3000)
  } catch (error) {
    downloadMessage.value = {
      type: 'error',
      text: `✗ 다운로드 실패: ${error.message}`
    }
  } finally {
    isDownloading.value = false
  }
}
</script>

<style scoped>
.download-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.download-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: var(--background);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.quality-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quality-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
}

.quality-slider-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quality-slider {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.quality-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.3);
}

.quality-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.3);
}

.quality-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary-color);
  min-width: 45px;
  text-align: right;
}

.download-button {
  padding: 16px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 48px;
}

.download-button:hover:not(:disabled) {
  background-color: var(--secondary-color);
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.2);
  transform: translateY(-2px);
}

.download-button:active:not(:disabled) {
  transform: translateY(0);
}

.download-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.download-icon {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

.button-loading {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spinner {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.message {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  animation: slideIn 0.3s ease;
}

.message.success {
  background-color: #dcfce7;
  border: 1px solid #86efac;
  color: #166534;
}

.message.error {
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #991b1b;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .download-button {
    padding: 14px 20px;
    font-size: 14px;
  }

  .quality-slider-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .quality-value {
    min-width: auto;
    text-align: left;
  }
}
</style>
