import { Route,Redirect } from 'react-router-dom';
import React from 'react';
import Listrecord from '../pages/listrecord';
import Shopcart from '../pages/shopcart';
import Base from './base'
const match = '';
const Router = () => {
    return (
      <div>
        <Base>
         <Redirect from="/" to="/Listrecord" exact />
          <Route exact path={`${match}/Listrecord`} component={Listrecord} />
          <Route exact path={`${match}/Shopcart`} component={Shopcart} />
        </Base>
      </div>
    );
  };
  
  export default Router;