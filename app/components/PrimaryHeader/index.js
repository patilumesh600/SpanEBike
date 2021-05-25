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
import './style.css';

function PrimaryHeader() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="pheader">
      <RBS.Navbar bg="success" variant="light" position="fixed">
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
        <RBS.Nav className="mr-auto col-md-8">
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
        <RBS.Button onClick={() => setLgShow(true)}>
          Select City &nbsp;
        </RBS.Button>
        &nbsp; &nbsp;
        <RBS.Nav>
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
              <li
                data-cityid="1"
                data-cityname="Mumbai"
                data-citymasking="mumbai"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/ergk3sa_1483598.jpg"
                    alt="Mumbai"
                    title="Mumbai"
                  />
                </div>
                <span className="popular-cities__city-name">Mumbai</span>
              </li>
              <li
                data-cityid="10"
                data-cityname="Delhi"
                data-citymasking="delhi"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/1jnk3sa_1483607.jpg"
                    alt="Delhi"
                    title="Delhi"
                  />
                </div>
                <span className="popular-cities__city-name">Delhi</span>
              </li>
              <li
                data-cityid="2"
                data-cityname="Bangalore"
                data-citymasking="bangalore"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/k88k3sa_1483601.jpg"
                    alt="Bangalore"
                    title="Bangalore"
                  />
                </div>
                <span className="popular-cities__city-name">Bangalore</span>
              </li>
              <li
                data-cityid="176"
                data-cityname="Chennai"
                data-citymasking="chennai"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/zhlk3sa_1483604.jpg"
                    alt="Chennai"
                    title="Chennai"
                  />
                </div>
                <span className="popular-cities__city-name">Chennai</span>
              </li>
              <li
                data-cityid="105"
                data-cityname="Hyderabad"
                data-citymasking="hyderabad"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/sj7k3sa_1483605.jpg"
                    alt="Hyderabad"
                    title="Hyderabad"
                  />
                </div>
                <span className="popular-cities__city-name">Hyderabad</span>
              </li>
              <li
                data-cityid="198"
                data-cityname="Kolkata"
                data-citymasking="kolkata"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/9omk3sa_1483606.jpg"
                    alt="Kolkata"
                    title="Kolkata"
                  />
                </div>
                <span className="popular-cities__city-name">Kolkata</span>
              </li>
              <li
                data-cityid="12"
                data-cityname="Pune"
                data-citymasking="pune"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/53hk3sa_1483599.jpg"
                    alt="Pune"
                    title="Pune"
                  />
                </div>
                <span className="popular-cities__city-name">Pune</span>
              </li>
              <li
                data-cityid="128"
                data-cityname="Ahmedabad"
                data-citymasking="ahmedabad"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/z2fk3sa_1483597.jpg"
                    alt="Ahmedabad"
                    title="Ahmedabad"
                  />
                </div>
                <span className="popular-cities__city-name">Ahmedabad</span>
              </li>
              <li
                data-cityid="244"
                data-cityname="Chandigarh"
                data-citymasking="chandigarh"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/u5jk3sa_1483602.jpg"
                    alt="Chandigarh"
                    title="Chandigarh"
                  />
                </div>
                <span className="popular-cities__city-name">Chandigarh</span>
              </li>
              <li
                data-cityid="13"
                data-cityname="Navi Mumbai"
                data-citymasking="navi-mumbai"
                className="popular-cities__list-item js-popularcity"
              >
                <div className="popular-cities-icon-wrapper">
                  <img
                    className="popular-cities__icon"
                    height="50"
                    width="88"
                    src="https://imgd.aeplcdn.com/0x0/n/o0ik3sa_1483600.jpg"
                    alt="Navi Mumbai"
                    title="Navi Mumbai"
                  />
                </div>
                <span className="popular-cities__city-name">Navi Mumbai</span>
              </li>
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

export default PrimaryHeader;
