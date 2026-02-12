<template>
  <div class="page-container">
    <div class="page-content">
      <h1 class="page-title">About</h1>

      <section class="content-section">
        <h2>📷 증명사진/여권사진 리사이징 도구</h2>
        <p>
          안전하고 빠른 클라이언트 기반 이미지 리사이징 서비스입니다.
          증명사진, 여권사진, 비자사진 등 다양한 규격의 사진을 손쉽게 만들 수 있습니다.
        </p>
      </section>

      <section class="content-section">
        <h2>✨ 주요 기능</h2>
        <ul>
          <li><strong>다양한 규격 지원</strong>: 증명사진, 여권사진, 비자사진 등 주요 규격 제공</li>
          <li><strong>고품질 리사이징</strong>: 단계적 리사이징 알고리즘으로 선명한 결과물 생성</li>
          <li><strong>100% 클라이언트 처리</strong>: 이미지가 서버에 업로드되지 않아 개인정보 보호</li>
          <li><strong>즉시 다운로드</strong>: 별도의 회원가입 없이 바로 사용 가능</li>
          <li><strong>품질 조절</strong>: 파일 크기와 품질을 자유롭게 조절</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>🔒 개인정보 보호</h2>
        <p>
          본 서비스는 <strong>100% 클라이언트 사이드</strong>에서 동작합니다.
        </p>
        <ul>
          <li>업로드한 이미지는 서버로 전송되지 않습니다</li>
          <li>모든 처리는 사용자의 브라우저 내에서만 이루어집니다</li>
          <li>개인정보를 수집하거나 저장하지 않습니다</li>
          <li>쿠키나 로컬 스토리지를 사용하지 않습니다</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>🎯 사용 방법</h2>
        <ol class="ordered-list">
          <li>이미지를 업로드합니다 (드래그 앤 드롭 또는 파일 선택)</li>
          <li>원하는 사진 규격을 선택합니다</li>
          <li>미리보기를 확인하고 품질을 조절합니다</li>
          <li>다운로드 버튼을 클릭하여 저장합니다</li>
        </ol>
      </section>

      <section class="content-section">
        <h2>💡 사용 팁</h2>
        <ul>
          <li>최고 품질의 결과물을 위해 <strong>2048x2048px 이상</strong>의 원본 이미지를 사용하세요</li>
          <li>증명사진은 밝은 배경에서 촬영된 정면 사진을 사용하세요</li>
          <li>품질 슬라이더로 파일 크기와 화질을 조절할 수 있습니다</li>
          <li>다운로드한 이미지는 실제 출력 전 규격을 확인하세요</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>🛠️ 기술 스택</h2>
        <ul>
          <li>Vue.js 3 - Progressive JavaScript Framework</li>
          <li>Vite - Next Generation Frontend Tooling</li>
          <li>Canvas API - High-quality Image Processing</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>📧 문의</h2>
        <p>
          서비스 이용 중 문의사항이나 개선 제안이 있으시면
          <router-link to="/contact" class="link">Contact</router-link> 페이지를 통해 연락 주시기 바랍니다.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px;
}

.page-content {
  background-color: white;
  border-radius: 12px;
  padding: 48px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--text-color);
  margin: 0 0 32px 0;
  padding-bottom: 16px;
  border-bottom: 3px solid var(--primary-color);
}

.content-section {
  margin-bottom: 32px;
}

.content-section h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 16px 0;
}

.content-section p {
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0 0 12px 0;
}

.content-section ul {
  margin: 12px 0;
  padding-left: 24px;
}

.content-section li {
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 8px;
}

.ordered-list {
  margin: 12px 0;
  padding-left: 24px;
  list-style-type: decimal;
}

.ordered-list li {
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 8px;
}

.link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .page-container {
    padding: 32px 16px;
  }

  .page-content {
    padding: 32px 24px;
  }

  .page-title {
    font-size: 24px;
  }

  .content-section h2 {
    font-size: 18px;
  }

  .content-section p,
  .content-section li,
  .ordered-list li {
    font-size: 14px;
  }
}
</style>
