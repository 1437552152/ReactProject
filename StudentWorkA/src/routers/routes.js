import { Route,Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home';
import History from '../pages/history';
import Base from './base'
const match = '';
const Router = () => {
    return (
      <div>
        <Base>
         <Redirect from="/" to="/Home" exact />
          <Route exact path={`${match}/Home`} component={Home} />
          <Route exact path={`${match}/History`} component={History} />
        </Base>
      </div>
    );
  };
  
  export default Router;