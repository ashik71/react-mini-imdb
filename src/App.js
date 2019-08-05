import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetails from './components/Movies/movieDetails';
import NotFound  from './components/utils/notfound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie/:movieId' component={MovieDetails} exact />
            <Route component={NotFound} exact />
          </Switch>
        </React.Fragment> 
      </BrowserRouter>
      {/* <Header/>
      <Home/> */}
    </div>
  );
}

export default App;
