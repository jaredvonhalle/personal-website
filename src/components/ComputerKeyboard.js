import React, { Component } from 'react';
import '../css/Index.css';

class ComputerKeyboard extends Component {

	render() {
    	return (
            <div className="index-computer-keyboard row">
                <div className="index-computer-keyboard-text col">
                    <div>key one</div>
                    <div>key two</div>
                </div>
            </div>
        );
  }
}

export default ComputerKeyboard;