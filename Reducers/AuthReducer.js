const initialState = {
  user: {
    username: "",
    email: "",
    password: "",
    token: "",
  },
};

const UserReducer = (state = initialState, action) => {
  if (action.type == "LOGIN") {
    return {
      ...state,
      user: {
        ...state.user,
        email: action.payload.user.email,
        password: action.payload.user.password,
        token: action.payload.token,
      },
    };
  }
  if (action.type == "REGISTER") {
    return {
      ...state,
      user: {
        username: action.payload.user.username,
        email: action.payload.user.email,
        password: action.payload.user.password,
      },
    };
  }

  if (action.type == "GET_PROFILE") {
    return {
      ...state,
      user: {
        username: action.payload.user.username,
        email: action.payload.user.email,
        password: action.payload.user.password
      },
    };
  }
  return state;
};

export default UserReducer;
