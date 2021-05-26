/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * UserLogin
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserLogin() {
  return (
    <div id="divLogin">
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
            Login
          </div>
          <hr />
          <RBS.Form.Group controlId="formBasicEmail">
            <RBS.Form.Label>Email address or phone number</RBS.Form.Label>
            {/* <RBS.Form.Control type="email" placeholder="Email address or phone number" /> */}
            <RBS.InputGroup className="mb-2">
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text>
                  <FontAwesomeIcon icon={faAt} />
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </RBS.InputGroup>
          </RBS.Form.Group>
          <RBS.Form.Group controlId="formBasicPassword">
            <RBS.Form.Label>Password</RBS.Form.Label>
            <RBS.InputGroup className="mb-2">
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text>
                  <FontAwesomeIcon icon={faKey} />
                </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                id="inlineFormInputGroup"
                type="password"
                placeholder="Password"
              />
            </RBS.InputGroup>
          </RBS.Form.Group>
          <RBS.Form.Group controlId="formBasicCheckbox">
            <RBS.Form.Check type="checkbox" label="Remember me" />
          </RBS.Form.Group>
          <RBS.Button variant="success" block size="md" type="button" ali>
            Login
          </RBS.Button>
          <br />
          <RBS.Button
            style={{
              width: '49.5%',
              display: 'inline',
              marginRight: '1%',
              marginTop: '0px',
            }}
            variant="primary"
            type="button"
            block
            ali
          >
            &nbsp;Continue with <FontAwesomeIcon icon={faFacebook} />
          </RBS.Button>
          <RBS.Button
            style={{ width: '49.5%', display: 'inline', marginTop: '0px' }}
            variant="danger"
            type="button"
            block
            ali
          >
            &nbsp;Continue with <FontAwesomeIcon icon={faGoogle} />
          </RBS.Button>
          <RBS.Form.Group className="text-center">
            <RBS.Form.Label>OR</RBS.Form.Label>
            <br />
            <RBS.Form.Label>
              New user ?{' '}
              <a href="javascript:;" onClick={() => showHideLogin()}>
                {' '}
                Register here
              </a>
            </RBS.Form.Label>{' '}
            &nbsp;&nbsp;&nbsp;
            <RBS.Form.Label>
              Forgot Password ?{' '}
              <a href="javascript:;" onClick={() => showHideFPassword()}>
                {' '}
                Click here
              </a>
            </RBS.Form.Label>
          </RBS.Form.Group>
        </RBS.Form>
      </RBS.Col>
    </div>
  );
}

UserLogin.propTypes = {};

function showHideLogin() {
  document.getElementById('divLogin').style.display = 'none';
  document.getElementById('divRegister').style.display = 'block';
}

function showHideFPassword() {
  document.getElementById('divLogin').style.display = 'none';
  document.getElementById('divForgotPasswod').style.display = 'block';
}

export default UserLogin;
