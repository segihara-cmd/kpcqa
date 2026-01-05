# KPCQA - 한국생산성본부인증원 웹사이트

한국생산성본부인증원(KPCQA)의 공식 웹사이트입니다. 건축물인증, 경영시스템인증, 기후변화 대응, 지속가능경영검증 등 다양한 인증 서비스를 소개합니다.

## 🚀 기술 스택

- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: shadcn/ui (Radix UI 기반)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18 이상
- npm, yarn, pnpm 중 하나

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
apple-style-ux/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 메인 홈페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── globals.css        # 전역 스타일
│   └── consultation/      # 상담 신청 페이지
├── components/            # 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── header.tsx        # 헤더 네비게이션
│   ├── hero-section.tsx  # 히어로 섹션
│   └── ...               # 기타 섹션 컴포넌트
├── hooks/                # 커스텀 훅
├── lib/                  # 유틸리티 함수
└── public/               # 정적 파일
```

## 🌐 배포

이 프로젝트를 무료로 배포하는 방법은 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참고하세요.

### 빠른 배포 (Vercel 추천)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에 가입
3. GitHub 저장소 연결
4. 자동 배포 완료!

자세한 내용은 [DEPLOYMENT.md](./DEPLOYMENT.md)를 확인하세요.

## 🎨 주요 기능

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 다크모드 지원
- ✅ 서비스 소개 섹션
- ✅ 상담 신청 폼
- ✅ 부드러운 스크롤 네비게이션
- ✅ Apple 스타일 UX 디자인

## 📝 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

## ⚠️ 주의사항

- 현재 TypeScript 빌드 에러가 무시되도록 설정되어 있습니다 (`next.config.mjs`)
- 프로덕션 배포 전 실제 에러를 수정하는 것을 권장합니다
- 이미지 최적화가 비활성화되어 있습니다 (`unoptimized: true`)

## 📄 라이선스

이 프로젝트는 private 프로젝트입니다.

## 🤝 기여

이 프로젝트는 한국생산성본부인증원의 공식 웹사이트입니다.
