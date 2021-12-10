import { useState } from 'react';

function AddTodo(props) {

  const todos = props.todos;
  const setTodos = props.setTodos;

  const [inputValue, setInputValue] = useState('');

  function onChangeInput(event) {
    setInputValue(event.target.value);
  }

  function onClickButton() {
    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    setInputValue('');
  }

  return (
    <div className='add-todo'>
      <input 
        value={inputValue}
        onChange={onChangeInput}
      />
      <button onClick={onClickButton}>Add</button>
    </div>
  );
}

export default AddTodo;