import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="row mt-5 mb-5">
        <div className="col-lg-12">
          <p className="text-center tm-text-gray tm-copyright-text mb-0">
            Copyright &copy;
            <span className="tm-current-year">2019 - 2021</span> Dream Client |
            Design:{' '}
            <a
              href="http://templatemo.com/tm-517-timeless"
              className="tm-text-white"
            >
              Timeless
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export { Footer };
