import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }
  render() {
    return <header className="header">
      <div className="container">
        <h1>
          <img src="/asset/images/logo.png"/>
          <a href="/" className="router-link-active">TomatoBang</a>
        </h1>
      </div>
    </header>;
  }
}
