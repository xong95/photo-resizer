<template>
  <div class="page-container">
    <div class="page-content">
      <h1 class="page-title">개인정보처리방침</h1>
      <p class="update-date">최종 업데이트: {{ updateDate }}</p>

      <section class="content-section">
        <h2>1. 개인정보의 처리 목적</h2>
        <p>
          본 서비스는 <strong>클라이언트 사이드 전용 이미지 리사이징 도구</strong>로서,
          서버에 어떠한 데이터도 전송하거나 저장하지 않습니다.
        </p>
        <ul>
          <li>업로드된 이미지는 사용자의 브라우저 내에서만 처리됩니다</li>
          <li>개인정보를 수집, 저장, 전송하지 않습니다</li>
          <li>쿠키나 로컬 스토리지를 사용하지 않습니다</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>2. 처리하는 개인정보의 항목</h2>
        <p>본 서비스는 개인정보를 수집하지 않습니다.</p>
      </section>

      <section class="content-section">
        <h2>3. 개인정보의 처리 및 보유 기간</h2>
        <p>
          업로드된 이미지는 브라우저를 종료하거나 페이지를 새로고침하면 즉시 삭제되며,
          서버에 저장되지 않습니다.
        </p>
      </section>

      <section class="content-section">
        <h2>4. 개인정보의 제3자 제공</h2>
        <p>본 서비스는 개인정보를 제3자에게 제공하지 않습니다.</p>
      </section>

      <section class="content-section">
        <h2>5. 개인정보처리의 위탁</h2>
        <p>본 서비스는 개인정보 처리를 위탁하지 않습니다.</p>
      </section>

      <section class="content-section">
        <h2>6. 정보주체의 권리·의무 및 행사방법</h2>
        <p>
          본 서비스는 개인정보를 수집하지 않으므로, 별도의 권리 행사가 필요하지 않습니다.
        </p>
      </section>

      <section class="content-section">
        <h2>7. 개인정보 보호책임자</h2>
        <p>문의사항이 있으실 경우 Contact 페이지를 통해 연락 주시기 바랍니다.</p>
      </section>

      <section class="content-section">
        <h2>8. 개인정보처리방침의 변경</h2>
        <p>
          본 개인정보처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는
          변경사항을 공지사항을 통해 알려드리겠습니다.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const updateDate = ref(new Date().toLocaleDateString('ko-KR'))
</script>

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
  margin: 0 0 12px 0;
  padding-bottom: 16px;
  border-bottom: 3px solid var(--primary-color);
}

.update-date {
  font-size: 14px;
  color: #9ca3af;
  margin: 0 0 32px 0;
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
  .content-section li {
    font-size: 14px;
  }
}
</style>
