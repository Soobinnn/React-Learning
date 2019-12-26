# Enzyme를 사용한 리액트 컴포넌트 테스트

1. React project 생성

```
yarn create react-app enzyme
# 혹은 npm create-react-app enzyme
```

2. 설치

```
yarn add --dev enzyme enzyme-adapter-react-16
npm install --save enzyme enzyme-adapter-react-16
```

CRA로 만든 프로젝트에는 Jest가 처음부터 적용되어 있기 때문에 별도로 jest를 설치를 하지 않아도 된다. <br/> \*\* VS Code를 사용하는 경우 IDE지원을 제대로 받기 위해 **@types/jest** 만 설치하면 된다.
