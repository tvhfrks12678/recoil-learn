import { atom, selector } from 'recoil';
import { RecoilAtomKeys } from './stores/recoilKeys';
import { RecoilSelectorKeys } from './stores/recoilKeys';

const todoListState = atom({
  key: RecoilAtomKeys.TODO_LIST_STATE,
  default: [],
});

const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All',
});

const filteredTodoListState = selector({
  key: RecoilSelectorKeys.FILTERED_TODO_LIST_STATE,
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: any) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: any) => !item.isComplete);
      default:
        return list;
    }
  },
});

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (item: any) => item.isComplete
    ).length;
    let allText = '';
    todoList
      .filter((item: any) => !item.isComplete)
      .map((item: any) => (allText = allText + ' ' + item.text));

    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText,
    };
  },
});

export {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
};
