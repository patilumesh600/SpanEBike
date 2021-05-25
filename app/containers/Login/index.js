/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as RBS from 'react-bootstrap';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

import './style.css';
import bgImages from '../../images/bgImages/3228.jpg';

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <div
      style={{
        minHeight: '635px',
        backgroundImage: `url(${bgImages})`,
        backgroundSize: 'cover',
      }}
    >
      <RBS.Container fluid>
        <RBS.Row className="align-items-center">
          <RBS.Col
            md={{ span: 4, offset: 4 }}
            style={{
              minHeight: '500px',
              background: '#000',
              color: '#fff',
              marginTop: '2%',
              boxShadow: '0px 0px 10px #5d5d5d',
            }}
          >
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
                <RBS.Button variant="warning" block type="button" ali>
                  Login
                </RBS.Button>
                <br />
                <RBS.Form.Group className="text-center">
                  <RBS.Form.Label>OR</RBS.Form.Label>
                  <br />

                  <RBS.Form.Label>
                    New user ? <a href="/"> Register here</a>
                  </RBS.Form.Label>
                  <br />

                  <RBS.Form.Label>
                    Forgot Password ? <a href="/"> Click here</a>
                  </RBS.Form.Label>
                </RBS.Form.Group>
              </RBS.Form>
            </RBS.Col>

            {/* <RBS.Col md={12} id="frmRegister" style={{ display: 'none' }}>
                 <Register />
               </RBS.Col>
 
               <RBS.Col md={12} id="frmForgotPwd">
                 <ForgotPwd />
               </RBS.Col> */}
          </RBS.Col>
        </RBS.Row>
      </RBS.Container>
    </div>
  );
}

Login.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
