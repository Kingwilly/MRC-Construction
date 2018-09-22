import * as types from "../actions/types";

const INITIAL_STATE = {
  full_screen_modal_open: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_FULL_SCREEN_MODAL:
      return {
        ...state,
        full_screen_modal_open: !state.full_screen_modal_open
      };
    default:
      return state;
  }
}
