<template>
  <div class="main-page">
    <div class="hero-section">
      <h1 class="hero-title">
        <span class="emoji">🎭</span>
        AI 재미 테스트 플랫폼
      </h1>
      <p class="hero-subtitle">
        재미있는 AI 기반 이미지 분석 서비스를 경험해보세요
      </p>
    </div>

    <div class="services-container">
      <div class="services-grid">
        <!-- 범죄자 관상 테스트 -->
        <router-link to="/criminal-face" class="service-card criminal">
          <div class="card-icon">🔍</div>
          <h2 class="card-title">범죄자 관상 테스트</h2>
          <p class="card-description">
            AI가 분석하는 재미있는 관상 테스트!<br>
            나는 어떤 범죄자와 닮았을까?
          </p>
          <div class="card-tags">
            <span class="tag">🎭 재미</span>
            <span class="tag">🤖 AI 분석</span>
            <span class="tag">📊 통계</span>
          </div>
          <div class="card-button">
            <span>테스트 시작하기</span>
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
          <div class="card-badge">🔥 인기</div>
        </router-link>

        <!-- 증명사진 리사이징 -->
        <router-link to="/photo-resize" class="service-card photo">
          <div class="card-icon">📷</div>
          <h2 class="card-title">증명사진 리사이징</h2>
          <p class="card-description">
            무료로 증명사진, 여권사진을 만들어보세요.<br>
            다양한 규격을 지원합니다.
          </p>
          <div class="card-tags">
            <span class="tag">✅ 무료</span>
            <span class="tag">🔒 안전</span>
            <span class="tag">⚡ 빠름</span>
          </div>
          <div class="card-button">
            <span>시작하기</span>
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 주요 특징 -->
    <div class="features-section">
      <h2 class="features-title">왜 우리 서비스인가요?</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">🔒</div>
          <h3 class="feature-title">100% 안전</h3>
          <p class="feature-description">
            모든 처리는 브라우저에서 이루어지며<br>
            서버에 데이터를 저장하지 않습니다
          </p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">⚡</div>
          <h3 class="feature-title">빠른 처리</h3>
          <p class="feature-description">
            클라이언트 기반 처리로<br>
            빠르게 결과를 확인할 수 있습니다
          </p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">💯</div>
          <h3 class="feature-title">완전 무료</h3>
          <p class="feature-description">
            모든 기능을 무료로 제공하며<br>
            회원가입도 필요 없습니다
          </p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">📱</div>
          <h3 class="feature-title">모바일 지원</h3>
          <p class="feature-description">
            PC, 태블릿, 스마트폰 등<br>
            모든 기기에서 사용 가능합니다
          </p>
        </div>
      </div>
    </div>

    <!-- About 섹션 (SEO 최적화) -->
    <div class="about-section">
      <div class="about-container">
        <h1 class="about-h1">AI 관상 테스트 무료 | 범죄자 닮은꼴 찾기 | 무료 증명사진 만들기</h1>

        <div class="about-content">
          <section class="about-subsection">
            <h2 class="about-h2">🎭 재미있는 AI 얼굴 분석 테스트</h2>
            <p>
              <strong>AI 관상 테스트</strong>와 <strong>무료 증명사진 만들기</strong>를 한 곳에서!
              최신 AI 기술을 활용한 <strong>얼굴 분석 테스트</strong>와 실용적인 <strong>증명사진 리사이징 도구</strong>를
              무료로 이용하세요. 회원가입 없이 바로 사용 가능하며, 모든 처리는 브라우저에서 안전하게 진행됩니다.
            </p>
            <ul class="keyword-list">
              <li><strong>AI 관상 분석</strong> - 인공지능이 분석하는 재미있는 관상 테스트</li>
              <li><strong>범죄자 얼굴 닮은꼴</strong> - 나는 어떤 범죄자와 닮았을까?</li>
              <li><strong>무료 얼굴 분석 도구</strong> - 완전 무료, 무제한 이용</li>
              <li><strong>온라인 증명사진 제작</strong> - 집에서 간편하게 만드는 증명사진</li>
            </ul>
          </section>

          <section class="about-subsection">
            <h2 class="about-h2">🔍 범죄자 관상 테스트란?</h2>
            <p>
              <strong>범죄자 관상 AI 테스트</strong>는 face-api.js 기반의 <strong>얼굴 인식 기술</strong>을 활용한
              재미있는 분석 도구입니다. 사진을 업로드하면 AI가 얼굴을 분석하여 13가지 관상 유형
              (<strong>사기상</strong>, <strong>폭행상</strong>, <strong>선한상</strong> 등)과의 유사도를
              퍼센트로 보여줍니다.
            </p>
            <ul class="keyword-list">
              <li><strong>관상 테스트 무료</strong> - 비용 없이 무제한 테스트</li>
              <li><strong>얼굴 닮은꼴 찾기</strong> - AI가 분석하는 얼굴 유사도</li>
              <li><strong>재미있는 심리테스트</strong> - SNS 공유용 결과 이미지 제공</li>
              <li><strong>범죄 유형 분석</strong> - 13가지 관상 카테고리</li>
            </ul>
          </section>

          <section class="about-subsection">
            <h2 class="about-h2">📷 무료 증명사진 만들기 서비스</h2>
            <p>
              <strong>증명사진 온라인 제작</strong>부터 <strong>여권사진 사이즈 변환</strong>,
              <strong>이력서사진 크기 조정</strong>까지 한 번에! 다양한 규격을 지원하며,
              고품질 리사이징 알고리즘으로 선명한 결과물을 보장합니다.
            </p>
            <ul class="keyword-list">
              <li><strong>여권사진 규격 맞추기</strong> - 3.5x4.5cm 국제 표준 규격</li>
              <li><strong>이력서 증명사진 사이즈</strong> - 3x4cm 표준 사이즈</li>
              <li><strong>운전면허증 사진 규격</strong> - 다양한 증명사진 규격 지원</li>
              <li><strong>비자사진 만들기</strong> - 국가별 비자 사진 규격</li>
              <li><strong>증명사진 배경 제거</strong> - 깔끔한 배경 처리</li>
            </ul>
          </section>

          <section class="about-subsection">
            <h2 class="about-h2">✨ 왜 우리 서비스를 선택해야 할까요?</h2>
            <ul class="keyword-list">
              <li><strong>완전 무료 사진 편집</strong> - 모든 기능 영구 무료</li>
              <li><strong>개인정보 보호</strong> - 서버 업로드 없는 클라이언트 처리</li>
              <li><strong>빠른 AI 분석</strong> - 2초 만에 완료되는 얼굴 분석</li>
              <li><strong>고품질 결과물</strong> - 전문가급 증명사진 품질</li>
              <li><strong>모바일 최적화</strong> - 스마트폰에서도 완벽 작동</li>
              <li><strong>SNS 공유 기능</strong> - 결과 이미지 다운로드 및 공유</li>
            </ul>
          </section>

          <section class="about-subsection">
            <h2 class="about-h2">🎯 이런 분들께 추천합니다</h2>
            <ul class="keyword-list">
              <li><strong>재미있는 테스트 찾는 분</strong> - AI 관상 분석으로 친구들과 재미</li>
              <li><strong>증명사진 급하게 필요한 분</strong> - 집에서 5분 만에 제작</li>
              <li><strong>사진 스튜디오 비용 아끼고 싶은 분</strong> - 완전 무료 서비스</li>
              <li><strong>여권/비자 신청 준비 중인 분</strong> - 정확한 규격 보장</li>
              <li><strong>이력서 작성 중인 취준생</strong> - 전문적인 증명사진</li>
            </ul>
          </section>

          <section class="about-subsection">
            <h2 class="about-h2">🚀 사용 방법 (3분이면 완성!)</h2>
            <ol class="ordered-list">
              <li><strong>서비스 선택</strong> - 관상 테스트 또는 증명사진 제작 선택</li>
              <li><strong>사진 업로드</strong> - 드래그 앤 드롭으로 간편 업로드</li>
              <li><strong>AI 분석 or 규격 선택</strong> - 자동 처리 또는 원하는 규격 선택</li>
              <li><strong>결과 확인 및 다운로드</strong> - 고품질 이미지 저장</li>
            </ol>
          </section>
        </div>
      </div>
    </div>

    <!-- 면책 조항 -->
    <div class="disclaimer">
      <p class="disclaimer-text">
        ⚠️ <strong>범죄자 관상 테스트</strong>는 순수한 재미 목적의 서비스이며,
        실제 범죄 예측이나 관상학과는 무관합니다. 결과는 랜덤으로 생성되며,
        어떠한 과학적 근거도 없습니다.
      </p>
    </div>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.main-page {
  min-height: 100vh;
  padding: 48px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 64px;
  animation: fadeInDown 0.6s ease;
}

