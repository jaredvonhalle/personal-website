import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import Nasa from './Nasa';
import '../css/Index.css';

class IndexPage extends Component {

	render() {
    	return (
    		<div className="index-main-container container-fluid">
					<div className="index-computer-monitor row">
						<div className="index-computer-monitor-text col">
							<div>line one</div>
							<div>line two</div>
						</div>
					</div>
					<div className="index-computer-keyboard row">
						<div className="index-computer-keyboard-text col">
							<div>key one</div>
							<div>key two</div>
						</div>
					</div>
			</div>
    );
  }
}

export default IndexPage;