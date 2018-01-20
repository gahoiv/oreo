import React from "react";
import ReactDOM from "react-dom";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HeaderInstance } from './component/header';
import { BodyInstance } from './component/body';
import { ScrollButton } from './component/scrollButton';

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
        <BodyInstance/>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    </div>,
    document.getElementById("root"));