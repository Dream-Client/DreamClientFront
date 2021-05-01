import React, { Component } from 'react';

import './Header.css';

class PageHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <header className="text-center tm-site-header">
            <div className="tm-site-logo"></div>
            <h1 className="pl-4 tm-site-title">Dream Client</h1>
          </header>
        </div>
      </div>
    );
  }
}

export { PageHeader };
