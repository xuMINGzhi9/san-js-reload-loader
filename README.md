# san-js-reload-loader
这是一个webpack的loader，唯一的功能就是san的.js文件的组件的热重载
## Install

```js
  npm install san-js-reload-loader
```
## Usage

```js
@file: webpack.config.js

// make sure the process.env.NODE_ENV is 'production' or 'development'
 {
    test: /src\/components.*\.js$/,
    use: [
        {
            loader: 'san-js-reload-loader'
        }
    ]
},
```
## Thanks for
[san-webpack-loader](https://github.com/jiangjiu/san-webpack-loader)
## License
MIT