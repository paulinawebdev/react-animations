import React from 'react';
import '../scss/theme.scss';
import Spotlight from './spotlight';
import Header from './header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Video from './video';
import data from '../data/data.json';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: "nexon",
      data: data
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.state.theme === "overwatch") {
      this.setState({ theme: "nexon" });
    } else if(this.state.theme === "nexon") {
      this.setState({ theme: "overwatch" });
    }
  }

  render() {
    let data = this.state.data;

    if (this.state.theme === "overwatch") {
      data = data.blizzardCharInfo;
    } else if (this.state.theme === "nexon") {
      data = data.mapleCharInfo;
    }

    return (
      <Router>
        <div className="app">
          <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <Route exact path="/" render={props =>
            <Spotlight {...props} theme={this.state.theme} items={data} />
            } />
          {/* <Route exact path="/video" render={props =>
            <Video {...props} theme={this.state.theme} items={data} />
            } /> */}
        </div>
      </Router>
    );
  }
  
}
