module.exports = app => {
  return class SPAController extends app.Controller {
    async ssr() {
      const { ctx } = this;
      console.log('ctx.url', ctx.url);
      let url = ctx.url;
      await ctx.render('spa/ssr.js', { url: url });
    }
  };
};
