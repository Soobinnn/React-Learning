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

3-2. src/test/Profile.js 생성
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
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Profile username="sbim" name="임수빈" />
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

7. src/test/Profile.test.js 작성
```javascript
import React from 'react';
import {mount} from 'enzyme';
import Profile from '../components/Profile';

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

### src/test/Profile.test.js
```javascript
import React from 'react';
import { mount } from 'enzyme';
import Profile from '../components/Profile';

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

### src/test/Profile.test.js
```javascript
import React from 'react';
import { mount } from 'enzyme';
import Profile from '../components/Profile';

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
### src/components/Counter.js
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

### src/test/Counter.test.js
```javascript
import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/Counter';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
  it('has initial number', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });
  it('increases', () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });
  it('decreases', () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });
});
```

__mount__ 대신 __shallow__ 라는 함수를 사용함.
__shallow__ 는 컴포넌트 내부에 또 다른 리액트 컴포넌트가 있다면 이를 렌더링하지 않음.

#### mount, shallow 차이
만약, Profile컴포넌트를 Counter컴포넌트에서 렌더링 할 경우에는 
__shallow__ 경우, 다음과 같은 결과가 나타남.

```javascript
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<Counter /> matches snapshot 1`] = `
<div>
  <h2>
    0
  </h2>
  <button
    onClick={[Function]}
  >
    +1
  </button>
  <button
    onClick={[Function]}
  >
    -1
  </button>
  <Profile
    name="임수빈"
    username="sbim"
  />
</div>
`;
```

__mount__ 경우,
```javascript
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<Counter /> matches snapshot 1`] = `
<Counter>
  <div>
    <h2>
      0
    </h2>
    <button
      onClick={[Function]}
    >
      +1
    </button>
    <button
      onClick={[Function]}
    >
      -1
    </button>
    <Profile
      name="임수빈"
      username="sbim"
    >
      <div>
        <b>
          sbim
        </b>

        <span>
          (
          임수빈
          )
        </span>
      </div>
    </Profile>
  </div>
</Counter>
`;
```

__mount__ 의 경우 Profile 내부의 내용까지 전부 렌더링 되는 반면,
__shallow__ 에선 이 작업이 생략됨.

__mount__ 에서는 최상위 요소가 Counter 컴포넌트,
__shallow__ 에서는 최상위 요소가 div

따라서, __shallow__ 를 할 경우, wrapper.props()를 조회하게 되면,
컴포넌트의 props가 나타나는 것이 아니라 div의 props가 나타남.

컴포넌트의 state를 조회할 때에는 state()함수를 사용
```
expect(wrapper.state().number).toBe(0);
```

내장 메소드를 호출할 때는 instance() 함수를 호출
```
wrapper.instance().handleIncrease();
```

## DOM 이벤트 시뮬레이트
내장 메소드를 직접 호출하는게 아니라, 버튼 클릭 이벤트를 시뮬레이트하여 기능이 잘 작동하는지 확인

```javascript
// src/test/Counter.test.js
import React from 'react';
import {shallow} from 'enzyme';
import Counter from '../components/Counter';

describe('<Counter />', () => {
    // 클래스형 컴포넌트의 테스팅 (shallow)
    it('matches snapshot', () => {
      const wrapper = shallow(<Counter />);
      expect(wrapper).toMatchSnapshot();
    });
    it('has initial number', () => {
      const wrapper = shallow(<Counter />);
      expect(wrapper.state().number).toBe(0);
    });
    it('increases', () => {
      const wrapper = shallow(<Counter />);
      wrapper.instance().handleIncrease();
      expect(wrapper.state().number).toBe(1);
    });
    it('decreases', () => {
      const wrapper = shallow(<Counter />);
      wrapper.instance().handleDecrease();
      expect(wrapper.state().number).toBe(-1);
    });
    
    // DOM 이벤트 시뮬레이트
    it('calls handleIncrease', () => {
        // 클릭이벤트를 시뮬레이트하고, state 를 확인
        const wrapper = shallow(<Counter />);
        const plusButton = wrapper.findWhere(
          node => node.type() === 'button' && node.text() === '+1'
        );
        plusButton.simulate('click');
        expect(wrapper.state().number).toBe(1);
      });
      it('calls handleDecrease', () => {
        // 클릭 이벤트를 시뮬레이트하고, h2 태그의 텍스트 확인
        const wrapper = shallow(<Counter />);
        const minusButton = wrapper.findWhere(
          node => node.type() === 'button' && node.text() === '-1'
        );
        minusButton.simulate('click');
        const number = wrapper.find('h2');
        expect(number.text()).toBe('-1');
      });
  });
