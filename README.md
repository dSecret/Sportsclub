# SportsClub@NITD

> Official website of SportsClub of National Institute of technology.

## Local Setup  

``` bash
#clone the project
git clone 'https://bitbucket.org/DRazor/sportsclub'
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
``` bash
#site
http://localhost:8080
#webpack bundle-analyzer
http://localhost:8888
```

```bash
#/src/helpers
##firebaseConfig.js
It contains the web config obtained after setting up a firebase project.
It is used to connect our SPA with our Firebase project.

##authfunc.js
It contains some custom functions over firebase.auth() services.
We can import these functions in other modules as per as it is required.


```



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
