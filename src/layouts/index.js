import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Home from 'pages/Home';

const DefaultLayout = React.memo((props) => {

  return (
    <>
      <Home />
    </>
  );
});

export default withRouter(DefaultLayout);
