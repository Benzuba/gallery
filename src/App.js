import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';


//App Comps
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computers from './components/Computers';
import NotFound from './components/NotFound';
import Search from './components/Search';
import Main from './components/Main';





export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Cats" component={Cats} />
            <Route exact path="/Dogs" component={Dogs} />
            <Route exact path="/Computers" component={Computers} />
            <Route exact path="/SearchForm" component={SearchForm} />
            <Route exact path="/Search/:tags" component={Search} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
