import React, { Component } from 'react';
import { Message } from './Message';

class Messages extends Component {
  render() {
    return (
      <div className="container tm-container-2">
        <div className="row">
          <div className="col-lg-12">
            <Message></Message>
          </div>
        </div>
      </div>
    );
  }
}

export { Messages };
