import { filteredTodoListState, todoListState } from '../recoil_state';

import TodoItemCreator from './TodoItemCreator';

import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <div style={{ display: 'flex', gap: '10px' }}>
        <TodoItemCreator />
        <TodoListFilters />
      </div>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};

export default TodoList;
