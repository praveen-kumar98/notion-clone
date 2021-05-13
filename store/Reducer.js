import { ACTIONS } from "./Action";

const reducers = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: payload,
      };
    case ACTIONS.GET_PAGES:
      return {
        ...state,
        pages: payload,
      };
    default:
      return state;
  }
};

export default reducers;
