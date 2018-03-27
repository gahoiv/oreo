import React from "react";
import ReactDOM from "react-dom";
import { HeaderInstance } from './component/header';
import { BodyInstance } from './component/body';
import { ScrollButton } from './component/scrollButton';
import { TechPageInstance } from './component/tech';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ScrollButton1 extends React.Component {
    constructor() {
      super();

      this.state = {
          intervalId: 0
      };
    }

    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }

    render () {
        return <button title='Back to top' className='scroll'
                 onClick={ () => { this.scrollToTop(); }}>
                  <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
                </button>;
     }
  }


ReactDOM.render(
    <div >
        <HeaderInstance/>
        <Router><Route path="/tech" component={TechPageInstance} /></Router>
        <Router><Route exact path="/" component={BodyInstance} /></Router>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    </div>,
    document.getElementById("root"));
