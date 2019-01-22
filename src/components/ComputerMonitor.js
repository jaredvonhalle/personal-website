import React, { Component } from 'react';
import '../css/Index.scss';

/*import stsicky_red from '../images/sticky_red.svg';
<div className="computer-monitor-stickies col-1">
<img src={stsicky_red}></img>
</div>
*/

class ComputerMonitor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutTextHeight: '',
            aboutTextWidth: ''
        }
    }

    componentDidMount() {
        this.resizeAboutText();
        window.addEventListener("resize", this.resizeAboutText);
    }


    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeAboutText);
    }

    resizeAboutText() {
        var computerMonitorElement = document.getElementsByClassName('computer-monitor')[0];
        var computerMonitorTextElement = document.getElementsByClassName('computer-monitor-text')[0];

        var parentWidth = computerMonitorElement.offsetWidth;
        var childMarginLeft = (parentWidth * .08).toString();
        var childMarginRight = (parentWidth * .25).toString();

        computerMonitorTextElement.style.marginLeft = childMarginLeft + "px";
        computerMonitorTextElement.style.marginRight = childMarginRight + "px";
    }

	render() {
    	return (
            <div className="computer-monitor row">
                <div className="computer-monitor-text col">
                    <div className="computer-monitor-text-name">Jared von Halle</div>
                    <ul className="computer-monitor-text-about">
                        <li className="computer-monitor-text-about-line">
                        PROFESSIONALLY: Passionate about software development, DevOps, project management, and all things computer science.
                        </li>
                        <li className="computer-monitor-text-about-line">
                        PERSONALLY: A perfect Sunday is an active day spent outdoors, includes a Jets victory, and ends with a home cooked meal shared with friends.
                        </li>
                        <li className="computer-monitor-text-about-line">
                        CURRENTLY: A nomad, taking 6 months off to travel around Asia with my wife, before moving to Colorado.
                        </li>
                    </ul>
                </div>
            </div>
        );
  }
}

export default ComputerMonitor;