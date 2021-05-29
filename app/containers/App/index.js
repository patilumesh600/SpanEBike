/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
// import * as RBS from 'react-bootstrap';
import Header from 'components/PrimaryHeader';
import Footer from 'components/PrimaryFooter';
import LandingPage from 'containers/LandingPage';
import SearchResult from 'containers/SearchResult';
import Login from 'containers/Login';
import ViewDetails from 'containers/ViewDetails';
import Sidebar from 'components/UserLeftMenu';
import GlobalStyle from '../../global-styles';

const ContentSec = styled.div`
  margin-bottom: 0%;
  margin-top: 5%;
`;

export default function App() {
  const standAlonePages = ['/login'];

  return (
    <div>
      {standAlonePages.indexOf(window.location.pathname.toLowerCase()) !==
      -1 ? null : (
          <Header />
        )}
      <Sidebar />
      <ContentSec
        style={{
          marginTop:
            standAlonePages.indexOf(window.location.pathname.toLowerCase()) !==
            -1
              ? '0'
              : '5%',
        }}
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search" component={SearchResult} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/viewdetails" component={ViewDetails} />
        </Switch>
      </ContentSec>
      {standAlonePages.indexOf(window.location.pathname.toLowerCase()) !==
      -1 ? null : (
          <Footer />
        )}
      {/* <RBS.Col xs={2} id="sidebar-wrapper">
        <Sidebar />
      </RBS.Col>
      <RBS.Col xs={10} id="page-content-wrapper">
        this is a test
      </RBS.Col> */}
      <GlobalStyle />
    </div>
  );
}
