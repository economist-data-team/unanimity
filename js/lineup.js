import React from 'react';
import Suspect from './suspect.js';
import Witness from './witness.js';

export default class Lineup extends React.Component {
  static get defaultProps() {
    return {
      suspects : []
    };
  }
  constructor(...args) {
    super(...args);

    this.state = {
      witnesses : []
    };

    this.runWitness = this.runWitness.bind(this);
  }
  runWitness() {
    this.state.witnesses.push(Math.random());
    this.setState({'witnesses' : this.state.witnesses});
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.suspects !== nextProps.suspects) {
      this.state.witnesses = [];
    }
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
      <button onClick={this.runWitness}>Add witness</button>
      <div>Witnesses: {this.state.witnesses.length}</div>
    </div>);
  }
}
