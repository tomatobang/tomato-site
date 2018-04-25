import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';

import './header.css';

const tabKey = { '/spa/ssr': 'home', '/spa/ssr/about': 'about' };

export default class Header extends Component {
  constructor(props) {
    super(props);
    const { url } = props;
    this.state = { current: tabKey[url] };
  }

  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <header className="header">
        <h1>
          <img src={require('asset/images/logo.png')} />
          <a href="/" className="router-link-active">
            TomatoBang
          </a>
        </h1>
        <Menu
          onClick={this.handleClick.bind(this)}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/spa/ssr">首页</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/spa/ssr/about">关于</Link>
          </Menu.Item>
        </Menu>
      </header>
    );
  }
}
