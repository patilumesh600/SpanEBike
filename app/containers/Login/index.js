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
import UserLogin from 'components/UserLogin';
import Registration from 'components/Registration';
import ForgotPassword from 'components/ForgotPassword';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import bgImages from '../../images/bgImages/bg-electric.jpg';

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
            md={{ span: 4, offset: 1 }}
            style={{
              opacity: '0.96',
              background: '#fff',
              color: '#000',
              marginTop: '5%',
              boxShadow: '0px 0px 10px #5d5d5d',
            }}
          >
            <UserLogin />
            <Registration />
            <ForgotPassword />
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
