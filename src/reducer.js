export const reducer = (state, action) => {
  if (action.type === "PREV") {
    const newIndex = (state.index - 1) % state.list.length;
    console.log(newIndex);
    return {
      ...state,
      index: newIndex,
    };
  }
  if (action.type === "NEXT") {
    return {
      ...state,
      index: (state.index + 1) % state.list.length,
    };
  }
  if (action.type === "RANDOM") {
    return {
      ...state,
      index: Math.floor(Math.random() * state.list.length),
    };
  }
  throw new Error("no matching action type");
};
