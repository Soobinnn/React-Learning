# React-testing-library를 사용한 리액트 컴포넌트 테스트
## 준비
1. React project 생성
```
yarn create react-app react-testing-library
# 혹은 npx create-react-app react-testing-library
```

2. 설치
```
yarn add --dev react-testing-library jest-dom
# 혹은 npm install --save react-testing-library jest-dom
```
** VS Code를 사용하는 경우 IDE지원을 제대로 받기 위해 **@types/jest** 설치 한다.

3. 예제 만들기

### 설정
```javascript
//src/setupTests.js
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
```
react-testing-library에서는 리액트 
