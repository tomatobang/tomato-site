import React, { Component } from 'react';
import './footer.css';
export default class Footer extends Component {
  componentDidMount() {
    console.log('----Footer componentDidMount-----');
  }
  render() {
    return <footer className="footer">
      <div className="container">
        <a href="/" className="router-link-active">yipeng.info@MIT</a>
      </div>
    </footer>;
  }
}
