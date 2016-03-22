import React from 'react';

export default class Witness extends React.Component {
  static get defaultProps() {
    return {
      decided: false,
      result : null
    }
  }
  constructor(...args) {
    super(...args);

    this.decide();
  }
  decide() {
    this.props.decided = true;
    this.props.result = Math.rand();
  }
  render() {
    return (<div></div>);
  }
}
