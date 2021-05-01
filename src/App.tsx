import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const TestPage = React.lazy(() => import('./pages/TestPage'));

React.useLayoutEffect = () => {};

function App() {
  return (
    <HashRouter>
      <Switch>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={HomePage} />
          <Route path="/test" component={TestPage} />
          {/* <Route path="/first" exact component={FirstPage} />
        <Route component={NotFoundPage} /> */}
        </React.Suspense>
      </Switch>
    </HashRouter>
  );
}

export default App;
