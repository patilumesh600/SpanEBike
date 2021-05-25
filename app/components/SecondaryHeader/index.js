/**
 *
 * SecondaryHeader
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';

function SecondaryHeader() {
  return (
    <RBS.Navbar bg="success" variant="light" fixed="top">
      <RBS.Nav md={{ span: 9, offset: 3 }}>
        <RBS.NavDropdown
          title="Login / Signup"
          id="collasible-nav-dropdown"
          menuAlign="left"
        >
          <RBS.NavDropdown.Item href="#action/3.1">Action</RBS.NavDropdown.Item>
          <RBS.NavDropdown.Item href="#action/3.2">
            Another action
          </RBS.NavDropdown.Item>
          <RBS.NavDropdown.Item href="#action/3.3">
            Something
          </RBS.NavDropdown.Item>
          <RBS.NavDropdown.Divider />
          <RBS.NavDropdown.Item href="#action/3.4">
            Separated link
          </RBS.NavDropdown.Item>
        </RBS.NavDropdown>
      </RBS.Nav>
    </RBS.Navbar>
  );
}

SecondaryHeader.propTypes = {};

export default SecondaryHeader;
