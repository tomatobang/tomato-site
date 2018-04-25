'use strict';
const data = {
  list: [{
    title: `好玩.`,
    summary: '管理你工作&生活的最佳工具.',
    hits: 550,
    url: 'https://www.tomatobang.com'
  }, {
    id: 1,
    title: '语音记录',
    summary: '让你迷上自己的声音.',
    hits: 550,
    url: 'https://www.tomatobang.com'
  }, {
    id: 2,
    title: '支持多端同步',
    summary: 'PC端与 App 端神奇同步.',
    hits: 278,
    url: 'https://www.tomatobang.com'
  }]
};

let id = 1;

data.list = data.list.concat(data.list);
data.list = data.list.concat(data.list);

data.list.forEach(item => {
  item.id = id++;
});


const total = data.list.length;
exports.getPage = (pageIndex = 1, pageSize = 10)=> {
  const start = (pageIndex - 1) * pageSize;
  const end = start + Number(pageSize);
  return { list: data.list.slice(start, end), total };
};

exports.getDetail = id => {
  return data.list.filter(item => {
    return item.id === id;
  }).slice(0, 1);
};