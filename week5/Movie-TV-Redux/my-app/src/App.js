import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { InputForm } from './components/InputForm';
import { InputForm2 } from './components/InputForm2';
import { Nav } from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Movie} />
        <Route path='/tvshows' component={TvShow} />
      </Switch>
    </div>
  );
}

export default App;