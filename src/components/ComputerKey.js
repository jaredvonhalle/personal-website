import React, { Component } from 'react';
//import '../css/ComputerKey.scss';

class ComputerKey extends Component {

    constructor(props) {
        super(props);
    }

	render() {
    	return (
            <div className="key-wrap col">
                <div className={this.props.classes}></div>
            </div>
        );
  }
}

//<div className="computer-key col d-none d-lg-block"></div>

export default ComputerKey;