<template>
  <div class="criminal-test-page">
    <div class="container">
      <!-- 헤더 -->
      <header class="page-header">
        <router-link to="/" class="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
          뒤로가기
        </router-link>
        <h1 class="page-title">
          <span class="icon">🔍</span>
          범죄자 관상 테스트
        </h1>
        <p class="page-subtitle">AI가 분석하는 재미있는 관상 테스트</p>
      </header>

      <!-- 면책 조항 -->
      <div class="warning-box">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <strong>주의:</strong> 이 테스트는 순수한 재미 목적이며,
          실제 범죄 예측이나 관상학과는 무관합니다.
          결과는 랜덤으로 생성되며 과학적 근거가 없습니다.
        </div>
      </div>

      <!-- 업로드 섹션 -->
      <section v-if="!analysisResult" class="upload-section">
        <div class="upload-card">
          <h2 class="section-title">📸 사진 업로드</h2>
          <p class="section-description">
            분석할 사진을 업로드해주세요. (얼굴이 잘 보이는 정면 사진 권장)
          </p>

          <div
            class="dropzone"
            :class="{ 'is-dragover': isDragOver }"
            @drop.prevent="handleDrop"
            @dragover.prevent="isDragOver = true"
            @dragleave.prevent="isDragOver = false"
          >
            <div v-if="!previewImage" class="dropzone-content">
              <div class="upload-icon">📤</div>
              <p class="upload-text">
                사진을 드래그하거나<br>
                클릭하여 업로드하세요
              </p>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleFileSelect"
                class="file-input"
              />
              <button @click="$refs.fileInput.click()" class="upload-button">
                파일 선택
              </button>
            </div>

            <div v-else class="preview-container">
              <img :src="previewImage" alt="Preview" class="preview-image" />
              <button @click="clearImage" class="clear-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <button
            v-if="previewImage"
            @click="startAnalysis"
            :disabled="isAnalyzing"
            class="analyze-button"
          >
            <span v-if="isAnalyzing" class="analyzing">
              <svg class="spinner" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"></circle>
              </svg>
              AI 분석 중...
            </span>
            <span v-else>
              🤖 AI 분석 시작
            </span>
          </button>

          <!-- 에러 메시지 -->
          <div v-if="errorMessage" class="error-message">
            <div class="error-icon">⚠️</div>
            <div class="error-text">{{ errorMessage }}</div>
            <button @click="errorMessage = null" class="error-close">×</button>
          </div>
        </div>
      </section>

      <!-- 결과 섹션 -->
      <section v-else class="result-section">
        <div class="result-card">
          <h2 class="section-title">📊 분석 결과</h2>

          <!-- 경고 메시지 (얼굴 감지 관련) -->
          <div v-if="analysisResult.warning" class="warning-banner">
            <div class="warning-icon">⚠️</div>
            <div class="warning-text">
              <strong>참고:</strong> {{ analysisResult.warning }}.
              결과는 정상적으로 생성되었지만 더 정확한 분석을 위해 얼굴이 잘 보이는 사진을 사용해주세요.
            </div>
          </div>

          <!-- 업로드한 이미지 -->
          <div class="result-image-container">
            <img :src="previewImage" alt="Analyzed" class="result-image" />
          </div>

          <!-- 최고 유형 -->
          <div class="top-result" :class="{ 'good-result': analysisResult.topCrime.isGood }">
            <div class="top-crime-badge">
              <span class="badge-icon">{{ analysisResult.topCrime.icon }}</span>
              <span class="badge-text">{{ analysisResult.topCrime.name }}</span>
            </div>
            <div class="top-percentage">{{ analysisResult.topCrime.percentage }}%</div>
            <p class="top-description">
              <template v-if="analysisResult.topCrime.isGood">
                축하합니다! 당신은 <strong>{{ analysisResult.topCrime.name }}</strong>을 가지고 있네요! 😊
              </template>
              <template v-else>
                당신은 <strong>{{ analysisResult.topCrime.name }}</strong> 관련 범죄자와
                가장 높은 유사도를 보입니다!
              </template>
            </p>
          </div>

          <!-- 전체 결과 차트 -->
          <div class="results-chart">
            <h3 class="chart-title">세부 분석 결과</h3>
            <div class="chart-bars">
              <div
                v-for="crime in analysisResult.results"
                :key="crime.id"
                class="chart-bar"
              >
                <div class="bar-info">
                  <span class="bar-label">
                    <span class="bar-icon">{{ crime.icon }}</span>
                    {{ crime.name }}
                  </span>
                  <span class="bar-percentage">{{ crime.percentage }}%</span>
                </div>
                <div class="bar-track">
                  <div
                    class="bar-fill"
                    :style="{
                      width: `${crime.percentage}%`,
                      backgroundColor: crime.color
                    }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 액션 버튼 -->
          <div class="action-buttons">
            <button @click="shareResult" class="share-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              결과 이미지 저장
            </button>
            <button @click="resetTest" class="retry-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2"></path>
              </svg>
              다시 테스트
            </button>
          </div>
        </div>
      </section>

      <!-- 공유 메시지 -->
      <div v-if="shareMessage" class="share-message">
        {{ shareMessage }}
      </div>

      <!-- About 섹션 (SEO 최적화) -->
      <div class="about-section">
        <h1 class="about-h1">범죄자 관상 테스트 무료 | AI 얼굴 분석 | 관상 AI 무료 테스트</h1>

        <section class="about-subsection">
          <h2 class="about-h2">🔍 범죄자 관상 AI 테스트란?</h2>
          <p>
            <strong>범죄자 관상 테스트</strong>는 최신 <strong>AI 얼굴 인식 기술</strong>(face-api.js)을 활용한
            재미있는 <strong>관상 분석 도구</strong>입니다. 사진을 업로드하면 인공지능이 자동으로 얼굴을 감지하고,
            13가지 관상 유형과의 유사도를 퍼센트로 분석해드립니다.
          </p>
          <ul class="keyword-list">
            <li><strong>무료 관상 테스트</strong> - 회원가입 없이 무제한 이용</li>
            <li><strong>AI 얼굴 분석</strong> - face-api.js 기반 고정밀 분석</li>
            <li><strong>범죄자 닮은꼴 찾기</strong> - 재미있는 유사도 분석</li>
            <li><strong>관상 AI 무료</strong> - 완전 무료 서비스</li>
          </ul>
        </section>

        <section class="about-subsection">
          <h2 class="about-h2">🎯 13가지 관상 유형 분석</h2>
          <p>
            <strong>범죄자 얼굴 테스트</strong>는 다양한 관상 카테고리를 제공합니다:
          </p>
          <ul class="keyword-list">
            <li><strong>선한상 테스트</strong> - 착한 사람 관상 분석</li>
            <li><strong>정직한상 분석</strong> - 정직한 얼굴 특징</li>
            <li><strong>사기상 테스트</strong> - 사기 관련 관상</li>
            <li><strong>폭행상 분석</strong> - 폭행 범죄 관상</li>
            <li><strong>마약상 테스트</strong> - 마약 관련 관상</li>
            <li><strong>절도상 분석</strong> - 절도 범죄 관상</li>
            <li><strong>횡령상 테스트</strong> - 횡령 관련 관상</li>
            <li><strong>도박상 분석</strong> - 도박 중독 관상</li>
            <li><strong>방화범상 테스트</strong> - 방화 범죄 관상</li>
            <li><strong>추행범상 분석</strong> - 성범죄 관상</li>
            <li><strong>음주운전상 테스트</strong> - 음주운전 관상</li>
            <li><strong>사이버범죄상</strong> - 해킹 범죄 관상</li>
          </ul>
        </section>

        <section class="about-subsection">
          <h2 class="about-h2">✨ 주요 기능</h2>
          <ul class="keyword-list">
            <li><strong>AI 얼굴 인식</strong> - 자동 얼굴 감지 및 검증</li>
            <li><strong>퍼센트 분석</strong> - 13가지 관상 유형별 정밀 분석</li>
            <li><strong>결과 이미지 생성</strong> - SNS 공유용 고품질 이미지</li>
            <li><strong>즉시 다운로드</strong> - 1080x1920 Instagram Story 크기</li>
            <li><strong>개인정보 보호</strong> - 서버 업로드 없는 안전한 처리</li>
            <li><strong>모바일 최적화</strong> - 스마트폰에서도 완벽 작동</li>
          </ul>
        </section>

        <section class="about-subsection">
          <h2 class="about-h2">🎭 재미있는 관상 테스트 활용법</h2>
          <ul class="keyword-list">
            <li><strong>친구들과 함께</strong> - 누가 가장 재미있는 결과가 나올까?</li>
            <li><strong>SNS 공유</strong> - 인스타그램 스토리로 공유하기</li>
            <li><strong>프로필 사진 테스트</strong> - 내 프사는 어떤 관상?</li>
            <li><strong>연예인 관상 분석</strong> - 좋아하는 연예인 얼굴 테스트</li>
          </ul>
        </section>

        <section class="about-subsection">
          <h2 class="about-h2">⚠️ 면책 조항</h2>
          <p>
            본 <strong>범죄자 관상 AI 테스트</strong>는 순수한 재미 목적의 엔터테인먼트 서비스입니다.
            실제 범죄 예측, 성격 판단, 관상학과는 무관하며, 결과는 랜덤으로 생성됩니다.
            어떠한 과학적 근거도 없으므로 실제 판단의 근거로 사용하지 마십시오.
          </p>
        </section>

        <section class="about-subsection">
          <h2 class="about-h2">🔥 인기 검색어</h2>
          <p class="tag-cloud">
            <span class="tag">#범죄자관상테스트</span>
            <span class="tag">#AI얼굴분석</span>
            <span class="tag">#관상AI</span>
            <span class="tag">#무료관상테스트</span>
            <span class="tag">#얼굴닮은꼴</span>
            <span class="tag">#선한상테스트</span>
            <span class="tag">#사기상분석</span>
            <span class="tag">#재미있는테스트</span>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCriminalFaceTest } from '../composables/useCriminalFaceTest'

