# Front End Challenge

The API from this repository can found at `https://quiet-fortress-51912.herokuapp.com/`.
If you'd like to run the app locally, make sure you are using Node >7 for async/await support (it is tested on 7.10.0).

## Challenge

Your task is to create a small blog application (routed or not) using this API and front end technologies.
You may use whatever build-tools, frameworks, etc that you'd like for JS.
For styling please do not use CSS libraries or frameworks (Bootstrap, Bulma, Foundation, etc): you may use pre-processors like SASS, LESS, or PostCSS, and you may use fonts like Google Fonts or Font Awesome.

Your front end application should allow a user to:

1. See all posts by retrieving all posts from the API
2. Add a new post and see it after posting (without a window refresh)

## API Information

* `GET` - `/posts`
  - Returns a JSON array of all posts in the datastore
* `POST` - `/posts`
  - Takes in a JSON payload and stores it within the `posts` datastore
  - Return the incoming JSON palyload plus the `id` assigned to the post from the server
* `GET` - `/reset`
  - Reset the datastore to only have the starting post
  - Returns the new JSON array of posts


The post existing on the server has two properties: `title` and `body` and your posts should do the same.
