import { IAppConfig } from './types';

function loadStaticModules(appConfig: IAppConfig) {
  require('/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/node_modules/_build-plugin-ice-request@1.7.8@build-plugin-ice-request/lib/runtime.js').default(
    { appConfig }
  );
}

export default loadStaticModules;
