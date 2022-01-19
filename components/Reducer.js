export const InitialState = {
  data: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
