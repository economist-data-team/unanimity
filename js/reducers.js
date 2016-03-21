import { generateReducer } from './utilities.js';
import { UPDATE_DATA } from './actions.js';

var initialState = {
  data : []
};

var dataReducer = generateReducer(initialState.data, UPDATE_DATA);

export default function updateState(state = initialState, action) {
  return {
    data : dataReducer(state.data, action)
  };
}
