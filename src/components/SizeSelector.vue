<template>
  <div class="selector-container">
    <h2 class="selector-title">사진 규격 선택</h2>
    <div class="specs-grid">
      <div
        v-for="spec in specs"
        :key="spec.id"
        class="spec-card"
        :class="{ active: isSelected(spec.id) }"
        @click="selectSpec(spec)"
      >
        <div class="spec-card-content">
          <h3 class="spec-name">{{ spec.name }}</h3>
          <div class="spec-dimensions">
            <span class="dimension">{{ spec.widthCm }} × {{ spec.heightCm }}cm</span>
            <span class="dimension-px">{{ spec.widthPx }} × {{ spec.heightPx }}px @ {{ spec.dpi }}DPI</span>
          </div>
        </div>
        <div v-if="isSelected(spec.id)" class="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePhotoSpecs } from '../composables/usePhotoSpecs'

const props = defineProps({
  modelValue: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const { specs } = usePhotoSpecs()

const isSelected = (specId) => {
  return props.modelValue?.id === specId
}

const selectSpec = (spec) => {
  emit('update:modelValue', spec)
}
</script>

<style scoped>
.selector-container {
  width: 100%;
}

.selector-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 20px 0;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.spec-card {
  position: relative;
  padding: 20px;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.spec-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);
  transform: translateY(-2px);
}

.spec-card.active {
  border-color: var(--primary-color);
  background-color: rgba(79, 70, 229, 0.05);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.spec-card-content {
  flex: 1;
}

.spec-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 8px 0;
}

.spec-dimensions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dimension {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
}

.dimension-px {
  font-size: 12px;
  color: #9ca3af;
}

.checkmark {
  width: 24px;
  height: 24px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  flex-shrink: 0;
}

.checkmark svg {
  width: 16px;
  height: 16px;
  stroke-width: 3;
}

@media (max-width: 768px) {
  .specs-grid {
    grid-template-columns: 1fr;
  }

  .selector-title {
    font-size: 18px;
  }

  .spec-card {
    padding: 16px;
  }
}
</style>
