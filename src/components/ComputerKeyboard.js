import React, { Component } from 'react';
import ComputerKey from './ComputerKey';
import '../css/Index.scss';

class ComputerKeyboard extends Component {

    constructor(props) {
        super(props);

        let rowOneKeyComponents = this.getKeys(1);
        let rowTwoKeyComponents = this.getKeys(7)

        this.state = {
            rowOneKeys: rowOneKeyComponents,
            rowTwoKeys: rowTwoKeyComponents
        };
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
                        {this.state.rowOneKeys}
                    </div>
                </div>
            </div>
        );
  }
}

export default ComputerKeyboard;