import { generateReducer } from './utilities.js';
import { UPDATE_DATA, UPDATE_SUSPECTS } from './actions.js';

var initialState = {
  data : [],
  suspects : []
};

var dataReducer = generateReducer(initialState.data, UPDATE_DATA);

function suspectsReducer(state, action) {
  if(action !== UPDATE_SUSPECTS) { return state; }

}

export default function updateState(state = initialState, action) {
  return {
    data : dataReducer(state.data, action)
  };
}
