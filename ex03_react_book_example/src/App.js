import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/User/LoginPage';
import PostPage from './pages/User/PostPage';
import RegisterPage from './pages/User/RegisterPage';
import WritePage from './pages/User/WritePage';
import PostListPage from './pages/User/PostListPage';

function App() {
  return (
    <>
      <Route component={PostListPage} path={['/@:username','/']} exact />
      <Route component={LoginPage} path="/login"/>
      <Route component={RegisterPage} path="/register"/>
      <Route component={WritePage} path="/write"/>
      <Route component={PostPage} path="/@:username/:postId"/>
    </>
  );
}

export default App;
