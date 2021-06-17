# Portfolio

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

### Work(projects)

- All, Front-end, Back-end 등의 버튼을 만들고 클릭하면 필터링 되어 해당 프로젝트 표시
- 각 프로젝트에 깃허브 링크를 걸어 놓음
- Blank : 새탭으로 띄우기(default는 현재탭에서 뜸)
- 이미지 사이즈 조정 : 이미지가 크면 다운로드 받는데 오래걸리기 때문
  - png resize 또는 png compressor 검색

### Testimonials

- 나중에 추천서를 받게 된다면 추가 할 예정

### Contact

- email 과 github 링크를 넣음
- 나중에 블로그를 만들면 추가할 예정

## 5. CSS : Essential

### Box model

- content box : content의 크기를 유지하고 padding이나 margin 또는 border를 주면 전체 사이즈가 커짐
- border box : 전체적인 크기는 고정되고 padding 등이 추가 되면 content의 사이즈가 작아짐

### Absolute vs Static

- position : static (default)
- absolute : 근접한 부모중에 static이 아닌 부모의 기준에서 움직임(body까지 올라갈 수 있음)

### Sticky vs Fixed

- sticky를 쓰려면 top, left를 지정해야 됨
- Fixed : 부모와는 상관없이 Viewport(화면)에 고정

### Centering trick

- flexbox가 아닐때
  - margin : auto -> 수평만 적용되고 수직은 적용 안됨
  - text-align : center -> block 레벨이 아닌 것들은 센터로 정렬 됨(수평만 적용 됨)
  - transform : translate(50%, 50%);
  - text의 경우 => text-align : center; line-height : (부모박스의 높이만큼);(한줄일 경우에만 가능)

### Responsive background

- background-image: url('https://...'); 반복됨
- background-repeat: no-repeat; 반복 안됨
- background-position: center;
- background-size: cover;
- background : center/cover no-repeat url(''); 으로 위에 것들을 한번에 가능

### Transformation

- transform : translateX(100px); 오른쪽으로 100px만큼 이동
- transform : translate(100px, 100px) scale(2) rotate(45deg);
  - 100, 100만큼 이동, 2배 키움, 45도 회전

### Magic animation(transition)

- 300ms가 재밌으면서 답답하지 않은 표준화된 수치

```
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
  }
  .box: hover {
    background-color: blue;
    transition-property: background-color;
    transition-duration: 300ms;
    transition-timing-function: linear;
  } // 아래 것으로 표현 가능
  .box: hover {
    background-color: blue;
    transition: background-color 300ms linear;
  }
  .box1: hover { // 애니메이션이 2개 이상인 경우
    border-radius: 50%;
    background-color: blue;
    transition: all 300ms ease; // 변하는게 2개 이상하면 all로 묶을 수 있음
  }
```

### CSS Variable

- 공통적으로 적용하는 margin 같은 것을 hardcoded 하지 말고 상수로 정의해서 사용할 것

```
// css에서 변수 정의는 어느 곳이든 가능
:root {
  // 제일 상위 노드에서 변수를 정의하고 사용
  // 하위 노드에만 적용되기 때문에 최상위 노트에서 정의하면 모든 곳에서 사용 가능
  --font-size: 32px;
  --background-color: thistle;
  --text-color: whitesmoke;
  --base-space: 8px;
}

.first-list {
  background-color: var(--background-color);
  color: var(--text-color);
  // var() 함수를 사용해서 변수이름을 불러 올 수 있음
  margin-top: var(--base-space, 8); // 만약 base-space가 없다면 기본값을 설정도 가능
  margin-left: calc(var(--base-space) * 2);
  // calc() 함수로 기본 값의 연산을 해서 적용 할 수 있음
}

@media screen and (max-width: 768px) { // 화면크기에 따라 여백 등을 달리하고 싶을 때
  :root {
    --font-size: 16px;
    --base-space: 4px;
  }
}
```

### HTML 유용한 Data

- HTML5에서 추가됨
- HTML태그 자체에서 제공하는 속성들 뿐만 아니라 원하는 데이터를 DOM요소에 HTML요소에 추가 할 수 있게 함
- 사용 : data-(원하는 이름)="(값)"

```
<div data-index="1" data-display-name="tony"></div>
<div data-index="2" data-display-name="portfolio"></div>
// css에서도 사용 가능

<style>
  [data-display-name="tony"] { // 모든 data-display-name="tony"가 포함된 곳에 적용
    background-color: beige;
  }
  div[data-display-name="tony"] { // div중 data-display-name="tony"가 포함된 곳
    background-color: beige;
  }
</style>

<script>
  const tony = document.querySelector('div') // div 태그 중 제일 첫번째로 나오는 것을 가져옴
  const tony1 = document.querySelector('div[data-display-name="tony"]')
  console.log(tony1.dataset); // data- 뒤에 추가된 이름(index 또는 display-name)만 출력이 됨 + display-name이 displayName으로 camel case화 됨
  console.log(tony1.dataset.displayName); // tony가 출력
</script>

data-로 HTML에 추가한 data들은 사용자가 다운받아져서 다 공개가 되므로
민감한 요소들은 추가하지 않는 것이 좋음(완전히 공개돼도 되는 것들만 사용할 것)
```

## 6. CSS : Styling

### Global set up & typography

- CSS 변수 선언 및 텍스 태그 설정

### Nav

- font, color, active class 설정

### Home
