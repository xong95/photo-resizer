# SEO 검색 엔진 제출 가이드

## 📝 체크리스트

- [x] index.html 메타태그 최적화 완료
- [x] OG 태그 추가 완료
- [x] 구조화 데이터 (JSON-LD) 추가 완료
- [x] sitemap.xml 생성 완료
- [x] robots.txt 생성 완료
- [x] SEO 친화적 콘텐츠 추가 완료
- [ ] OG 이미지 생성 및 추가 (public/og-image.jpg)
- [ ] 네이버 검색 등록
- [ ] 구글 서치콘솔 사이트맵 제출
- [ ] 네이버 블로그/카페 홍보

---

## 🔍 1. 구글 검색 등록 (Google Search Console)

### 현재 상태
- ✅ Google Site Verification 태그 이미 설정됨
- Verification Code: `qNRxOb5HduzeCNMN7Z4B2vyl2K9A615sMROCifqVSKU`

### 추가 작업
1. **Google Search Console 접속**
   - URL: https://search.google.com/search-console

2. **사이트맵 제출**
   - 왼쪽 메뉴: 색인 생성 > Sitemaps
   - 새 사이트맵 추가: `https://letstest.cloud/sitemap.xml`
   - 제출 클릭

3. **URL 검사 도구 사용**
   - 상단 검색창에 메인 URL 입력: `https://letstest.cloud/`
   - "색인 생성 요청" 클릭
   - 주요 페이지 모두 반복:
     - https://letstest.cloud/about
     - https://letstest.cloud/contact
     - https://letstest.cloud/privacy
     - https://letstest.cloud/terms

4. **Core Web Vitals 확인**
   - 왼쪽 메뉴: 환경 > Core Web Vitals
   - 성능 개선이 필요한 부분 확인

---

## 🔍 2. 네이버 검색 등록 (Naver Search Advisor)

### 단계별 가이드

1. **네이버 서치어드바이저 접속**
   - URL: https://searchadvisor.naver.com/

2. **사이트 등록**
   - "사이트 추가" 버튼 클릭
   - URL 입력: `https://letstest.cloud`

3. **소유권 확인**
   - HTML 태그 방식 선택
   - 제공된 메타 태그를 index.html의 `<head>` 섹션에 추가:
     ```html
     <meta name="naver-site-verification" content="발급받은코드" />
     ```
   - 현재 index.html 14번째 줄에 이미 자리 확보됨

4. **사이트맵 제출**
   - 왼쪽 메뉴: 요청 > 사이트맵 제출
   - 사이트맵 URL 입력: `https://letstest.cloud/sitemap.xml`
   - 제출 클릭

5. **RSS 제출 (선택사항)**
   - 블로그가 있다면 RSS URL 제출

6. **수집 요청**
   - 왼쪽 메뉴: 요청 > 웹 페이지 수집
   - 주요 페이지 URL 직접 제출:
     - https://letstest.cloud/
     - https://letstest.cloud/about
     - https://letstest.cloud/contact

---

## 🔍 3. Bing 검색 등록 (Bing Webmaster Tools)

1. **Bing Webmaster Tools 접속**
   - URL: https://www.bing.com/webmasters

2. **사이트 추가**
   - "사이트 추가" 클릭
   - URL 입력: `https://letstest.cloud`
   - Google Search Console에서 가져오기 옵션 사용 가능

3. **사이트맵 제출**
   - Sitemaps 메뉴
   - `https://letstest.cloud/sitemap.xml` 제출

---

## 📊 4. 타겟 키워드 최적화 현황

### 메인 키워드
1. ✅ **증명사진 만들기** - H1, Title, Description에 포함
2. ✅ **여권사진 규격** - H1, Title, 본문에 포함
3. ✅ **무료 증명사진** - H1, Description, 본문에 포함
4. ✅ **이력서사진 사이즈** - Title, Keywords, 본문에 포함
5. ✅ **운전면허 사진 규격** - Keywords, 본문에 포함

### 롱테일 키워드
- 증명사진 앱
- 비자사진 규격
- 사진 리사이징
- 증명사진 변환
- 여권 사진 크기
- 무료 이미지 리사이징

---

## 🎨 5. OG 이미지 생성 가이드

### 이미지 요구사항
- **크기**: 1200 x 630px (Facebook/Twitter 권장)
- **포맷**: JPG 또는 PNG
- **파일명**: `og-image.jpg`
- **위치**: `public/og-image.jpg`

### 포함할 내용
```
┌─────────────────────────────────────┐
│                                     │
│    📷 [로고 또는 아이콘]            │
│                                     │
│    무료 증명사진 만들기             │
│    여권사진 | 이력서사진 | 비자사진 │
│                                     │
│    letstest.cloud                   │
│                                     │
└─────────────────────────────────────┘
```

### 생성 도구
- Canva (https://www.canva.com/)
- Figma (https://www.figma.com/)
- Adobe Photoshop
- Online OG Image Generator

---

## 📱 6. 소셜 미디어 공유 최적화

### 테스트 도구
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### 사용 방법
1. 각 도구에 `https://letstest.cloud/` 입력
2. OG 태그가 올바르게 표시되는지 확인
3. 이미지, 제목, 설명이 잘 보이는지 확인

---

## 📈 7. 추가 SEO 전략

### 콘텐츠 마케팅
1. **블로그 작성**
   - "증명사진 만들기 완벽 가이드"
   - "여권사진 규격 총정리"
   - "무료 증명사진 vs 유료 스튜디오"

2. **네이버 블로그 활용**
   - 서비스 소개 포스팅
   - 사용 방법 튜토리얼
   - FAQ 정리

3. **유튜브 영상**
   - 서비스 사용법 동영상
   - 증명사진 촬영 팁

### 백링크 확보
1. **디렉토리 등록**
   - 네이버 플레이스
   - 각종 웹 디렉토리

2. **소셜 북마크**
   - 네이버 카페
   - 다음 카페
   - 커뮤니티 사이트

3. **언론 보도자료**
   - 뉴스와이어
   - 프레스 릴리스

---

## 🎯 8. 성능 모니터링

### 추적 도구 설정
1. **Google Analytics 4**
   - 사용자 행동 분석
   - 페이지별 성능 확인

2. **Google Tag Manager**
   - 이벤트 추적 설정
   - 전환율 측정

3. **Hotjar / Clarity**
   - 사용자 행동 히트맵
   - 세션 리플레이

### 주요 지표
- 검색 노출 수
- 검색 클릭 수
- 평균 게재 순위
- 클릭률 (CTR)
- 이탈률
- 평균 세션 시간

---

## ⚠️ 주의사항

1. **색인 생성 시간**
   - 구글: 며칠 ~ 몇 주
   - 네이버: 며칠 ~ 1주일
   - 인내심을 가지고 기다리세요!

2. **정기적인 업데이트**
   - 콘텐츠 신선도 유지
   - 새로운 기능 추가 시 공지
   - 블로그 포스팅으로 활동성 유지

3. **품질 유지**
   - 사용자 피드백 적극 수용
   - 버그 빠른 수정
   - 성능 최적화 지속

---

## 📞 추가 지원

문의사항이 있으시면 Contact 페이지를 통해 연락 주세요.

**배포 후 해야 할 작업**:
1. OG 이미지 생성 및 추가
2. 네이버 사이트 인증 코드 받아서 추가
3. 구글 서치콘솔에 사이트맵 제출
4. 네이버 서치어드바이저에 사이트맵 제출
5. 주요 페이지 색인 요청
