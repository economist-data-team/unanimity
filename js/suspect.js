import React from 'react';

export default class Suspect extends React.Component {
  static get defaultProps() {
    return {
      count : null
    };
  }
  render() {
    var divProps = {
      className : this.props.suspect ? 'suspect' : ''
    };

    return (<div {...divProps}>
      Yo
      <span>{this.props.count}</span>
    </div>);
  }
}
