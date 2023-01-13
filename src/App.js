import './App.css';
import React, { Component } from 'react';
import ToggleButton from './components/ToggleButton';
import Home from './components/Home';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.toggleComponents = this.toggleComponents.bind(this);
  }

  toggleComponents() {
    this.setState((state) => {
      const newIndex = (state.currentIndex + 1) % 8;
      return { currentIndex: newIndex };
    });
  }

  render() {
    const components = [<Home />, <Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />, <Slide6 />, <Slide7 />];
    const currentComponent = components[this.state.currentIndex];

    //make button bounce on Slide6
    let toggleButtonClass = 'toggle-button';
    if (this.state.currentIndex === 6) {
      toggleButtonClass += '-bounce';
    }
    console.log(toggleButtonClass);

    //make button dark mode on Slide7
    let toggleBodyClass = 'body';
    if (this.state.currentIndex === 7) {
      toggleBodyClass = 'body-darkMode';
      toggleButtonClass += '-darkMode';
    }
    
    console.log(toggleButtonClass);
    console.log(toggleBodyClass);

    return (
      <div className={toggleBodyClass}>
        <div className='slide_container'>
          {currentComponent}
        </div>
        <div className={toggleButtonClass}>
          <ToggleButton className={toggleButtonClass} onClick={this.toggleComponents} />
        </div>
      </div>
    );
  }
}

export default App

