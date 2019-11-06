import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

import './css/main.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NoPage from './components/NoPage';
import About from './components/About';
import BTCGraph from './components/BTCGraph';

function App(props) {
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar />
        <section className="page">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/chart" component={BTCGraph}/>
            <Route component={NoPage} />
          </Switch>
        </section>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
