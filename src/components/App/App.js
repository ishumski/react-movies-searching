import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';
import SimpleBottomNavigation from '../Footer/Footer';

import Trending from '../Pages/Trending/Trending';
import Movies from '../Pages/Movies/Movies';
import Series from '../Pages/Series/Series';
import Search from '../Pages/Search/Search';

import { Container } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/trending" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>

        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
