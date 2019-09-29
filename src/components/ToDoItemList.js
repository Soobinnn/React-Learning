import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoListItemList extends React.Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;
        return (
            <div>
                <ToDoItem text="안녕"/>
                <ToDoItem text="리액트"/>
                <ToDoItem text="반가워"/>
            </div>    
        );
    }
}

export default ToDoListItemList;
