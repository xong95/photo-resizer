<template>
  <div id="app" class="app">
    <header class="app-header">
      <div class="header-content">
        <router-link to="/" class="app-title-link">
          <h1 class="app-title">
            <span class="title-icon">📷</span>
            증명사진/여권사진 리사이징
          </h1>
        </router-link>
        <p class="app-subtitle">클라이언트 기반 이미지 리사이징 도구</p>
        <nav class="nav-menu">
          <router-link to="/" class="nav-link">홈</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-links">
          <router-link to="/privacy" class="footer-link">개인정보처리방침</router-link>
          <span class="separator">|</span>
          <router-link to="/terms" class="footer-link">이용약관</router-link>
          <span class="separator">|</span>
          <router-link to="/about" class="footer-link">About</router-link>
          <span class="separator">|</span>
          <router-link to="/contact" class="footer-link">Contact</router-link>
        </div>
        <p class="footer-text">
          이 도구는 클라이언트 사이드에서만 동작하며, 업로드된 이미지는 서버에 저장되지 않습니다.
        </p>
        <p class="footer-text">
          <span class="footer-highlight">팁:</span>
          최고 품질의 이미지를 얻으려면 원본 이미지는 최소 2048x2048px 이상이어야 합니다.
        </p>
        <p class="footer-copyright">
          © {{ currentYear }} Photo Resizer. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
}

.app-header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 48px 24px 32px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.header-content {
  max-width: 900px;
  margin: 0 auto;
}

.app-title-link {
  text-decoration: none;
  color: inherit;
}

.app-title {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.app-title-link:hover .app-title {
  opacity: 0.9;
}

.title-icon {
  font-size: 40px;
}

.app-subtitle {
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 24px 0;
  opacity: 0.95;
}

.nav-menu {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s;
  opacity: 0.9;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 1;
}

.app-main {
  flex: 1;
}

.app-footer {
  background-color: white;
  border-top: 1px solid var(--border-color);
  padding: 32px 24px;
  margin-top: auto;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

.separator {
  color: #d1d5db;
  font-size: 14px;
}

.footer-text {
  font-size: 14px;
  color: #6b7280;
  margin: 8px 0;
  line-height: 1.6;
}

.footer-text:first-of-type {
  margin-top: 16px;
}

.footer-highlight {
  font-weight: 600;
  color: var(--primary-color);
}

.footer-copyright {
  font-size: 13px;
  color: #9ca3af;
  margin: 16px 0 0 0;
}

@media (max-width: 768px) {
  .app-header {
    padding: 32px 16px 24px;
  }

  .app-title {
    font-size: 24px;
  }

  .title-icon {
    font-size: 28px;
  }

  .app-subtitle {
    font-size: 14px;
  }

  .nav-menu {
    gap: 16px;
  }

  .nav-link {
    font-size: 14px;
    padding: 6px 12px;
  }

  .app-footer {
    padding: 24px 16px;
  }

  .footer-links {
    flex-direction: column;
    gap: 8px;
  }

  .separator {
    display: none;
  }

  .footer-text {
    font-size: 13px;
  }

  .footer-copyright {
    font-size: 12px;
  }
}
</style>
