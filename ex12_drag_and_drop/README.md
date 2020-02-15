# react drag and drop lib

## Install

```
yarn add react-dnd react-dnd-html5-backend
```

## Setting

# App.js

```javascript
import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './App.css';

function App() {
	return (
		<div className='App'>
			<DndProvider backend={Backend}>
				<컴포넌트 />
			</DndProvider>
		</div>
	);
}

export default App;
```

## Description

### Hooks

#### useDrag

현재 컴포넌트를 드래그 소스로 사용하기 위한 Hooks

```javascript
import { useDrag } from 'react-dnd';

function DraggableComponent(props) {
	const [collectedProps, drag] = useDrag({
		item: { id, type }
	});
	return <div ref={drag}>...</div>;
}
```

##### response

- `index 0`

  collection 함수에서 수집된 속성을 포함하는 객체

- `index 1`

  드래그 소스용 커넥터 기능

- `index 2`

  드래그 미리보기를 위한 커넥터 기능

##### Param

```javascript
const [{ isDragging }, drag] = useDrag({
	item: { id, type } // 필수
});
```

- isDragging(monitor)

	드래그 작업을 한 드래그 소스만 드래그한 것을 간주함.


- item (필수) 드래그되는 데이터를 설명하는 js객체. 드래그 소스에 대한 유일 정보이므로 알아야할 최소한의 데이터를 선택하는 것이 중요함. {id, type} 권장

- end(item, monitor) (선택)

  드래그가 중지되면 `end`가 호출됨. 모든 begin에 대해 해당 end가 보장됨. monitor.didDrop()이 호환되는 드롭 대상에 의해 처리되었는지 여부를 확인하기 위해 걸 수 있다.

  처리되고 대상이 메소드에서 일반 오브젝트를 리턴하여 놓기 결과를 지정한 경우 drop()을 사용할 수 있다.

  monitor.getDropResult()

- collect (선택)

  수집 기능.


- previewOptions

#### useDrag

현재 구성 요소를 놓기 대상으로 사용하기 위한 Hooks

```javascript
import { useDrop } from 'react-dnd';

function myDropTarget(props) {
	const [collectedProps, drop] = useDrop({
		accept
	});

	return <div ref={drop}>Drop Target</div>;
}
```

##### Param

```
const [{ canDrop, isOver }, drop] = useDrop({
});
```

- canDrop(item, monitor) 
	: 놓기 대상이 항목을 승인할 수 있는지 여부를 지정

- drop(item,monitor) (선택)

