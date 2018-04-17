import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from 'component/ssr/components/home';
import About from 'component/ssr/components/about';
import Header from 'component/header/header';


import { Menu, Icon } from 'antd';

const tabKey = { '/spa/ssr': 'home', '/spa/ssr/about': 'about' };
class App extends Component {
  constructor(props) {
    super(props);
    const { url } = props;
    this.state = { current: tabKey[url] };
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <div>
      <Header></Header>
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/spa/ssr">首页</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/spa/ssr/about">关于</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/spa/ssr/about" component={About}/>
        <Route path="/spa/ssr" component={Home}/>
      </Switch>
    </div>;
  }
}

export default App;
