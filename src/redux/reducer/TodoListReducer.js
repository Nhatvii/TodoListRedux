const innitialState = {
  todoList: [],
  todoListDone: [],
  isFilter: true,
};

const TodoListReducer = (state = innitialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        todoList: state.todoList.concat(action.data),
      };
    }
    case "UPDATE_ITEM": {
      let listUpdate = [...state.todoList];
      let index = state.todoList.findIndex((item) => item.id === action.id);
      if (index !== -1) {
        listUpdate[index].text = action.title;
      }
      state.todoList = listUpdate;
      return { ...state };
    }
    case "DELETE_ITEM": {
      let listUpdate = [...state.todoListDone];
      let index = state.todoListDone.findIndex((item) => item.id === action.id);
      if (index !== -1) {
        listUpdate.splice(index, 1);
      }
      state.todoListDone = listUpdate;
      const filterTodo = state.todoList.filter((item) => item.id !== action.id);
      return {
        ...state,
        todoList: filterTodo,
      };
    }
    case "SET_ISDONE": {
      let listUpdate = [...state.todoList];
      listUpdate.map((ele) => {
        if (ele.id === action.id) {
          ele.isDone = action.isDone;
        }
      });
      state.todoList = listUpdate;
      return { ...state };
    }
    case "HANDLE_ISFILTER": {
      if (state.isFilter) {
        let listState = [...state.todoList];
        let listUpdate = [];
        state.todoListDone = [];
        listState.map((item) => {
          if (item.isDone) {
            listUpdate.push(item);
          }
        });
        state.todoListDone = listUpdate;
      }
      state.isFilter = !state.isFilter;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default TodoListReducer;
