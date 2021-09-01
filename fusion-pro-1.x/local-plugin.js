const chalk = require('chalk');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

module.exports = ({ onGetWebpackConfig, context, onHook }) => {
  const { command } = context;
  onGetWebpackConfig((config) => {
    config.plugin('speed-measure-webpack-plugin').use(SpeedMeasurePlugin);
  });
  let startTime = 0;
   onHook(`before.${command}.run`, () => {
     console.log('before start');
     startTime = Date.now();
   });
   onHook(`after.${command}.compile`, () => {
    console.log(chalk.greenBright(`webpack 耗时：${Date.now() - startTime} ms`));
   });
}