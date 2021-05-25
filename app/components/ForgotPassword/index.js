/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * ForgotPassword
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ForgotPassword() {
  return (
    <div id="divForgotPasswod" style={{ display: 'none' }}>
      {' '}
      <RBS.Col md={12} id="frmpassword">
        <RBS.Form>
          <div
            style={{
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            Forgot Password
          </div>
          <br />
          <small style={{ textAlign: 'center' }}>
            We will send a recovery link on your registered email
          </small>
          <br />
          <RBS.FormControl
            id="inlineFormInputGroup"
            placeholder="Email or Phone"
          />
          <br />
          <RBS.Button variant="warning" block size="md" type="button" ali>
            Send
          </RBS.Button>
          <br />
          <RBS.Form.Group className="text-center">
            <RBS.Form.Label>
              <a href="javascript:;" onClick={() => showHideForgotPassword()}>
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

ForgotPassword.propTypes = {};

function showHideForgotPassword() {
  document.getElementById('divForgotPasswod').style.display = 'none';
  document.getElementById('divLogin').style.display = 'block';
}

export default ForgotPassword;
