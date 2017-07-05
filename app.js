const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const uuid = require('uuid/v4');
const _ = require('lodash');

const PostsController = {
  async index(ctx) {
    let posts = ctx.cookies.get('posts');
    if (!posts) {
      posts = '{}';

      ctx.cookies.set('posts', posts);
    }

    ctx.body = _.values(JSON.parse(posts));
  },

  async store(ctx) {
    const posts = JSON.parse(ctx.cookies.get('posts') || '{}');
    const id = uuid();
    const newPost = Object.assign({ id }, ctx.request.body);

    posts[newPost.id] = newPost;
    ctx.cookies.set('posts', JSON.stringify(posts));


    ctx.body = newPost;
  },
};

router
  .get('/posts', PostsController.index)
  .post('/posts', PostsController.store);


app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('App is listening');
});
