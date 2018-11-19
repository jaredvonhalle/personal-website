import React, { Component } from 'react';
//import '../css/ComputerKey.scss';

class ComputerKeyLink extends Component {

    constructor(props) {
        super(props);
    }

	render() {
    	return (
            <div className="key-wrap col">
                <a href={this.props.href} className={this.props.classes} target="_blank"></a>
            </div>
        );
  }
}

export default ComputerKeyLink;