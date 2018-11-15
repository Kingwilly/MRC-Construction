import * as types from "./types";

// Toggles the full screen modal
export function toggleFullScreenModalDispatch(expert) {
  return { type: types.TOGGLE_FULL_SCREEN_MODAL, payload: expert };
}
export function toggleFullScreenModal(expert) {
  return function(dispatch) {
    dispatch(toggleFullScreenModalDispatch(expert));
  };
}
// Toggles the full screen modal
export function togglePortfolioModalDispatch(
  portfolio_object,
  portfolio_photo_id
) {
  return {
    type: types.TOGGLE_PORTFOLIO_MODAL,
    payload: {
      portfolio_object: portfolio_object,
      portfolio_photo_id: portfolio_photo_id
    }
  };
}
export function togglePortfolioModal(portfolio_object, portfolio_photo_id) {
  return function(dispatch) {
    dispatch(
      togglePortfolioModalDispatch(portfolio_object, portfolio_photo_id)
    );
  };
}
