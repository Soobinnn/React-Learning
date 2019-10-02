
## Mobx 주요개념

### 1. Observable State ( 관찰 받고 있는 상태)
Mobx를 사용하고 있는 앱의 상태는 Observable 

### 2. 



setState 없이 값이 바뀌면 렌더링 해줌.
observer가 observable값이 변할 때 컴포넌트의 forceUpdate를 호출하게 함으로써 자동으로 변화가 화면에 반영됨.
(* 성능상으로 과연 좋을까? 걱정되지만 최적화가 많이되어있어 걱정안해도 됨.)

### Decorator와 함께 사용하기
decorator를 사용하면 훨씬 더 편하게 문법을 작성 할 수 있음. -> babel설정을 해야함.

yarn eject
yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
  
// package.json에 추가
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
  }

## 사용법
### 설치
npm install mobx
npm install mobx-react