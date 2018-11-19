import React, { Component } from 'react';
import ComputerKey from './ComputerKey';
import ComputerKeyLink from './ComputerKeyLink';
import ComputerKeyExtra from './ComputerKeyExtra';
import '../css/Index.scss';

class ComputerKeyboard extends Component {

    constructor(props) {
        super(props);

        let keyComponents = this.generateKeys();

        let rowOneKeyComponents = keyComponents.slice(0, Math.floor(keyComponents.length / 2));

        let rowTwoKeyComponents = keyComponents.slice(Math.floor(keyComponents.length / 2), keyComponents.length);

        this.state = {
            rowOneKeys: rowOneKeyComponents,
            rowTwoKeys: rowTwoKeyComponents
        };
    }

    generateKeys = () => {
        let keyComponents = [];

        //<div className="computer-key col d-none d-lg-block"></div>
        
        
        keyComponents.push(<ComputerKeyExtra key={1} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={2} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={3} classes="computer-key"/>);
        keyComponents.push(<ComputerKeyLink key={4} classes="computer-key-github" href="https://github.com/jaredvonhalle" />);
        keyComponents.push(<ComputerKey key={5} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={6} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={7} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={8} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={9} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={10} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={11} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={12} classes="computer-key"/>);keyComponents.push(<ComputerKey key={13} classes="computer-key"/>);keyComponents.push(<ComputerKeyExtra key={14} classes="computer-key"/>);
        
        return keyComponents;
    }

    getKeys = (start) => {
        let keyComponents = [];
        for (var i = start; i <= start + 6; i++) {
            keyComponents.push(<ComputerKey key={i}/>);
        }
        return keyComponents;
    }

	render() {
    	return (
            <div className="index-computer-keyboard row">
                <div className="index-computer-keyboard-text col">
                    <div className="computer-keyboard-keys-row-1 row justify-content-around">
                        {this.state.rowOneKeys}
                    </div>
                    <div className="computer-keyboard-keys-row-2 row justify-content-around">
                        {this.state.rowTwoKeys}
                    </div>
                </div>
            </div>
        );
  }
}

export default ComputerKeyboard;