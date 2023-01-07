import './App.css';
import React, { Component } from 'react';
import ToggleButton from './components/ToggleButton';
import Home from './components/Home';
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';






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
      const newIndex = (state.currentIndex + 1) % 3;
      return { currentIndex: newIndex };
    });
  }

  render() {
    const components = [<Home />, <SlideOne />, <SlideTwo />];
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
