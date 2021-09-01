interface IRuntime<T> {
  loadModule: (module: { default: T } | T) => void;
}

function loadRuntimeModules(runtime: IRuntime<Function>) {
  runtime.loadModule(
    require('/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/node_modules/_build-plugin-app-core@1.4.8@build-plugin-app-core/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/node_modules/_build-plugin-ice-router@1.9.7@build-plugin-ice-router/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/node_modules/_build-plugin-ice-logger@1.7.4@build-plugin-ice-logger/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/node_modules/_build-plugin-ice-store@1.9.7@build-plugin-ice-store/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/node_modules/_build-plugin-ice-auth@1.7.4@build-plugin-ice-auth/lib/runtime.js')
  );
}

export default loadRuntimeModules;
