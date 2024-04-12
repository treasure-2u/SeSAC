# npx create-react-app 프로젝트명 을 통해 생성한 React application의 자동 생성 폴더 구조 설명

- node_modules/

  npm을 내장한 node를 사용해 프로젝트를 생성했기 때문에 만들어지는 폴더

  `npm install` 명령어를 사용해 설치한 패키지들이 저장될 폴더로, 용량이 큰 경우가 많음

  .gitignore 파일에 포함되면 원격 저장소(github)에는 해당 폴더 올라가지 않음

  만약 만들어진 프로젝트를 `git clone [github repo address]`를 통해 해당 프로젝트를 clone한 경우 해당 폴더 없음

  -> `npm install`or`npm i`를 통해 package.json에 작성된 설치 패키지들을 모두 해당 버전으로 설치할 수 있으며, 설치된 패키지들은 node_modules 폴더가 자동으로 생성되며 해당 폴더 내부에 저장됨

- public/

  - favicon.ico : 브라우저 주소창에 표시되는 웹 페이지 대표 아이콘

  - index.html : https://localhost:3000 이 가장 먼저 return하는 file

  다른 페이지들은 React.js를 통해 생성되어 `<div id="root"></div>` 요소 아래에 동적으로 랜더링 됨

  - mainfest.json : 해당 React application의 meta data 저장

  - robots.txt : 웹 크롤러를 위한 정보 저장

- /src

  실제 React 코드(component)를 작성하는 directory

  - App.js : 기본으로 생성되는 react component

  - App.test.js, setupTest.js : application test를 위한 파일

  - index.js : index.html과 함께 가장 처음으로 실행되는 js 코드

  이 파일의 코드가 react component를 div#root 요소 하위에 추가해줌

  - reportWedVitals.js : application의 퍼포먼스 시간을 분석해 객체 형태로 보여주는 코드

- .gitignore : 원격 repository에 올리지 않을 file/folder 작성

- package.json : 해당 project의 meta data 및 의존성 정의

  - project name, version, 설명, 작성자 등의 정보를 포함

  - project가 의존하는 외부 라이브러리나 패키지들의 목록과 해당 버전을 포함

  - script(명령어)를 정의해 project를 실행시키거나 빌드하는 데에 사용

  - project의 의존성 추가 or update 시 자동으로 수정됨

  - `npm init` 명령어로 생성 가능

- package-lock.json : project의 의존성을 더욱 상세하게 정의

  - package.json file에 명시된 패키지들의 정확한 version 및 해당 의존성의 하위 의존성 version 포함

  - 이 file을 통해 project의 의존성을 재현하고, 동일한 환경에서 일관된 빌드를 보장할 수 있음
