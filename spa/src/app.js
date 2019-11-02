import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CompaniesPage from './components/CompaniesPage';
import HomePage from './components/HomePage';

import { ROUTE_COMPANIES, ROUTE_HOME } from './constants/routeConstants';


export default function App() {

    return (
    <Router>
      <div id="wrapper" className="cma-page">
        <Header />
        <div className="content-page ml-0">
          <div className="content">
            <div className="container-fluid mt-3">
              <Switch>
                <Route exact path={ROUTE_HOME} component={HomePage} />
                <Route exact path={ROUTE_COMPANIES} component={CompaniesPage} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
    );

}
