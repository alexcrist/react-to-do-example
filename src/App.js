import { useState } from 'react';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';

function App() {

  const [todos, setTodos] = useState([
    'Walk the dog',
    'Go to the store'
  ]);

  return (
    <div className='app'>
      <AddTodo todos={todos} setTodos={setTodos} />
      <ListTodos todos={todos} />
    </div>
  );
}

export default App;
