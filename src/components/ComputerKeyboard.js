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

        this.keys = {
            rowOneKeys: rowOneKeyComponents,
            rowTwoKeys: rowTwoKeyComponents
        };
    }

    generateKeys = () => {
        let keyComponents = [];
        
        keyComponents.push(<ComputerKeyExtra key={1} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={2} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={3} classes="computer-key"/>);
        keyComponents.push(<ComputerKeyLink key={4} classes="computer-key-github" href="https://github.com/jaredvonhalle" />);
        keyComponents.push(<ComputerKeyLink key={5} classes="computer-key-linkedin" href="https://www.linkedin.com/in/jared-von-halle-61736246/" />);
        keyComponents.push(<ComputerKey key={6} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={7} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={8} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={9} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={10} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={11} classes="computer-key"/>);
        keyComponents.push(<ComputerKey key={12} classes="computer-key"/>);keyComponents.push(<ComputerKey key={13} classes="computer-key"/>);keyComponents.push(<ComputerKeyExtra key={14} classes="computer-key"/>);
        
        return keyComponents;
    }

	render() {
    	return (
            <div className="index-computer-keyboard row">
                <div className="index-computer-keyboard-text col">
                    <div className="computer-keyboard-keys-row-1 row justify-content-around">
                        {this.keys.rowOneKeys}
                    </div>
                    <div className="computer-keyboard-keys-row-2 row justify-content-around">
                        {this.keys.rowTwoKeys}
                    </div>
                </div>
            </div>
        );
  }
}

export default ComputerKeyboard;