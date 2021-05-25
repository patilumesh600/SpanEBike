/**
 *
 * UserLeftMenu
 *
 */

import React from 'react';
import {
  faTimes,
  faMotorcycle,
  faCar,
  faCarBattery,
  faChargingStation,
  faNewspaper,
  faUser,
  faHome,
  faCalculator,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './leftmenu.css';

function UserLeftMenu() {
  return (
    <div id="mySidebar" className="sidebar">
      <a href="/" className="closebtn" onClick={() => closeNav()}>
        <FontAwesomeIcon icon={faTimes} />{' '}
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faHome} />
        &nbsp;&nbsp;Home
      </a>
      <a href="/Search">
        <FontAwesomeIcon icon={faMotorcycle} />
        &nbsp;&nbsp;Electric Bikes
      </a>
      <a href="/Search">
        <FontAwesomeIcon icon={faCar} />
        &nbsp;&nbsp;Electric Cars
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faChargingStation} /> &nbsp;&nbsp; Charging
        Station
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faCarBattery} /> &nbsp;&nbsp;Service Center
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faNewspaper} /> &nbsp;&nbsp;News , Video & Tips
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faComment} /> &nbsp;&nbsp;Expert Reviews
      </a>
      <a href="/">
        <FontAwesomeIcon icon={faCalculator} /> &nbsp;&nbsp;EMI Calculators
      </a>
      <a href="/login">
        <FontAwesomeIcon icon={faUser} /> &nbsp;&nbsp;Login
      </a>
    </div>
  );
}

UserLeftMenu.propTypes = {};

function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
}

export default UserLeftMenu;
