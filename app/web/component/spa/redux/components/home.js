import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, del} from 'component/spa/redux/actions';
import {Carousel} from 'antd';
import Banner from './Banner';

import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
const TweenOneGroup = TweenOne.TweenOneGroup;

class Home extends Component {
  render() {
    const {add, del, list} = this.props;
    const id = list.length + 1;
    const item = {
      id,
      title: `Egg+React 服务端渲染骨架-${id}`,
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染骨架项目',
      hits: 550 + id,
      url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
    };
    return (
      <div className="redux-nav-item">
        <Banner isMobile="false" />
        <div className="container">
          <Carousel horizontal="true" className="tomatobang-carousel">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
          <TweenOneGroup>
            <div key="0">demo</div>
          </TweenOneGroup>
          <div className="row row-offcanvas row-offcanvas-right">
            <div className="col-xs-12 col-sm-9">
              <ul className="smart-artiles" id="articleList">
                {list
                  .map(function (item) {
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
                                <span className="redux-btn-del" onClick={() => del(item.id)}>
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
          <div key="234" >this is nosense message</div>
        </QueueAnim>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {list: state.list};
};

export default connect(mapStateToProps, {add, del})(Home);
