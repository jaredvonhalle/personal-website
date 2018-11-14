import React, { Component } from 'react';
import '../css/Index.css';

class ComputerKeyboard extends Component {

	render() {
    	return (
            <div className="index-computer-keyboard row">
                <div className="index-computer-keyboard-text col">
                    <div className="computer-keyboard-keys-row-1 row justify-content-around">
                        <div className="computer-key col"></div>
                        <a className="github-key-1 col"></a>
                        <div className="github-key-2 col"></div>
                        <div className="linkedin-key-1 col"></div>
                        <div className="computer-key col d-none d-lg-block"></div>
                        <div className="computer-key col d-none d-lg-block"></div>
                        <div className="computer-key col"></div>
                        <div className="computer-key col"></div>
                    </div>
                    <div className="computer-keyboard-keys-row-2 row justify-content-around">
                        <div className="computer-key col"></div>
                        <div className="github-key-3 col"></div>
                        <div className="github-key-4 col"></div>
                        <div className="github-key-5 col"></div>
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