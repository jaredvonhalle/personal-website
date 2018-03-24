import React, { Component } from 'react';

export default class Layout extends Component {

  render() {
      return (
        <div className="layout-main-container">
          <div>header</div>
          <div className="app-content">{this.props.children}</div>
          <div>footer</div>
      </div>
    );
  }
}
