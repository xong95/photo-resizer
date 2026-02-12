<template>
  <div class="page-container">
    <div class="page-content">
      <h1 class="page-title">이용약관</h1>
      <p class="update-date">최종 업데이트: {{ updateDate }}</p>

      <section class="content-section">
        <h2>1. 서비스 이용</h2>
        <p>
          본 서비스는 증명사진 및 여권사진 리사이징을 위한 <strong>무료 웹 도구</strong>입니다.
        </p>
        <ul>
          <li>별도의 회원가입 없이 누구나 이용 가능합니다</li>
          <li>모든 처리는 클라이언트(브라우저) 내에서 이루어집니다</li>
          <li>업로드된 이미지는 서버에 전송되지 않습니다</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>2. 서비스의 제공</h2>
        <p>본 서비스는 다음과 같은 기능을 제공합니다:</p>
        <ul>
          <li>이미지 업로드 및 미리보기</li>
          <li>다양한 증명사진 규격으로 리사이징</li>
          <li>고품질 이미지 다운로드</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>3. 사용자의 의무</h2>
        <ul>
          <li>본 서비스를 불법적인 목적으로 사용하지 않습니다</li>
          <li>타인의 개인정보나 저작권을 침해하지 않습니다</li>
          <li>서비스의 정상적인 운영을 방해하지 않습니다</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>4. 서비스의 중단</h2>
        <p>
          운영자는 다음과 같은 경우 서비스 제공을 일시적으로 중단할 수 있습니다:
        </p>
        <ul>
          <li>시스템 정기점검, 증설, 교체 시</li>
          <li>새로운 서비스로 교체하기 위한 시스템 작업 시</li>
          <li>시스템 또는 기타 서비스 설비의 장애, 유무선 Network 장애 등으로 정상적인 서비스 제공이 불가능할 시</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>5. 면책조항</h2>
        <ul>
          <li>본 서비스는 "있는 그대로" 제공되며, 특정 목적에의 적합성을 보증하지 않습니다</li>
          <li>사용자가 본 서비스를 이용하여 생성한 결과물에 대한 책임은 사용자에게 있습니다</li>
          <li>브라우저 호환성 문제로 인한 서비스 이용 제한이 있을 수 있습니다</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>6. 저작권</h2>
        <p>
          본 서비스의 소스코드 및 디자인에 대한 저작권은 운영자에게 있습니다.
          사용자가 업로드하는 이미지의 저작권은 사용자에게 있습니다.
        </p>
      </section>

      <section class="content-section">
        <h2>7. 약관의 변경</h2>
        <p>
          본 약관은 관련 법령의 변경 또는 서비스 정책의 변경에 따라 수정될 수 있으며,
          변경 시 공지사항을 통해 알려드립니다.
        </p>
      </section>

      <section class="content-section">
        <h2>8. 문의</h2>
        <p>
          서비스 이용 중 문의사항이 있으시면 Contact 페이지를 통해 연락 주시기 바랍니다.
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
