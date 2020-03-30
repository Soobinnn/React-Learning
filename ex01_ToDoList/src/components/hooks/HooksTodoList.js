import React,{useState} from 'react';


const Todo = ({todo, index, completeTodo, removeTodo}) => {
    console.log(todo);
    return (
        <>
            <div
                className="todo"
                style={{textDecoration: todo.isCompleted ? 'line-through': ''}}
            >
            {todo.text}
            </div>

            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
        </>
    )
}

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return
        addTodo(value);
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

const HooksTodoList = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = text => {
        const newTodos = [...todo, {text}];
        setTodo(newTodos);
        console.log(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todo];
        newTodos[index].isCompleted = true
        setTodo(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todo];
        newTodos.splice(index, 1);
        setTodo(newTodos);
    }

    return(
        <div className="todo-lists">
            {
                todo.map((item,index) => (
                    <Todo key={item} 
                        index={index} 
                        todo={item} 
                        completeTodo={completeTodo} 
                        removeTodo={removeTodo}
                    />        
                    ))
            }
             <TodoForm addTodo={addTodo}/>
        </div>
    );
}

export default HooksTodoList;