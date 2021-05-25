/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Registration
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import {
  faArrowCircleLeft,
  faUser,
  faAt,
  faPhone,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Registration() {
  return (
    <div id="divRegister" style={{ display: 'none' }}>
      {' '}
      <RBS.Col md={12} id="frmLogin">
        <RBS.Form>
          <div
            style={{
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            Register
          </div>
          <RBS.Form.Group controlId="formBasicName">
            <RBS.InputGroup className="mb-2">
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text>
                  <FontAwesomeIcon icon={faUser} />
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl id="txtUserName" placeholder="Name" />
            </RBS.InputGroup>
          </RBS.Form.Group>
          <RBS.Form.Group controlId="formBasicEmail">
            <RBS.InputGroup className="mb-2">
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text>
                  <FontAwesomeIcon icon={faAt} />
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                id="txtEmailAddress"
                placeholder="Email Address"
              />
            </RBS.InputGroup>
          </RBS.Form.Group>
          <RBS.Form.Group controlId="formBasicPhone">
            <RBS.InputGroup className="mb-2">
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text>
                  <FontAwesomeIcon icon={faPhone} />
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                id="txtPhoneNumber"
                placeholder="Mobile Number"
              />
            </RBS.InputGroup>
          </RBS.Form.Group>
          <RBS.Form.Group controlId="formBasicPhone">
            <RBS.InputGroup className="mb-2">
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text>
                  <FontAwesomeIcon icon={faKey} />
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl id="txtPassword" placeholder="Password" />
            </RBS.InputGroup>
          </RBS.Form.Group>
          <RBS.Form.Label>
            <input type="checkbox" id="chkTNC" name="TNC" value="" />
            &nbsp;&nbsp; I agree with
            <a href="javascript:;"> User Agreement</a> &{' '}
            <a href="javascript:;"> Privacy policy</a>
          </RBS.Form.Label>{' '}
          <br />
          <RBS.Button variant="warning" block type="button" ali>
            Sign up
          </RBS.Button>
          <br />
          <RBS.Form.Group className="text-center">
            <RBS.Form.Label>
              <a href="javascript:;" onClick={() => showHideRegister()}>
                {' '}
                <FontAwesomeIcon icon={faArrowCircleLeft} />
                &nbsp;&nbsp; Back to Login
              </a>
            </RBS.Form.Label>{' '}
          </RBS.Form.Group>
        </RBS.Form>
      </RBS.Col>
    </div>
  );
}

Registration.propTypes = {};

function showHideRegister() {
  document.getElementById('divRegister').style.display = 'none';
  document.getElementById('divLogin').style.display = 'block';
}

export default Registration;
