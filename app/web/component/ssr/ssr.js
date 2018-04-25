import React, { Component } from 'react';
import Header from 'component/header/header';
import Footer from 'component/footer/footer';
import { Route, Switch } from 'react-router-dom';
import Home from 'component/ssr/components/home';
import About from 'component/ssr/components/about';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/spa/ssr/about" component={About} />
            <Route path="/spa/ssr" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
