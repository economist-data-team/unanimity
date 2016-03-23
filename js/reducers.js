import { generateReducer } from './utilities.js';
import { UPDATE_DATA, UPDATE_SUSPECTS } from './actions.js';

var initialState = {
  data : [],
  suspects : []
};

var dataReducer = generateReducer(initialState.data, UPDATE_DATA);
var suspectsReducer = generateReducer(initialState.suspects, UPDATE_SUSPECTS);

export default function updateState(state = initialState, action) {
  return {
    data : dataReducer(state.data, action),
    suspects : suspectsReducer(state.suspects, action)
  };
}
