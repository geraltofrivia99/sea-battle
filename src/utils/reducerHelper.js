export const createReducer = (initialState, handlers) => (state = initialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    return handler({ ...state }, { ...action.payload });
  };
  