```

__findWhere()__ 함수를 사용하여 원하는 버튼 태그를 선택해준다.
원하는 조건을 만족하는 태그를 선택할 수 있다.

만약, __findWhere()를 사용하지 않는다면, 다음과 같은 코드를 작성해야함.
```
const buttons = wrapper.find('button');
const plusButton = buttons.get(0); // 첫번째 버튼 +1
const minusButton = buttons.get(1); // 두번째 버튼 -1
```

버튼에 이벤트를 시뮬레이트 할 때에는 원하는 엘리먼트를 찾아서 __simulate()__ 함수를 사용한다.

첫번째 파라미터에는 이벤트 이름을 넣고 두번째 파라미터에는 이벤트 객체를 넣는다.

만약, Input에 change이벤트를 발생시키는 경우 다음과 같이 한다.
```
input.simulate('change', {
  target: {
    value: 'hello world'
  }
});
```

그리고, 값이 잘 업데이트 됬는지 확인하기 위해 두가지 방법을 사용함.
1. state를 직접 조회
2. h2 태그를 조회해서 값을 확인
** 실제 테스트 코드를 작성하게 될 때에는 이 방법 중 아무거나 선택해도 상관없다.

## 함수형 컴포넌트와 Hooks 테스팅

### src/components/HookCounter.js
```javascript
import React, {useState, useCallback} from 'react';

const HookCounter = () => {
    const [number, setNumber] = useState(0);
    const onIncrease = useCallback(()=>{
        setNumber(number + 1);
    }, [number]);
    const onDecrease = useCallback(()=>{
        setNumber(number - 1);
    }, [number]);

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default HookCounter;

```

```javascript
// src/App.js
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import HookCounter from './components/HookCounter';
function App() {
  return (
    <div>
      <Profile username="soobinnn" name="임수빈"/>
      <HookCounter/>
    </div>
  );
}

export default App;
```

```javascript
// src/test/HookCounter.test.js
import React from 'react';
import { mount } from 'enzyme';
import HookCounter from '../components/HookCounter';

describe('<HookCounter />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });
  it('increases', () => {
    const wrapper = mount(<HookCounter />);
    let plusButton = wrapper.findWhere(
      node => node.type() === 'button' && node.text() === '+1'
    );
    plusButton.simulate('click');
    plusButton.simulate('click');

    const number = wrapper.find('h2');

    expect(number.text()).toBe('2');
  });
  it('decreases', () => {
    const wrapper = mount(<HookCounter />);
    let decreaseButton = wrapper.findWhere(
      node => node.type() === 'button' && node.text() === '-1'
    );
    decreaseButton.simulate('click');
    decreaseButton.simulate('click');

    const number = wrapper.find('h2');

    expect(number.text()).toBe('-2');
  });
});

```

함수형 컴포넌트에서는 클래스형 컴포넌트와 달리 메소드 및 상태를 조회 할 방법이 없다. 

** 추가적으로, Hooks를 사용하는 경우 꼭 __shallow__ 가 아닌 __mount__ 를 사용해야함. 

그 이유는, __useEffect__ Hook은 __shallow__ 에서 작동하지 않고, 버튼 엘리먼트에 연결되어 있는 함수가 이전 함수를 가르키고 있기 때문에, 예를 들어 +1버튼의 클릭 이벤트를 두번 시뮬레이트해도 결과값이 2가 되는게 아니라 1이 된다.



## 참고
https://velog.io/@velopert/react-testing-with-enzyme

(Enzyme 공식 문서)[https://airbnb.io/enzyme/docs/api/]