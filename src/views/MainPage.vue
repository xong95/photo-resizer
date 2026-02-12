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
