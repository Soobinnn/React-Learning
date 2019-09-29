import React from 'react';
import TodoListTemplate from './components/ToDoListTemplate';
import './App.css';
import Form from './components/Form';
import ToDoItemList from './components/ToDoItemList';

class App extends React.Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input:e.target.value
    })
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  
  render() {
    return(
    <TodoListTemplate form={<Form/>}>
      <ToDoItemList/>
    </TodoListTemplate>
    );
  }
}

export default App;
