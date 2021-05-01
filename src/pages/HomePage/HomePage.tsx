import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from './components/Header';
import { Messages } from './components/Messages';
import { Roadmap } from './components/Roadmap';
import { Footer } from '../../common/components/Footer';

import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <PageHeader></PageHeader>
      <Messages></Messages>
      <div className="row">
        <div className="col-lg-12">
          <header className="text-center tm-site-header">
            <h1 className="pl-4 tm-site-title">Roadmap</h1>
            <hr></hr>
          </header>
        </div>
      </div>
      <Roadmap></Roadmap>
      {/* <Link to="/test">Test</Link> */}
    </div>
  );
}

export default HomePage;
