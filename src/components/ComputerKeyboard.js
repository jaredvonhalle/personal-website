import React, { Component } from 'react';
import '../css/Index.css';

class ComputerKeyboard extends Component {

	render() {
    	return (
            <div className="index-computer-keyboard row">
                <div className="index-computer-keyboard-text col">
                    <div className="computer-keyboard-keys-row-1 row justify-content-around">
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col d-none d-lg-block"></div>
                        <div className="computer-key col d-none d-lg-block"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                    </div>
                    <div className="computer-keyboard-keys-row-2 row justify-content-around">
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col d-none d-lg-block"></div>
                        <div className="computer-key col d-none d-lg-block"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                    </div>
                </div>
            </div>
        );
  }
}

export default ComputerKeyboard;