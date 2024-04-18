const initialState = {
  user: null,
  dasboardAuth: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: null,
        dasboardAuth: [],
      };
    case "SET_AUTH_DASBOARD":
      return {
        ...state,
        dasboardAuth: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