const {
  isAnalyzing,
  analyzeFace,
  generateResultImage,
  downloadResultImage
} = useCriminalFaceTest()

const fileInput = ref(null)
const previewImage = ref(null)
const selectedFile = ref(null)
const isDragOver = ref(false)
const analysisResult = ref(null)
const shareMessage = ref(null)
const errorMessage = ref(null)

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    selectedFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const handleDrop = (event) => {
  isDragOver.value = false
  const file = event.dataTransfer.files[0]
  if (file && file.type.startsWith('image/')) {
    selectedFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const clearImage = () => {
  previewImage.value = null
  selectedFile.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const startAnalysis = async () => {
  if (!selectedFile.value) return

  errorMessage.value = null

  try {
    // 얼굴 감지 활성화 (이미지 리사이즈로 개선)
    analysisResult.value = await analyzeFace(selectedFile.value, { skipFaceDetection: false })
  } catch (error) {
    console.error('분석 실패:', error)
    errorMessage.value = error.message || '분석 중 오류가 발생했습니다. 다시 시도해주세요.'

    // 5초 후 에러 메시지 자동 제거
    setTimeout(() => {
      errorMessage.value = null
    }, 5000)
  }
}

const shareResult = () => {
  if (!analysisResult.value) return

  const canvas = generateResultImage(analysisResult.value)
  downloadResultImage(canvas)

  shareMessage.value = '✅ 결과 이미지가 저장되었습니다!'
  setTimeout(() => {
    shareMessage.value = null
  }, 3000)
}

const resetTest = () => {
  analysisResult.value = null
  errorMessage.value = null
  clearImage()
}
</script>

<style scoped>
.criminal-test-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px 24px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Header */
.page-header {
  text-align: center;
  margin-bottom: 32px;
  animation: fadeInDown 0.6s ease;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-bottom: 24px;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(-4px);
}

.back-button svg {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

.page-title {
  font-size: 42px;
  font-weight: 900;
  color: white;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.icon {
  font-size: 48px;
}

.page-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Warning Box */
.warning-box {
  display: flex;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(254, 226, 226, 0.95);
  border-left: 4px solid #ef4444;
  border-radius: 12px;
  margin-bottom: 32px;
  animation: fadeIn 0.8s ease;
}

.warning-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.warning-content {
  font-size: 14px;
  line-height: 1.6;
  color: #991b1b;
}

/* Upload Section */
.upload-section {
  animation: fadeInUp 0.8s ease;
}

.upload-card {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  color: #1a202c;
  margin: 0 0 12px 0;
}

.section-description {
  font-size: 15px;
  color: #4a5568;
  margin: 0 0 32px 0;
}

/* Dropzone */
.dropzone {
  position: relative;
  min-height: 400px;
  border: 3px dashed #cbd5e0;
  border-radius: 16px;
  background: #f7fafc;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropzone.is-dragover {
  border-color: #667eea;
  background: #edf2f7;
}

.dropzone-content {
  text-align: center;
  padding: 40px;
}

.upload-icon {
  font-size: 72px;
  margin-bottom: 24px;
}

.upload-text {
  font-size: 18px;
  color: #4a5568;
  margin: 0 0 24px 0;
  line-height: 1.6;
}

.file-input {
  display: none;
}

.upload-button {
  padding: 14px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

/* Preview */
.preview-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.preview-image {
  max-width: 100%;
  max-height: 400px;
  border-radius: 12px;
  object-fit: contain;
}

.clear-button {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: rgba(239, 68, 68, 0.9);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.clear-button:hover {
  background: #dc2626;
  transform: scale(1.1);
}

.clear-button svg {
  width: 20px;
  height: 20px;
  stroke-width: 3;
}

/* Analyze Button */
.analyze-button {
  width: 100%;
  padding: 18px;
  margin-top: 24px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.analyze-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 87, 108, 0.4);
}

.analyze-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.analyzing {
  display: flex;
  align-items: center;
  gap: 12px;
}

.spinner {
  width: 24px;
  height: 24px;
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

/* Result Section */
.result-section {
  animation: fadeIn 0.8s ease;
}

.result-card {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

/* Warning Banner */
.warning-banner {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  margin-bottom: 24px;
  background: rgba(254, 243, 199, 0.95);
  border-left: 4px solid #f59e0b;
  border-radius: 12px;
}

.warning-banner .warning-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.warning-banner .warning-text {
  flex: 1;
  font-size: 14px;
  color: #92400e;
  line-height: 1.6;
}

.result-image-container {
  text-align: center;
  margin-bottom: 32px;
}

.result-image {
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

/* Top Result */
.top-result {
  text-align: center;
  padding: 32px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 32px;
}

.top-result.good-result {
  background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
}

.top-crime-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

.badge-icon {
  font-size: 28px;
}

.top-percentage {
  font-size: 72px;
  font-weight: 900;
  margin: 16px 0;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.top-description {
  font-size: 16px;
  margin: 0;
  opacity: 0.95;
}

/* Results Chart */
.results-chart {
  margin-bottom: 32px;
}

.chart-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 24px 0;
}

.chart-bars {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chart-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bar-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}

.bar-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1a202c;
}

.bar-icon {
  font-size: 18px;
}

.bar-percentage {
  color: #4a5568;
}

.bar-track {
  height: 24px;
  background: #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 12px;
  transition: width 0.8s ease;
}

/* Action Buttons */
.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.share-button,
.retry-button {
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.share-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.share-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.retry-button {
  background: #e2e8f0;
  color: #1a202c;
}

.retry-button:hover {
  background: #cbd5e0;
  transform: translateY(-2px);
}

.share-button svg,
.retry-button svg {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

/* Error Message */
.error-message {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  margin-top: 16px;
  background: rgba(254, 226, 226, 0.95);
  border-left: 4px solid #ef4444;
  border-radius: 12px;
  animation: slideIn 0.3s ease;
}

.error-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.error-text {
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: #991b1b;
  line-height: 1.5;
}

.error-close {
  width: 28px;
  height: 28px;
  background: rgba(220, 38, 38, 0.1);
  border: none;
  border-radius: 50%;
  color: #dc2626;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.error-close:hover {
  background: rgba(220, 38, 38, 0.2);
  transform: scale(1.1);
}

/* Share Message */
.share-message {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 32px;
  background: rgba(16, 185, 129, 0.95);
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease;
  z-index: 1000;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/* About Section (SEO) */
.about-section {
  max-width: 900px;
  margin: 64px auto 0;
  padding: 48px 32px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.about-h1 {
  font-size: 28px;
  font-weight: 900;
  color: #1a202c;
  margin: 0 0 32px 0;
  line-height: 1.4;
  text-align: center;
  border-bottom: 4px solid #f5576c;
  padding-bottom: 20px;
}

.about-subsection {
  margin-bottom: 32px;
  padding: 24px;
  background: #f7fafc;
  border-radius: 12px;
  border-left: 4px solid #f5576c;
}

.about-h2 {
  font-size: 22px;
  font-weight: 800;
  color: #f5576c;
  margin: 0 0 16px 0;
}

.about-subsection p {
  font-size: 15px;
  line-height: 1.8;
  color: #2d3748;
  margin: 0 0 16px 0;
}

.keyword-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
}

.keyword-list li {
  font-size: 14px;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 10px;
  padding-left: 24px;
  position: relative;
}

.keyword-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #f5576c;
  font-weight: 700;
  font-size: 16px;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  padding: 6px 14px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .criminal-test-page {
    padding: 24px 16px;
  }

  .about-section {
    padding: 32px 20px;
  }

  .about-h1 {
    font-size: 22px;
  }

  .about-h2 {
    font-size: 18px;
  }

  .page-title {
    font-size: 32px;
  }

  .icon {
    font-size: 36px;
  }

  .upload-card,
  .result-card {
    padding: 24px;
  }

  .section-title {
    font-size: 24px;
  }

  .dropzone {
    min-height: 300px;
  }

  .result-image {
    max-width: 200px;
    max-height: 200px;
  }

  .top-percentage {
    font-size: 56px;
  }

  .action-buttons {
    grid-template-columns: 1fr;
  }
}
</style>
