import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './IndexPage';
import NotFoundPage from './NotFoundPage';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}