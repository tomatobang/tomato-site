'use strict';
const data = {
  list: [{
    title: `Egg + React 服务端渲染骨架`,
    summary: '基于Egg + React + Webpack3/Webpack2 多页面和单页面服务器渲染同构工程骨架项目',
    hits: 550,
    url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
  }, {
    id: 1,
    title: '前端工程化解决方案easywebpack',
    summary: 'programming instead of configuration, webpack is so easy',
    hits: 550,
    url: 'https://github.com/hubcarl/easywebpack'
  }, {
    id: 2,
    title: '前端工程化解决方案脚手架easywebpack-cli',
    summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
    hits: 278,
    url: 'https://github.com/hubcarl/easywebpack-cli'
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