# Chat Application using Angular 8

This project also includes corresponding server project. Run following steps for starting localhost

- If node is not installed, then go to [downloads](https://nodejs.org/en/download/) and install
- If angular is not installed, then open command prompt window and run ```npm install -g @angular/cli```

1. Extract _dd_takeaway_angular.zip_ (this containes client and server)
2. If server needs to be extracted separately, then unzip _Frontend-Interview-Project-master.zip_
3. Open command prompt and go to  __./chat-application__
4. Run ```npm install``` _(this will also install server project dependencies)_
    a. If _node_modules_ is not created under __./chat-application/server/__ then run ```npm install``` separately inside __./chat-application/server/__
5. Open command prompt and go to __./chat-application/__ and run ```npm run start-client``` _(execute ```npm run start-client:prod``` to run client in production mode)_
    a. If browser window does not opens automatically after starting client then hit [http://localhost:4201](http://localhost:4201) on browser
6. In separate window of command prompt go to __./chat-application/__ and execute ```npm run start-server``` to start server
