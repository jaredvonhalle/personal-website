import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nasa from './Nasa';

class IndexPage extends Component {

	render() {
    	return (
    		<div className="index-main-container">
	    		<div>Index Start</div>
	    		  <ul>
			        <li>
			        	<Link to='/blog'>Blog</Link>
								<Nasa />
			        </li>
			      </ul>
	    		<div>Index End</div>
			</div>
    );
  }
}

export default IndexPage;