'use strict';

import d3 from 'd3';
import React from 'react';
import { Im, parseNumerics, connectMap }
  from './utilities.js';

import colours from './econ_colours.js';

import Header from './header.js';
import Footer from './footer.js';
import ToggleBarRaw from './toggle-bar.js';
import ChartContainer from './chart-container.js';

import LineupRaw from './lineup.js';

import chroma from 'chroma-js';

import { createStore, compose } from 'redux';
import { connect, Provider } from 'react-redux';

import { updateData, generateSuspects } from './actions.js';
import updateState from './reducers.js'

// var store = createStore(updateState);
const DEBUGCREATESTORE = compose(
  window.devToolsExtension && window.devToolsExtension() || (f => f)
)(createStore);
var store = DEBUGCREATESTORE(updateState);

var Lineup = connect(function(state) {
  return {
    suspects : state.suspects
  };
})(LineupRaw);

function populate() {
  store.dispatch(generateSuspects(Math.round(Math.random())));
}
function populateFixup() {
  store.dispatch(generateSuspects(false, true));
}
function reveal() {
  store.dispatch(revealSuspects());
}

class Chart extends ChartContainer {
  render() {
    return(
      <div className='chart-container'>
        <Header title="The paradox of unanimity" subtitle="Also to come"/>
        <Lineup />
        <button onClick={populate}>Suspects</button>
        <button onClick={populateFixup}>FixUp</button>
        <button onClick={reveal}>Reveal</button>
        <Footer source="To come" />
      </div>
    );
  }
}
var props = {
  height : 320
};

var chart = React.render(
  <Provider store={store}>
    {() => <Chart {...props} />}
  </Provider>, document.getElementById('interactive'));
