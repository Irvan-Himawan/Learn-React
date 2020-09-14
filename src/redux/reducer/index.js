const intialState = {
  count: 1,
  todolist: "apaja",
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
  //   if (action.type === "TAMBAH") {
  //     return state.count + 1;
  //   }
};

export default reducer;
