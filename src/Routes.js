import React from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const Routes = (props) => {
  return(
    <Layout>
      <Switch>
        <Route exact patch ="/" component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;
