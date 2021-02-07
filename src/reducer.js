export const reducer = (state, action) => {
  if (action.type === "PREV") {
    // since JS mod is actually remainder it doesn't work with negative numbers
    const newIndex =
      (((state.index - 1) % state.list.length) + state.list.length) %
      state.list.length;
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
    let newIndex = Math.floor(Math.random() * state.list.length);
    if (newIndex == state.index) {
      newIndex = (newIndex + 1) % state.list.length;
    }
    return {
      ...state,
      index: newIndex,
    };
  }
  throw new Error("no matching action type");
};
