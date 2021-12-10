function TodoItem(props) {
  return (
    <li className='todo-item'>
      {props.text}
    </li>
  );
}

export default TodoItem;