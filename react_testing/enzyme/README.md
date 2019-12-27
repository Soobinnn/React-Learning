# Enzyme를 사용한 리액트 컴포넌트 테스트
## 준비
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

3. 예제 만들기
3-1. src/setupTests.js 파일 생성
```javascript
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

3-2. src/Profile.js 생성
```javascript
import React from 'react';

const Profile = ({ username, name }) => {
  return (
    <div>
      <b>{username}</b>&nbsp;
      <span>({name})</span>
    </div>
  );
};

export default Profile;
```

3-3. src/App.js
```javascript
import React from 'react';
import Profile from './Profile';

function App() {
  return (
    <div>
      <Profile username="velopert" name="김민준" />
    </div>
  );
}

export default App;
```

3-4. yarn start

## 테스트 
4. 이 컴포넌트를 위한 테스트 코드 작성

### 스냅샷 테스팅
렌더링된 결과가 렌더링한 결과와 일치하는지 확인하는 작업을 의미.

Enzyme에서 스냅샷 테스팅을 하려면 __enzyme-to-json__ 이라는 라이브러리를 설치해줘야함.

5. yarn add --dev enzyme-to-json

6. package.json파일을 열어서 다음 과 같이 "jest"설정을 추가
```
  "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
```

7. Profile.test.js 작성
```javascript
import React from 'react';
import {mount} from 'enzyme';
import Profile from './Profile';

describe('<Profile/>',()=>{
    it('matches snapshot',()=>{
        const wrapper = mount(<Profile username="soobinnn" name="임수빈"/>);
        expect(wrapper).toMatchSnapshot();
    });
});
```
__mount__ 라는 함수는 Enzyme를 통하여 리액트 컴포넌트를 렌더링 해줌.
이를 통해서 만든 wrapper를 통해서 우리가 추후 props 조회, DOM 조회, state 조회 등을 할 수 있다. mount 외에도 _shallow__라는 함수도 있다.

8. yarn test

src디렉토리에 __snapshots__/Profile.test.js.snap이라는 파일 이 생긴다.

만약 현재 결과물이 제대로 된거고, 스냅샷을 현재 결과물로 업데이트 하고 싶다면, 콘솔창에 __u__키를 누르면 된다.
스냅샷이 업데이트 된 것이 확인 됐다면, 느낌 표를 지우고 다시 원래 상태로 업데이트 한다.

## props 접근
Enzyme에서는 컴포넌트 인스턴스에 접근을 할 수 있다.

### src/Profile.test.js
```javascript
import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Profile username="soobinnn" name="임수빈" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders username and name', () => {
    const wrapper = mount(<Profile username="soobinnn" name="임수빈" />);
    expect(wrapper.props().username).toBe('soobinnn');
    expect(wrapper.props().name).toBe('임수빈');
  });
});
```

## DOM 확인
DOM에 우리가 원하는 텍스트가 나타나 있는지 확인을 한다.

### src/Profile.test.js
```javascript
import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
   it('matches snapshot', () => {
    const wrapper = mount(<Profile username="soobinnn" name="임수빈" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders username and name', () => {
    const wrapper = mount(<Profile username="soobinnn" name="임수빈" />);
    expect(wrapper.props().username).toBe('soobinnn');
    expect(wrapper.props().name).toBe('임수빈');

    const boldElement = wrapper.find('b');
    expect(boldElement.contains('soobinnn')).toBe(true);
    const spanElement = wrapper.find('span');
    expect(spanElement.text()).toBe('(임수빈)');
  });
});
```

find 함수를 사용하면 특정 DOM을 선택 할 수 있다.
여기에 입력하는 값은 브라우저의 querySelector와 같다.
CSS 클래스는 find('.my-class'), id는 find('#myid'), 태그는 find('span') 이런식으로 조회를 할 수 있으며,

여기에 컴포넌트의 Display Name을 사용하면 특정 컴포넌트의 인스턴스도 찾을 수 있다. find('MyComponent')

## 클래스형 컴포넌트의 테스팅
이번에는 클래스형 컴포넌트의 내부메소드 호출 및 state를 조회하는 방법
### src/Counter.js
```javascript
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
```