import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Layout extends Component {

  render() {
      return (
        <div className="layout-main-container">
          <div>header</div>
          <Link to='/'>Home</Link>
          <div className="app-content">{this.props.children}</div>
          <div>footer</div>
      </div>
    );
  }
}
