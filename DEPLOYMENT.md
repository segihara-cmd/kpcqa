# 배포 가이드

이 프로젝트를 무료로 배포하는 여러 방법을 안내합니다.

## 🚀 추천: Vercel (가장 쉬움)

프로젝트에 이미 Vercel Analytics가 포함되어 있어 Vercel 배포를 강력히 추천합니다.

### Vercel 무료 플랜
- ✅ 무제한 프로젝트
- ✅ 자동 HTTPS
- ✅ 글로벌 CDN
- ✅ 자동 배포 (Git 푸시 시)
- ✅ 커스텀 도메인 지원
- ✅ 100GB 대역폭/월

### 배포 방법

#### 방법 1: Vercel 웹사이트에서 배포 (가장 쉬움)

1. **Vercel 가입**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인 (권장)

2. **프로젝트 GitHub에 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/apple-style-ux.git
   git push -u origin main
   ```

3. **Vercel에서 프로젝트 Import**
   - Vercel 대시보드에서 "Add New..." → "Project" 클릭
   - GitHub 저장소 선택
   - 자동으로 설정 감지 (Next.js)
   - "Deploy" 클릭

4. **완료!**
   - 몇 분 내에 배포 완료
   - 자동으로 URL 제공 (예: `your-project.vercel.app`)

#### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 디렉토리에서
vercel

# 첫 배포 시 로그인 및 설정
# 이후 배포는 그냥 `vercel` 명령어만 실행
```

### 환경 변수 설정 (필요한 경우)

Vercel 대시보드 → 프로젝트 → Settings → Environment Variables에서 추가

---

## 🌐 Netlify

### Netlify 무료 플랜
- ✅ 100GB 대역폭/월
- ✅ 자동 HTTPS
- ✅ 폼 처리 기능 (상담 신청 폼에 유용)
- ✅ 커스텀 도메인

### 배포 방법

1. **Netlify 가입**
   - https://netlify.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - "Deploy site" 클릭

---

## 🚂 Railway

### Railway 무료 플랜
- ✅ $5 크레딧/월 (제한적)
- ✅ 데이터베이스 지원
- ✅ 백엔드 API 배포 가능

### 배포 방법

1. **Railway 가입**
   - https://railway.app 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "New Project" → "Deploy from GitHub repo"
   - 저장소 선택
   - 자동으로 Next.js 감지 및 배포

---

## 📦 Render

### Render 무료 플랜
- ✅ 무료 티어 제공 (슬립 모드 있음)
- ✅ 자동 HTTPS
- ✅ 커스텀 도메인

### 배포 방법

1. **Render 가입**
   - https://render.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "New" → "Web Service"
   - GitHub 저장소 연결
   - 설정:
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`
   - "Create Web Service" 클릭

---

## ⚠️ 배포 전 체크리스트

- [ ] `package.json`의 프로젝트명 확인/수정
- [ ] TypeScript 에러 확인 (`next.config.mjs`의 `ignoreBuildErrors` 제거 권장)
- [ ] 환경 변수 필요 시 `.env.example` 파일 생성
- [ ] 빌드 테스트: `npm run build` 성공 확인
- [ ] GitHub에 코드 푸시 완료

---

## 🔧 배포 후 확인 사항

1. **빌드 로그 확인**
   - 배포 플랫폼의 빌드 로그에서 에러 확인

2. **기능 테스트**
   - 모든 페이지 접근 가능한지 확인
   - 폼 제출 기능 테스트
   - 반응형 디자인 확인

3. **성능 확인**
   - Lighthouse 점수 확인
   - 이미지 최적화 확인

---

## 💡 추천 순서

1. **Vercel** (가장 추천) - Next.js 최적화, 가장 쉬움
2. **Netlify** - 폼 처리 기능이 필요할 때
3. **Railway** - 백엔드 API가 필요할 때
4. **Render** - 대안 옵션

---

## 🆘 문제 해결

### 빌드 에러 발생 시
```bash
# 로컬에서 빌드 테스트
npm run build

# 에러 확인 후 수정
```

### TypeScript 에러 무시 설정 제거
`next.config.mjs`에서 `ignoreBuildErrors: true` 제거하고 실제 에러 수정 권장

### 이미지 최적화 문제
`next.config.mjs`에서 `unoptimized: true` 설정 확인 (현재 비활성화됨)
