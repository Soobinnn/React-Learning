import { combineReducers } from 'redux';
import counter from './counter';
import waiting from './waiting';
import immuWaiting from './immuWaiting';
import immuCounter from './immuCounter';
import immerWating from './immerWaiting';
import immerCounter from './immerCounter';
// redux의 내장함수인 combineReducers로 리듀서를 하나로 합치는 작업을 함.
// 여러개로 나뉘어진 리듀서 : 서브리듀서
// 하나로 합쳐진 리듀서 : 루트 리듀서
export default combineReducers({
  counter,
  waiting,
  immuCounter,
  immuWaiting,
  immerCounter,
  immerWating,
});
