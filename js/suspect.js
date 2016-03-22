import React from 'react';

export default class Suspect extends React.Component {
  static get defaultProps() {
    return {
      count : null
    };
  }
  render() {
    return (<div>
      Yo
      <span>{this.props.count}</span>
    </div>);
  }
}
