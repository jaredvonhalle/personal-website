import React from 'react';
import {polyfill} from 'es6-promise'
import 'isomorphic-fetch'

export default class Nasa extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        title: '',
        picUrl: '',
        explanation: ''
    }
}


componentDidMount() {
    console.log('yes'); 
    let that = this;
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(pictData => {
        console.log(pictData);
        this.setState({
            title:pictData.title,
            picUrl:pictData.url,
            explanation:pictData.explanation
        });
    });
}
  
  render() {
    return (
    	<div>
            Nasa Picture of the Day
    		<div> {this.state.title} </div>
            <img src={this.state.picUrl} />
            <div> {this.state.explanation} </div>
    	</div>
    );
  }
}