import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { Footer } from './common/components/Footer';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const TestPage = React.lazy(() => import('./pages/TestPage'));

React.useLayoutEffect = () => {};

function App() {
  return (
    <div className="container">
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
      <div className="container">
        <hr></hr>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
