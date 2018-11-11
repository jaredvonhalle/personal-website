import React, { Component } from 'react';
import ComputerMonitor from './ComputerMonitor';
import ComputerKeyboard from './ComputerKeyboard';
import '../css/Index.css';

class IndexPage extends Component {

	render() {
    	return (
    		<div className="index-main-container container-fluid">
				<div className="index-computer">
					<ComputerMonitor/>
					<ComputerKeyboard/>
				</div>
			</div>
    );
  }
}

export default IndexPage;