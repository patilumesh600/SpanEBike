/**
 *
 * PrimaryHeader
 *
 */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import {
  faSearch,
  faChargingStation,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopularCity from '../../json/PopularCity.json';
import './style.css';

function PrimaryHeader() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="pheader">
      <RBS.Navbar md={2} bg="success" variant="light">
        <RBS.Navbar.Brand
          href="#home"
          style={{ fontSize: '30px', color: '#fff' }}
        >
          <div id="main">
            <FontAwesomeIcon
              id="openbtn"
              onClick={() => openNav()}
              icon={faBars}
            />{' '}
            <span>
              <b>EVA</b> <FontAwesomeIcon icon={faChargingStation} />{' '}
            </span>
          </div>
        </RBS.Navbar.Brand>
        <RBS.Nav md={8} className="mr-auto col-md-8">
          <RBS.Form inline className="col-md-12">
            <RBS.Col md={{ span: 10, offset: 1 }}>
              <RBS.InputGroup className="mb-7">
                <RBS.FormControl
                  placeholder="Search Electric vehicle by Name , City , Company , Type."
                  aria-label="Search Electric vehicle by Name , City , Company , Type."
                  aria-describedby="basic-addon2"
                />
                <RBS.InputGroup.Append>
                  <RBS.Button variant="dark">
                    <FontAwesomeIcon icon={faSearch} />
                  </RBS.Button>
                </RBS.InputGroup.Append>
              </RBS.InputGroup>
            </RBS.Col>
          </RBS.Form>
        </RBS.Nav>
        <RBS.Button md={1} onClick={() => setLgShow(true)}>
          Select City &nbsp;
        </RBS.Button>
        &nbsp; &nbsp;
        <RBS.Nav md={1}>
          <RBS.NavDropdown
            title="Login / Signup"
            id="collasible-nav-dropdown"
            menuAlign="left"
          >
            <RBS.NavDropdown.Item href="#action/3.1">
              Action
            </RBS.NavDropdown.Item>
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
      <RBS.Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{ marginTop: '60px' }}
      >
        <RBS.Modal.Header closeButton>
          <RBS.Modal.Title id="example-modal-sizes-title-lg" className="center">
            Please Tell Us Your Location
            <br />
            <small style={{ fontSize: '14px', color: '#82888b' }}>
              This allows us to provide relevant content for you.
            </small>
          </RBS.Modal.Title>
        </RBS.Modal.Header>
        <RBS.Modal.Body>
          <div className="location-popup-popular-cities-wrapper">
            <p className="popular-cities__title  center">Popular Cities</p>
            <ul className="popular-cities__list" style={{ listStyle: 'none' }}>
              {PopularCity.map(data => getPopularCity(data))}
            </ul>
          </div>
        </RBS.Modal.Body>
      </RBS.Modal>
    </div>
  );
}

PrimaryHeader.propTypes = {};

function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  // document.getElementById('main').style.marginLeft = '250px';
}

function getPopularCity(data) {
  return (
    <li
      data-cityid={data.ID}
      data-cityname={data.City}
      data-citymasking={data.City}
      className="popular-cities__list-item js-popularcity"
    >
      <div className="popular-cities-icon-wrapper">
        <img
          className="popular-cities__icon"
          height="50"
          width="88"
          src={data.LogoURL}
          alt={data.City}
          title={data.City}
        />
      </div>
      <span className="popular-cities__city-name">{data.City}</span>
    </li>
  );
}

export default PrimaryHeader;
