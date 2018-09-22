import * as types from "./types";

// Toggles the full screen modal
export function toggleFullScreenModalDispatch() {
  return {
    type: types.TOGGLE_FULL_SCREEN_MODAL,
    payload: null
  };
}
export function toggleFullScreenModal() {
  return function(dispatch) {
    dispatch(toggleFullScreenModalDispatch());
  };
}
