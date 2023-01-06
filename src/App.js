import './App.css';
import React, { Component } from 'react';
import ToggleButton from './components/ToggleButton';
import Home from './components/Home';
import SlideOne from './components/SlideOne';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHome: true,
      showSlideOne: false,
    };
    this.toggleComponents = this.toggleComponents.bind(this);
  }

  toggleComponents() {
    this.setState((state) => ({
      showHome: !state.showHome,
      showSlideOne: !state.showSlideOne,
    }));
  }

  render() {
    return (
      <div>
        {this.state.showHome && <Home />}
        {this.state.showSlideOne && <SlideOne />}
        <ToggleButton onClick={this.toggleComponents} />
      </div>
    );
  }
}


export default App
