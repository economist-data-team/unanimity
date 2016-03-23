import React from 'react';
import { Im } from './utilities.js';
import Suspect from './suspect.js';
import Witness from './witness.js';

function sum(ary) {
  return ary.reduce((memo, n) => memo + n, 0);
}

export default class Lineup extends React.Component {
  static get defaultProps() {
    return {
      suspects : []
    };
  }
  constructor(...args) {
    super(...args);

    this.state = {
      witnesses : [],
      suspects : []
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
      let fixup = nextProps.suspects.reduce((memo, s) => s.fixup || memo, false);
      let guilty = nextProps.suspects.reduce((memo, s) => s.guilty || memo, false);
      let weightMemo = [];
      this.state.suspects = nextProps.suspects.map(s => {
        var weight;
        if(fixup) { weight = +s.fixup; }
        else if(guilty) {
          if(s.guilty) { weight = 0.48; }
          else { weight = 0.32 / (nextProps.suspects.length - 1); }
        } else {
          weight = 0.8 / (nextProps.suspects.length);
        }
        var bottom = sum(weightMemo);
        weightMemo.push(weight);
        var top = sum(weightMemo);
        return Im.extend(s, {
          weight, bottom, top
        });
      })
    }
  }
  render() {
    var suspects = this.state.suspects.map((s,i) => {
      var suspectAttrs = {
        key : i,
        guilty : s.guilty,
        suspect : s.suspect,
        count : this.state.witnesses.filter(w => {
          return w > s.bottom && w <= s.top
        }).length
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
