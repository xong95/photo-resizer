<template>
  <div class="preview-container">
    <div class="preview-info">
      <h2 class="preview-title">미리보기</h2>
      <p class="preview-subtitle">리사이징된 이미지</p>
    </div>

    <div v-if="!canvas" class="preview-placeholder">
      <p class="placeholder-text">이미지를 업로드하고 규격을 선택하세요</p>
    </div>

    <div v-else class="preview-wrapper">
      <div class="preview-canvas-container">
        <canvas
          :width="canvas.width"
          :height="canvas.height"
          class="preview-canvas"
        ></canvas>
        <div class="specs-display">
          <div class="spec-item">
            <span class="spec-label">크기:</span>
            <span class="spec-value">
              {{ selectedSpec.widthCm }} × {{ selectedSpec.heightCm }} cm
            </span>
          </div>
          <div class="spec-item">
            <span class="spec-label">해상도:</span>
            <span class="spec-value">
              {{ selectedSpec.widthPx }} × {{ selectedSpec.heightPx }} px @ {{ selectedSpec.dpi }}DPI
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useImageResize } from '../composables/useImageResize'

const props = defineProps({
  sourceImage: {
    type: Image,
    default: null
  },
  selectedSpec: {
    type: Object,
    default: null
  }
})

const { resizeImage } = useImageResize()
const canvas = ref(null)

watch([() => props.sourceImage, () => props.selectedSpec], async () => {
  if (props.sourceImage && props.selectedSpec) {
    const resizedCanvas = resizeImage(props.sourceImage, props.selectedSpec)
    canvas.value = resizedCanvas

    // Canvas를 DOM에 렌더링
    await nextTick()
    const canvasElement = document.querySelector('.preview-canvas')
    if (canvasElement && resizedCanvas) {
      const ctx = canvasElement.getContext('2d')
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
      ctx.drawImage(resizedCanvas, 0, 0)
    }
  } else {
    canvas.value = null
  }
}, { immediate: true })
</script>

<style scoped>
.preview-container {
  width: 100%;
}

.preview-info {
  margin-bottom: 20px;
}

.preview-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 4px 0;
}

.preview-subtitle {
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
}

.preview-placeholder {
  padding: 60px 20px;
  text-align: center;
  background-color: var(--background);
  border: 2px dashed var(--border-color);
  border-radius: 12px;
}

.placeholder-text {
  color: #9ca3af;
  font-size: 16px;
  margin: 0;
}

.preview-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.preview-canvas-container {
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.preview-canvas {
  max-width: 100%;
  height: auto;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  display: block;
}

.specs-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  background-color: var(--background);
  border-radius: 8px;
}

.spec-label {
  font-size: 12px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spec-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .preview-title {
    font-size: 18px;
  }

  .specs-display {
    grid-template-columns: 1fr;
  }
}
</style>
