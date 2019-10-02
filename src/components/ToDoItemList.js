import React from 'react';
import ToDoItem from './ToDoItem';
import TodoItem from './ToDoItem';

class ToDoListItemList extends React.Component {

    shouldComponentUpdate(nextprops, nextState) {
        return this.props.todos !== nextprops.todos;
    }
    render() {
        const {todos, onToggle, onRemove} = this.props;
        
        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            )
        );
        
        return (
            <div>
                {todoList}
            </div>    
        );
    }
}

export default ToDoListItemList;
