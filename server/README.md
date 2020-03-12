
## Getting started
There's a few things you need to get started on to get this to work.

### 1. Installing minimum deps
Make sure you have `node` installed, with a version greater than `7.0.0`. We highly recommend [`nvm`](https://github.com/creationix/nvm), or just installing the latest version of `node` with `brew install node` on macOS.

Once you have a good `node` installed, run `npm install` in this repo to get your dependencies.

### 2. Serving your app
By default, you can run `npm start` to run your app, serving the files from `/public`. You can, however, change this to whatever you want! Just make sure you document the changes somewhere so we can run this.

### 3. Running the api server
We have provided a simple api server for you. You can run `npm run api-server` to start it. Read the [spec](./spec/api-endpoints.md) for more details on the api.

### 4. Read the spec
There's a pretty fleshed out spec in the `./spec` directory. Checkout the [design specs here](./spec/designs/detailed-design-specs.md) to understand what you're building!

## What you can use to build
You can use literally _anything_ that can be served on the web. You should use what you're most comfortable with, no matter what (even if you heard that we use React). **We want you to use the tools you know, and we want to see you at your best and most productive.** 

Secondly, don't worry much about setting up build tools—use something simple and fast to spin up:
* If you're using Ember, it's fast to spin up something with [`ember-cli`](https://ember-cli.com/)
* If you're using Angular 1.x, you can use [this yeoman generator](https://github.com/yeoman/generator-angular) to spin up a scaffold
* If you're using Angular 2+, you can use [Angular CLI](https://cli.angular.io/) to create a new app scaffolding
* If you're using React, it's easy to use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to start the project
* If you're using Vue, [`vue-cli`](https://github.com/vuejs/vue-cli) will be a fast way to get started.
* For anything else, use your favorite generators or templates!
