# GitHub 업로드 가이드

이 프로젝트를 https://github.com/segihara-cmd/kpcqa.git 에 업로드하는 방법입니다.

## 📋 사전 준비

1. GitHub 계정 로그인 확인
2. 저장소가 생성되어 있고 비어있는지 확인 (현재 비어있음 확인됨)

## 🚀 업로드 단계

### 1단계: Git 초기화 및 파일 추가

```bash
# 프로젝트 디렉토리로 이동
cd apple-style-ux

# Git 저장소 초기화
git init

# 모든 파일 추가 (node_modules 등은 .gitignore에 의해 제외됨)
git add .

# 첫 커밋 생성
git commit -m "Initial commit: KPCQA website"
```

### 2단계: 원격 저장소 연결

```bash
# 원격 저장소 추가
git remote add origin https://github.com/segihara-cmd/kpcqa.git

# 원격 저장소 확인
git remote -v
```

### 3단계: GitHub에 푸시

```bash
# 메인 브랜치로 이름 변경 (필요한 경우)
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## ⚠️ 주의사항

- 첫 푸시 시 GitHub 로그인 정보를 입력해야 할 수 있습니다
- Personal Access Token이 필요할 수 있습니다 (비밀번호 대신)

## 🔐 Personal Access Token 생성 (필요한 경우)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" 클릭
3. 권한 선택: `repo` 체크
4. 토큰 생성 후 복사
5. 푸시 시 비밀번호 대신 토큰 사용

## ✅ 업로드 확인

GitHub 저장소 페이지에서 파일들이 업로드되었는지 확인하세요:
https://github.com/segihara-cmd/kpcqa

## 🔄 이후 업데이트 방법

코드를 수정한 후:

```bash
git add .
git commit -m "변경 사항 설명"
git push
```

## 🚀 배포 연동

GitHub에 업로드한 후 Vercel에서 자동 배포 설정:

1. Vercel.com 접속
2. "Add New Project" 클릭
3. GitHub 저장소 `segihara-cmd/kpcqa` 선택
4. 자동으로 Next.js 감지 및 배포 시작
