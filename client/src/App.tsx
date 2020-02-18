import * as React from 'react';
import './App.css';
import BeerList from './BeerList';

import logo from './logo.svg';

class App extends React.Component<{}, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BeerList/>
      </div>
    );
  }
}

componentDidMount() {
  this.setState({isLoading: true});

  fetch('http://localhost:8080/good-beers')
    .then(response => response.json())
    .then(data => this.setState({beers: data, isLoading: false}));
}

export default App;