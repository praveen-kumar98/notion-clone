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
    case ACTIONS.EDIT_PAGE_NAME:
      return {
        ...state,
        pages: state.pages.map((page) =>
          page._id === payload._id ? { ...page, name: payload.name } : page
        ),
      };
    default:
      return state;
  }
};

export default reducers;
