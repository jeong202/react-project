# react를 이용한 포트폴리오 사이트 만들기
리액트(React)는 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리로, 다음과 같은 여러 가지 장점을 가지고 있습니다.   

첫째로, 리액트는 가독성이 뛰어나고 유지보수가 용이합니다. JSX라는 문법을 사용하여 JavaScript와 HTML을 결합하여 컴포넌트를 만들 수 있습니다. 이로써 코드의 가독성이 향상되고, 컴포넌트 단위로 모듈화하여 개발할 수 있어 유지보수가 용이합니다. 또한 가상 DOM(Virtual DOM)을 활용하여 성능을 최적화하고, 불필요한 렌더링을 방지하여 효율적으로 작동합니다.   

둘째로, 리액트는 커뮤니티와 생태계가 매우 활성화되어 있습니다. Facebook에서 개발하고 지원하고 있으며, 전 세계적으로 많은 개발자들이 사용하고 있습니다. 이로 인해 많은 개발자들이 관련 자료를 제공하고, 라이브러리와 도구들이 다양하게 개발되어 있습니다. 또한, 오픈 소스 기반으로 다양한 라이브러리와 프레임워크와의 통합이 원활하게 이루어집니다.   

셋째로, 리액트는 단방향 데이터 흐름을 기반으로 한 상태 관리가 용이합니다. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하고, 필요한 경우 상태를 업데이트하여 어플리케이션의 상태를 관리할 수 있습니다. 또한 Redux, Context API 등을 통해 복잡한 상태 관리를 위한 라이브러리를 도입하여 애플리케이션의 확장성을 높일 수 있습니다.

이러한 장점들로 인해 리액트는 현대적인 웹 개발에서 매우 인기 있는 프론트엔드 라이브러리로 자리 잡았습니다.
   

## 작업 순서
1. 리액트 설치 `npx create-react-app 프로젝트이름` 프로젝트이름 : react-project
2. git에 업로드
3. [lenis 사이트](https://lenis.studiofreight.com/)

## 설치
1. react 설치 `npx create-react-app 포로젝트이름` 프로젝트이름 : react-project
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm install react-router-dom`

### GSAP
GSAP은 "GreenSock Animation Platform"의 약자로, 웹 애니메이션을 만들기 위한 강력한 자바스크립트 라이브러리입니다. GSAP는 HTML 요소들을 부드럽게 애니메이션화하고 제어하는 데 사용됩니다. CSS 애니메이션과 비교했을 때, GSAP은 더 다양한 애니메이션 효과를 지원하며 브라우저 호환성이 우수합니다. 또한, 시간 기반 애니메이션을 만들 때 직관적이고 강력한 API를 제공하여 개발자들이 복잡한 애니메이션을 쉽게 작성할 수 있습니다. GSAP은 웹 애니메이션을 개발하는데 있어서 매우 인기 있는 선택 중 하나입니다.   
[GSAP 사이트](https://gsap.com/)   
### lenis
lenis.js는 JavaScript로 작성된 오픈 소스 웹 프레임워크입니다. 이 프레임워크는 웹 애플리케이션 및 API를 개발하기 위해 사용됩니다. lenis.js는 경량화되고 빠른 속도로 동작하며, 간단한 문법과 구조를 제공하여 개발자가 쉽게 웹 애플리케이션을 구축할 수 있도록 도와줍니다.   
[lenis 사이트](https://lenis.studiofreight.com/)

## 트러블 슈팅
<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,   
윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지는데   
Git이 이 둘 중 어느 쪽을 선택할지 혼란와 뜨는 에러   

해결방법   
`git config --global core.autocrlf true // 시스템 전체에 적용`   
`git config core.autocrlf true // 해당 프로젝트에만 적용`   
</details>

