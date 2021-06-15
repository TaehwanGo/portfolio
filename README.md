# Portpolio

- Vanilla Javascript, CSS, HTML5

### Contents

1. Planning, Designing
2. Git, Github
3. Head
4. HTML + BEM
5. CSS
6. STYLING
7. JavaScript + Problem solving skill
8. Publish

## 1. Planning, Designing - 기획, 디자인 구상

- Wire framing
  - 스케치북 등에 Visualizing 하는 것

### Make your own logo

- Font Awesome
  - svg 다운 후 텍스트 에디터로 fill에 current color 대신 원하는 색으로 변경 후 svg to png로 파일 포맷 변경해주는 웹사이트에서 변경 후 적용 할 수 있음
  - canva.com 가입 후 로그인 하면 나만의 로고를 만들 수 있음
    - 템플릿 외 직접 디자인도 가능
    - 하얀색 배경의 로고를 white back ground remover로 검색해서 remove.bg에서 없앨 수 있음

### Make your own background

- Design tool을 사용하지 않고도 만들 수 있음
- canva.com에서 youtube channel art에서 원하는 것을 써도 됨
  - 원하는 배경 직접 디자인도 가능

## 2. Git and Github

### What is Git and Github?

- VCS(version control system) : 이전의 기록들을 저장 및 관리 - ex) git
- git을 저장하는 서버 : github, Bitbucket
- Branch
  - master(main) : 기본(default)
  - 어느 순간 부터 다른 버전으로 만들고 싶다면 다른 브랜치로 만들어 볼 수 있음(기존 코드는 변경하지 않음)

### Let's set up Github repo

- github desktop app을 이용해도 되지만 command로 진행함

### Project set up(theme)

- setting -> json 검색 -> Edit in settings json

  - "editor.tokenColorCustomizations": {
    "comments": "#ffc2c2"
    }, 추가함 : 코멘트 색갈을 바꿈

## 3. Head

- UI적인 요소는 전혀 들어있지 않고 웹사이트 관련된 정보들이 있는 곳

### Metadata

- title 수정, description, author 추가

### Font Awesome

- CDN : copy & paste

### Google Fonts

- Head에 400, 600 weight 추가

### Favicon

- images 폴더 생성 후 favicon png파일 저장 후 Head에 icon 추가함

### javascript defer

- HTML을 parsing 하면서 js를 fetching 하는데 parsing HTML이후 executing js

## 4. HTML : Markup

### What is BEM ?

- class 이름 정하는 규칙
- Block Element Modifier 로 나누어서 이름을 작성하는 방식
- ex) 카드
  - 카드 : Block
  - 카드안의 이미지, 타이틀 : Element
  - .card\_\_img
  - .button
  - cards\_\_card 같이 할 필요 없음

### Sectioning

- 그림을 그리거나 PDF로 만든 것을 섹션을 나눔

### Navbar

- logo, menu

### Home

- profile photo
- title
- description
- Contact button

### About

- Title, description, paragraph 는 About section 외 다른 곳에서도 공통적으로 쓸 수 있기 때문에 About class로 지정하지 않음
- project 링크는 깃허브 주소
- 깃허브 리드미 정리 필요

### Skills

- HTML Progress element가 있지만 브라우저마다 보여지는게 다르고 스타일링이 까다롭기 때문에 나만의 프로그레스 바를 만들음
