# san-js-reload-loader
This is a webpack loader, the only function is the hot overload of components of san. JS files
## Install

```js
  npm install san-js-reload-loader
```
## Usage

```js
{
    test: /src\/components.*\.js$/,
    use: [
        {
            loader: 'san-js-reload-loader'
        }
    ]
}
```
## Demo
[san-js-reload-demo](https://github.com/xuMINGzhi9/san-js-reload-demo)
## Thanks for
[san-webpack-loader](https://github.com/jiangjiu/san-webpack-loader)
## License
MIT