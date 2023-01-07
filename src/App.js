import './App.css';
import React, { Component } from 'react';
import ToggleButton from './components/ToggleButton';
import Home from './components/Home';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';






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
      const newIndex = (state.currentIndex + 1) % 6;
      return { currentIndex: newIndex };
    });
  }

  render() {
    const components = [<Home />, <Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />];
    const currentComponent = components[this.state.currentIndex];
    return (
      <div>
        <div className='slide_container'>
          {currentComponent}
        </div>
        <div className='toggle'>
          <ToggleButton onClick={this.toggleComponents} />
        </div>
      </div>
    );
  }
}



export default App
