import React, { Component } from 'react';
//import '../css/ComputerKey.scss';

class ComputerKeyExtra extends Component {

    constructor(props) {
        super(props);
    }

	render() {
    	return (
            <div className="key-wrap col d-none d-lg-block">
                <div className={this.props.classes}></div>
            </div>
        );
  }
}

export default ComputerKeyExtra;