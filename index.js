/**
 * @file : file
 * @author: xumingzhi
 * @date: 2019-04-07 21:54:14
 */
const path = require('path');
const loaderUtils = require('loader-utils');
function loader(content, callback) {
    const loaderContext = this;
    const options = loaderUtils.getOptions(loaderContext) || {};
    const isProduction = options.productionMode || this.minimize || process.env.NODE_ENV === 'production';
    const {
        rootContext = process.cwd(),
        resourcePath
    } = this;
    const shortFilePath = path.relative(rootContext, resourcePath).replace(/^(\.\.[\\\/])+/, '');
    const hotId = shortFilePath;
    if (!isProduction) {
        content += `
            var hotApi = require('san-hot-reload-api');
            hotApi.install(require('san'), false);
            if (!hotApi.compatible) {
                throw new Error('san-hot-reload-api is not compatible with the version of Vue you are using.');
            }
            module.hot.accept();
            var id = '${hotId}';
            var moduleDefault = module.exports ? module.exports.default : module.__proto__.exports.default;
            if (!module.hot.data) {
                hotApi.createRecord(id, moduleDefault);
            } else {
                hotApi.reload(id, moduleDefault);
            }
        `;
    }
    callback(null, content);
}
module.exports = function (content) {
    const callback = this.async();
    loader.call(this, content, callback);
};