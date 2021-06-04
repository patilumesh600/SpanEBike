/**
 *
 * MyProfile
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as RBS from 'react-bootstrap';
import {
  faEdit,
  faMars,
  faCalendar,
  faEnvelope,
  faMobile,
  faUser,
  faHeart,
  faCar,
  faComment,
  faKey,
  faGift,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMyProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import MyAccount from '../../components/MyAccount';
import ReferAndEarn from '../../components/ReferAndEarn';
import personaldetails from '../../json/myprofile.json';
import './profile.css';

export function MyProfile() {
  useInjectReducer({ key: 'myProfile', reducer });
  useInjectSaga({ key: 'myProfile', saga });

  return (
    <div id="divUserProfile">
      <RBS.Row>
        <RBS.Col>
          <RBS.Row>
            <RBS.Col
              md={3}
              style={{
                border: '1px solid #e1e1e1',
                background: ' RGB(212,230,217)',
                maxHeight: '300px',
              }}
            >
              <RBS.Row style={{ padding: '15px 0px', marginBottom: '5px' }}>
                <RBS.Col xs={12} md={12} style={{ textAlign: 'center' }}>
                  <RBS.Image
                    src={personaldetails.ImageURL}
                    roundedCircle
                    height="150"
                    width="150"
                  />
                </RBS.Col>
                <RBS.Col md={12} xs={12}>
                  <div
                    className="center"
                    style={{ fontSize: '32px', fontWeight: '600' }}
                  >
                    {personaldetails.Name}
                  </div>
                  <div className="center" style={{ color: 'green' }}>
                    {' '}
                    <FontAwesomeIcon icon={faMars} />
                    &nbsp;&nbsp;
                    {personaldetails.Gender}&nbsp;&nbsp;|{' '}
                    <FontAwesomeIcon icon={faCalendar} />
                    &nbsp;&nbsp;
                    {personaldetails.Age} Years
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;&nbsp;
                    {personaldetails.EmailAddress}
                    <br />
                    <FontAwesomeIcon icon={faMobile} />
                    &nbsp;&nbsp;
                    {personaldetails.MobileNumber}
                  </div>
                </RBS.Col>
              </RBS.Row>
            </RBS.Col>
            <RBS.Col md={9}>
              <RBS.Card className="profile-card">
                <RBS.Tabs defaultActiveKey="myaccount" id="profile-tab">
                  <RBS.Tab
                    eventKey="myaccount"
                    title={
                      <span>
                        <span className="hide-xs">My Account</span>{' '}
                        {<FontAwesomeIcon icon={faUser} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col>
                      <MyAccount />
                    </RBS.Col>
                  </RBS.Tab>
                  <RBS.Tab
                    eventKey="myreview"
                    title={
                      <span>
                        <span className="hide-xs">My Reviews</span>{' '}
                        {<FontAwesomeIcon icon={faComment} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab>
                  <RBS.Tab
                    eventKey="shortlisted"
                    title={
                      <span>
                        <span className="hide-xs">Shortlisted</span>{' '}
                        {<FontAwesomeIcon icon={faHeart} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab>
                  <RBS.Tab
                    eventKey="testrides"
                    title={
                      <span>
                        <span className="hide-xs">My Test Rides</span>{' '}
                        {<FontAwesomeIcon icon={faCar} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab>
                  <RBS.Tab
                    eventKey="changepassword"
                    title={
                      <span>
                        <span className="hide-xs">Change Password</span>{' '}
                        {<FontAwesomeIcon icon={faKey} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <FontAwesomeIcon icon={faEdit} />
                    </RBS.Col>
                  </RBS.Tab>
                  <RBS.Tab
                    eventKey="referandearn"
                    title={
                      <span>
                        <span className="hide-xs">Refer & Earn</span>{' '}
                        {<FontAwesomeIcon icon={faGift} />}
                      </span>
                    }
                    className="prof-tab"
                  >
                    <RBS.Col md={12}>
                      <ReferAndEarn />
                    </RBS.Col>
                  </RBS.Tab>
                </RBS.Tabs>
              </RBS.Card>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </div>
  );
}

MyProfile.propTypes = {
  // dispatch: PropTypes.func.equired,
};

const mapStateToProps = createStructuredSelector({
  myProfile: makeSelectMyProfile(),
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

export default compose(withConnect)(MyProfile);
