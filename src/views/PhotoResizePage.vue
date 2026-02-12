<template>
  <div id="app" class="app">
    <main class="app-main">
      <div class="container">
        <!-- SEO 콘텐츠 -->
        <section class="seo-section">
          <h1 class="seo-title">무료 증명사진 만들기 | 여권사진 규격 변환 도구</h1>
          <p class="seo-description">
            <strong>100% 무료</strong>로 증명사진, 여권사진, 이력서사진, 운전면허 사진을
            간편하게 만들어보세요. 서버 업로드 없이 브라우저에서 안전하게 처리되며,
            다양한 규격을 지원합니다.
          </p>
        </section>

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

        <!-- SEO 추가 콘텐츠 -->
        <section class="info-section">
          <div class="info-grid">
            <div class="info-card">
              <h2 class="info-title">🎯 지원 규격</h2>
              <ul class="info-list">
                <li><strong>여권사진 규격</strong>: 3.5 x 4.5cm (국내/해외)</li>
                <li><strong>이력서사진 사이즈</strong>: 3 x 4cm</li>
                <li><strong>운전면허 사진 규격</strong>: 3 x 4cm</li>
                <li><strong>증명사진</strong>: 2.5 x 3cm, 3 x 4cm</li>
                <li><strong>비자사진</strong>: 국가별 다양한 규격</li>
              </ul>
            </div>

            <div class="info-card">
              <h2 class="info-title">✨ 주요 기능</h2>
              <ul class="info-list">
                <li><strong>무료 증명사진 만들기</strong> - 별도 비용 없음</li>
                <li><strong>고품질 리사이징</strong> - 선명한 결과물</li>
                <li><strong>개인정보 보호</strong> - 서버 업로드 없음</li>
                <li><strong>즉시 다운로드</strong> - 회원가입 불필요</li>
                <li><strong>다양한 규격</strong> - 한국/해외 표준 지원</li>
              </ul>
            </div>

            <div class="info-card">
              <h2 class="info-title">📱 사용 방법</h2>
              <ol class="info-list numbered">
                <li>사진을 업로드하세요 (드래그 앤 드롭 가능)</li>
                <li>원하는 증명사진 규격을 선택하세요</li>
                <li>미리보기로 결과를 확인하세요</li>
                <li>다운로드 버튼을 눌러 저장하세요</li>
              </ol>
            </div>

            <div class="info-card">
              <h2 class="info-title">💡 꿀팁</h2>
              <ul class="info-list">
                <li><strong>최적 해상도</strong>: 2048x2048px 이상 권장</li>
                <li><strong>배경</strong>: 밝은 단색 배경에서 촬영</li>
                <li><strong>정면 사진</strong>: 얼굴이 정면을 향하도록</li>
                <li><strong>품질 조절</strong>: 슬라이더로 파일 크기 조정</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- FAQ 섹션 -->
        <section class="faq-section">
          <h2 class="faq-title">자주 묻는 질문</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3 class="faq-question">Q. 증명사진 만들기는 정말 무료인가요?</h3>
              <p class="faq-answer">
                네, 100% 무료입니다. 숨겨진 비용이나 회원가입 없이 모든 기능을 무료로 사용하실 수 있습니다.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Q. 업로드한 이미지는 안전한가요?</h3>
              <p class="faq-answer">
                매우 안전합니다. 모든 처리는 사용자의 브라우저 내에서만 이루어지며,
                서버로 이미지가 전송되거나 저장되지 않습니다.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Q. 어떤 여권사진 규격을 지원하나요?</h3>
              <p class="faq-answer">
                한국 여권사진(3.5 x 4.5cm), 미국 비자사진, 일본 비자사진 등
                다양한 국가의 여권 및 비자 사진 규격을 지원합니다.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Q. 이력서사진 사이즈는 어떻게 조절하나요?</h3>
              <p class="faq-answer">
                2단계에서 "이력서사진 (3x4cm)" 규격을 선택하시면 자동으로
                적절한 크기로 변환됩니다. 고품질 결과물을 보장합니다.
              </p>
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

/* SEO Section */
.seo-section {
  text-align: center;
  margin-bottom: 48px;
  padding: 32px 24px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  animation: fadeIn 0.5s ease;
}

.seo-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-color);
  margin: 0 0 16px 0;
  line-height: 1.4;
}

.seo-description {
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;
  margin: 0;
  max-width: 700px;
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

/* Info Section */
.info-section {
  margin: 64px 0;
  padding: 48px 32px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.info-card {
  padding: 24px;
  background-color: var(--background);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.info-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 16px 0;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.info-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
}

.info-list.numbered {
  counter-reset: item;
  list-style-type: none;
}

.info-list.numbered li::before {
  content: counter(item) '.';
  counter-increment: item;
  color: var(--primary-color);
  font-weight: 700;
}

/* FAQ Section */
.faq-section {
  margin: 64px 0;
  padding: 48px 32px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 16px;
}

.faq-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--text-color);
  margin: 0 0 32px 0;
  text-align: center;
}

.faq-list {
  display: grid;
  gap: 24px;
}

.faq-item {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.faq-question {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 12px 0;
}

.faq-answer {
  font-size: 15px;
  line-height: 1.7;
  color: #4b5563;
  margin: 0;
}

@media (max-width: 768px) {
  .app-main {
    padding: 32px 16px;
  }

  .seo-section {
    padding: 24px 16px;
    margin-bottom: 32px;
  }

  .seo-title {
    font-size: 22px;
  }

  .seo-description {
    font-size: 14px;
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

  .info-section,
  .faq-section {
    padding: 32px 20px;
    margin: 48px 0;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .info-card {
    padding: 20px;
  }

  .info-title,
  .faq-title {
    font-size: 20px;
  }

  .faq-question {
    font-size: 16px;
  }

  .info-list li,
  .faq-answer {
    font-size: 14px;
  }
}
</style>
