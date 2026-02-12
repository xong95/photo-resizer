<template>
  <div class="page-container">
    <div class="page-content">
      <h1 class="page-title">Contact</h1>

      <section class="content-section">
        <h2>📧 문의하기</h2>
        <p>
          서비스 이용 중 문의사항, 버그 제보, 기능 제안 등이 있으시면 언제든지 연락 주세요.
        </p>

        <p>
          Email : <a href="mailto:1901402@naver.com">1901402@naver.com</a>
        </p>
      </section>

      <!-- <div class="contact-form">
        <div class="form-group">
          <label for="name" class="form-label">이름</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="form-input"
            placeholder="홍길동"
          />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">이메일</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="form-input"
            placeholder="example@email.com"
          />
        </div>

        <div class="form-group">
          <label for="subject" class="form-label">제목</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            class="form-input"
            placeholder="문의 제목을 입력하세요"
          />
        </div>

        <div class="form-group">
          <label for="message" class="form-label">내용</label>
          <textarea
            id="message"
            v-model="form.message"
            class="form-textarea"
            rows="6"
            placeholder="문의 내용을 입력하세요"
          ></textarea>
        </div>

        <button @click="handleSubmit" class="submit-button">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
          문의 보내기
        </button>

        <div v-if="submitMessage" :class="['message', submitMessage.type]">
          {{ submitMessage.text }}
        </div>
      </div> -->

      <section class="content-section info-section">
        <h2>💡 자주 묻는 질문</h2>
        <div class="faq-item">
          <h3>Q. 이미지가 서버에 저장되나요?</h3>
          <p>
            아니요. 모든 처리는 브라우저 내에서만 이루어지며, 서버에 이미지를 전송하거나 저장하지 않습니다.
          </p>
        </div>
        <div class="faq-item">
          <h3>Q. 어떤 이미지 형식을 지원하나요?</h3>
          <p>
            JPG, PNG, WebP 등 브라우저에서 지원하는 대부분의 이미지 형식을 사용할 수 있습니다.
          </p>
        </div>
        <div class="faq-item">
          <h3>Q. 최적의 원본 이미지 크기는?</h3>
          <p>
            최고 품질의 결과물을 위해서는 2048x2048px 이상의 고해상도 이미지를 사용하는 것을 권장합니다.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitMessage = ref(null)

const handleSubmit = () => {
  // 폼 검증
  if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message) {
    submitMessage.value = {
      type: 'error',
      text: '모든 항목을 입력해주세요.'
    }
    return
  }

  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    submitMessage.value = {
      type: 'error',
      text: '올바른 이메일 주소를 입력해주세요.'
    }
    return
  }

  // mailto 링크로 이메일 클라이언트 열기
  const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(
    `이름: ${form.value.name}\n이메일: ${form.value.email}\n\n${form.value.message}`
  )}`

  window.location.href = mailtoLink

  submitMessage.value = {
    type: 'success',
    text: '이메일 클라이언트가 열립니다. 메일을 전송해주세요.'
  }

  // 폼 초기화
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    submitMessage.value = null
  }, 3000)
}
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
  margin: 0;
}

.contact-form {
  margin: 32px 0;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: white;
  color: var(--text-color);
  transition: border-color 0.2s;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  padding: 14px 28px;
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
  gap: 8px;
}

.submit-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.icon {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

.message {
  margin-top: 16px;
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

.info-section {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.faq-item {
  margin-bottom: 24px;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 8px 0;
}

.faq-item p {
  font-size: 15px;
  line-height: 1.6;
  color: #6b7280;
  margin: 0;
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

  .form-input,
  .form-textarea {
    font-size: 14px;
  }

  .submit-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
