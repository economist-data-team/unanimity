import React from 'react';
import Suspect from './suspect.js';
import Witness from './witness.js';

export default class Lineup extends React.Component {
  static get defaultProps() {
    return {
      witnesses : [],
      suspects : []
    };
  }
  constructor(...args) {
    super(...args);

    this.runWitness = this.runWitness.bind(this);
  }
  runWitness() {
    this.props.witnesses.push(Math.random());
  }
  render() {
    var suspects = this.props.suspects.map((d,i) => {
      var suspectAttrs = {
        key : i,
        guilty : d.guilty
      };

      return (<Suspect {...suspectAttrs} />);
    });

    return (<div>
      {suspects}
      <button onClick={this.runWitness}>Run</button>
    </div>);
  }
}
