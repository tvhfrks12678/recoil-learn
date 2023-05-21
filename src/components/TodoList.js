import { todoListState } from '../recoil_state';

import TodoItemCreator from './TodoItemCreator';

import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};

export default TodoList;
