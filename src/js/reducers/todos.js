const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(
          undefined,
          Object.assign(action, {
            id: state.length,
          })
        ),
      ];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    case "GET_TODO_DATA_RECEIVED":
      return action.data;
    default:
      return state;
  }
};

export default todos;