.hero-title {
  font-size: 48px;
  font-weight: 900;
  color: white;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.emoji {
  font-size: 56px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* Services Container */
.services-container {
  max-width: 1200px;
  margin: 0 auto 64px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 32px;
  animation: fadeInUp 0.8s ease;
}

/* Service Card */
.service-card {
  position: relative;
  background: white;
  border-radius: 24px;
  padding: 40px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.service-card.criminal::before {
  background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.card-title {
  font-size: 28px;
  font-weight: 800;
  color: #1a202c;
  margin: 0 0 16px 0;
}

.card-description {
  font-size: 16px;
  line-height: 1.6;
  color: #4a5568;
  margin: 0 0 24px 0;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.tag {
  padding: 6px 12px;
  background-color: #edf2f7;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #4a5568;
}

.card-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.service-card.criminal .card-button {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.service-card:hover .card-button {
  transform: scale(1.05);
}

.arrow-icon {
  width: 24px;
  height: 24px;
  stroke-width: 3;
  transition: transform 0.3s ease;
}

.service-card:hover .arrow-icon {
  transform: translateX(4px);
}

.card-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(240, 147, 251, 0.4);
}

/* Features Section */
.features-section {
  max-width: 1200px;
  margin: 0 auto 64px;
  animation: fadeInUp 1s ease;
}

.features-title {
  font-size: 36px;
  font-weight: 800;
  color: white;
  text-align: center;
  margin: 0 0 48px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.feature-item {
  text-align: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin: 0 0 12px 0;
}

.feature-description {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

/* About Section (SEO) */
.about-section {
  max-width: 1200px;
  margin: 64px auto;
  padding: 48px 32px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
}

.about-h1 {
  font-size: 32px;
  font-weight: 900;
  color: #1a202c;
  margin: 0 0 32px 0;
  line-height: 1.4;
  text-align: center;
  border-bottom: 4px solid var(--primary-color);
  padding-bottom: 20px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.about-subsection {
  padding: 24px;
  background: #f7fafc;
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
}

.about-h2 {
  font-size: 24px;
  font-weight: 800;
  color: var(--primary-color);
  margin: 0 0 16px 0;
}

.about-subsection p {
  font-size: 16px;
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
  font-size: 15px;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;
}

.keyword-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 18px;
}

.ordered-list {
  counter-reset: item;
  list-style-type: none;
  padding: 0;
  margin: 16px 0 0 0;
}

.ordered-list li {
  font-size: 15px;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 12px;
  padding-left: 32px;
  position: relative;
}

.ordered-list li::before {
  content: counter(item) '.';
  counter-increment: item;
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 18px;
}

/* Disclaimer */
.disclaimer {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  border-left: 4px solid #f5576c;
}

.disclaimer-text {
  font-size: 14px;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
}

/* Animations */
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

/* Responsive */
@media (max-width: 768px) {
  .main-page {
    padding: 32px 16px;
  }

  .hero-title {
    font-size: 32px;
  }

  .emoji {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .service-card {
    padding: 32px 24px;
  }

  .card-title {
    font-size: 24px;
  }

  .card-icon {
    font-size: 48px;
  }

  .features-title {
    font-size: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-item {
    padding: 24px;
  }

  .disclaimer {
    padding: 20px 24px;
  }
}
</style>
