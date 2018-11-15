import * as types from "../actions/types";

const INITIAL_STATE = {
  full_screen_modal_open: false,
  porfolio_modal_open: false,
  portfolio_object: null,
  portfolio_photo_id: null,
  expert: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_FULL_SCREEN_MODAL:
      return {
        ...state,
        full_screen_modal_open: !state.full_screen_modal_open,
        expert: action.payload
      };
    case types.TOGGLE_PORTFOLIO_MODAL:
      if (state.porfolio_modal_open) {
        return {
          ...state,
          porfolio_modal_open: false,
          portfolio_object: null,
          portfolio_photo_id: null
        };
      } else {
        return {
          ...state,
          porfolio_modal_open: true,
          portfolio_object: action.payload.portfolio_object,
          portfolio_photo_id: action.payload.portfolio_photo_id
        };
      }
    default:
      return state;
  }
}
