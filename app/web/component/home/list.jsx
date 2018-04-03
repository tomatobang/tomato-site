'use strict';
import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

const tabItemClick = (key) =>{
  console.log('tab click',key);
};

export default class List extends Component {
  componentDidMount() {
    console.log('----List componentDidMount-----', this.props);
    window.addEventListener('scroll', ()=>{

    }, false);
  }

  render() {
    return <div className="container smart-container">
      <Header></Header>
      <div className="tab">
        <div>text</div>
        <Tabs defaultActiveKey="1" onChange={tabItemClick}>
          <TabPane tab="Tab 1" key="1">  <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-xs-12 col-sm-9">
              <ul className="smart-artiles" id="articleList">
                {this.props.list.map(function(item) {
                  <li key={item.id}>
                    <div className="point">+{item.hits}</div>
                    <div className="card">
                      <h2><a href={item.url} target="_blank">{item.title}</a></h2>
                      <div>
                        <ul className="actions">
                          <li>
                            <time className="timeago">{item.moduleName}</time>
                          </li>
                          <li className="tauthor">
                            <a href="#" target="_blank" className="get">Sky</a>
                          </li>
                          <li><a>+收藏</a></li>
                          <li>
                            <span className="timeago">{item.summary}</span>
                          </li>
                          <li>
                            <span className="timeago"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>;
                })}
              </ul>
            </div>
          </div>
          </TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    </div>
  }
}

