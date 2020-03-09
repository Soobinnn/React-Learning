import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import PageNav from './pagenav.jsx';
import PageList from './pageList.jsx';
import './pageCss.css'

const App = () => (
  <Router>
    <React.Fragment>
        <div>
          <PageNav />
          <PageList />
        </div>
      </React.Fragment>
  </Router>
);

export default App;
