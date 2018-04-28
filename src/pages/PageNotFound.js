import React from 'react';

import './PageNotFound.css';

class PageNotFound extends React.Component {

  render() {
    return (
      <div id="page-not-found">
        <h1>You ran into a 404!</h1>
        <h2>The reqested page does not exist.</h2>
      </div>
    );
  }
}

export default PageNotFound;