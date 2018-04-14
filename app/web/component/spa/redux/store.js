import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'component/spa/redux/reducers';
export default createStore(reducers, {
  list: [
    {
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
});
