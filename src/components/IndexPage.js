import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IndexPage extends Component {

	render() {
    	return (
    		<div class="index-main-container">
	    		<div>Index Start</div>
	    		  <ul>
			        <li>
			        	<Link to='/blog'>Blog</Link>
			        </li>
			      </ul>
	    		<div>Index End</div>
			</div>
    );
  }
}

export default IndexPage;