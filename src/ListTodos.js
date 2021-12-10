import TodoItem from './TodoItem';

function ListTodos(props) {

  const todos = props.todos;

  const todoComponents = [];
  for (let i = 0; i < todos.length; i++) {
    todoComponents.push(
      <TodoItem text={todos[i]} key={i} />
    );
  }

  return (
    <ol className='list-todos'>
      {todoComponents}
    </ol>
  );
}

export default ListTodos;