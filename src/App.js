import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import { Spin } from 'antd';

const DefaultLayout = React.lazy(() => import('layouts'));

const loading = (
  <div style={{
    height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
  }}
  >
    <Spin size="large" />
  </div>
);

const App = () => (
  <HashRouter>
    <React.Suspense fallback={loading}>
      <Switch>
        <Route
          path="/"
          name="Home"
          render={(props) => <DefaultLayout {...props} />}
        />
      </Switch>
    </React.Suspense>
  </HashRouter>
);

export default App;
