import * as React from 'react';

import store from '/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/src/pages/Solution/store';

import PageComponent from '/Users/clark/develop/scaffolds-for-speed-measure/fusion-pro-1.x/src/pages/Solution';

const PageComponentName = PageComponent;

const PageProvider = store.Provider;
const StoreWrapperedPage = (props) => {
  return (
    <PageProvider>
      <PageComponentName {...props} />
    </PageProvider>
  );
};
(StoreWrapperedPage as any).pageConfig =
  (PageComponentName as any).pageConfig || ({} as any);
(StoreWrapperedPage as any).getInitialProps = (
  PageComponentName as any
).getInitialProps;
export default StoreWrapperedPage;
export { store };
