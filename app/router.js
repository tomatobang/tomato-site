
module.exports = app => {
  app.get('/',  app.controller.spa.spa.ssr);
  
  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('/app(/.+)?', app.controller.app.app.index);

  app.get('/spa(/.+)?', app.controller.spa.spa.ssr);
};
