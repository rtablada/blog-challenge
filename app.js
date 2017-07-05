const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const uuid = require('uuid/v4');
const cors = require('koa-cors');
const _ = require('lodash');

function initData() {
  const data = {
    title: 'My First Post',
    body: 'Node is omakase',
  };

  return JSON.stringify(data);
}

const PostsController = {
  async index(ctx) {
    let posts = ctx.cookies.get('posts');
    if (!posts) {
      posts = initData();

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
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening');
});
