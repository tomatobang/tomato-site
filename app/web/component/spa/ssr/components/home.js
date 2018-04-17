import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, del } from 'component/spa/redux/actions';
import { Carousel } from 'antd';
import Banner from './Banner';
import Feature from './feature';
import './home.css';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
const TweenOneGroup = TweenOne.TweenOneGroup;

class Home extends Component {
  static fetch() {
    return Promise.resolve({
      list: [
        {
          id: 0,
          title: '好玩.',
          summary: '管理你 <b>工作&生活</b> 的最佳工具.',
          hits: 550,
          url: 'https://www.tomatobang.com',
        },
        {
          id: 1,
          title: '语音记录',
          summary: '让你迷上自己的声音.',
          hits: 550,
          url: 'https://www.tomatobang.com',
        },
        {
          id: 2,
          title: '支持多端同步',
          summary: 'PC端与 App 端神奇同步.',
          hits: 278,
          url: 'https://www.tomatobang.com',
        },
      ],
    }).then(data => {
      return data;
    });
  }

  render() {
    const { add, del, list } = this.props;
    const id = list.length + 1;
    const item = {
      id,
      title: `好玩-${id}`,
      summary: '管理你 <b>工作&生活</b> 的最佳工具.',
      hits: 550 + id,
      url: 'https://www.tomatobang.com',
    };
    return (
      <div className="redux-nav-item">
        <Banner isMobile="false" />
        <Feature />
        <div className="container">
          <Carousel horizontal="true" className="tomatobang-carousel">
            <div>
              <img alt="banner" src={require('asset/images/banner/tab1.png')} />
            </div>
            <div>
              <img alt="banner" src={require('asset/images/banner/tab2.png')} />
            </div>
            <div>
              <img
                alt="banner"
                src={require('asset/images/banner/tab3-1.png')}
              />
            </div>
            <div>
              <img alt="banner" src={require('asset/images/banner/tab4.png')} />
            </div>
          </Carousel>
          <TweenOneGroup>
            <div key="0">demo</div>
          </TweenOneGroup>
          <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-xs-12 col-sm-9">
              <ul className="smart-artiles" id="articleList">
                {list.map(function(item) {
                  return (
                    <li key={item.id}>
                      <div className="point">+{item.hits}</div>
                      <div className="card">
                        <h2>
                          <a href={item.url} target="_blank">
                            {item.title}
                          </a>
                        </h2>
                        <div>
                          <ul className="actions">
                            <li>
                              <time className="timeago">{item.moduleName}</time>
                            </li>
                            <li className="tauthor">
                              <a href="#" target="_blank" className="get">
                                Sky
                              </a>
                            </li>
                            <li>
                              <a>+收藏</a>
                            </li>
                            <li>
                              <span className="timeago">{item.summary}</span>
                            </li>
                            <li>
                              <span
                                className="redux-btn-del"
                                onClick={() => del(item.id)}
                              >
                                Delete
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <QueueAnim delay="500" type="bottom">
          <div key="123" className="redux-btn-add" onClick={() => add(item)}>
            Add
          </div>
          <div key="234">this is nosense message</div>
        </QueueAnim>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { add, del })(Home);
