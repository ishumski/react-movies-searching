import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import SimpleBottomNavigation from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Router path="/trending" component={Trending} exact />
          <Router path="/movies" component={Movies} />
          <Router path="/series" component={Series} />
          <Router path="/search" component={Search} />
        </Container>

        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
