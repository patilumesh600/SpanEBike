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
import {
  Col,
  Row,
  Card,
  CardDeck,
  Image,
  Tab,
  Badge,
  Button,
  Tabs,
  Accordion,
} from 'react-bootstrap';
import {
  faKey,
  faMars,
  faCalendar,
  faEnvelope,
  faMobile,
  faUser,
  faHeart,
  faCar,
  faComment,
  faEye,
  faGift,
  faStar,
  faMotorcycle,
  faTrash,
  faCalendarTimes,
  faClock,
  faMeh,
  faFrown,
  faSmile,
  faAngry,
  faGrinHearts,
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
import ChangePassword from '../../components/ChangePassword';
import BookTestRide from '../../components/BookTestRide';
// import MyElectricVehicle from '../../components/MyElectricVehicle';
import personaldetails from '../../json/myprofile.json';
import './profile.css';

export function MyProfile() {
  useInjectReducer({ key: 'myProfile', reducer });
  useInjectSaga({ key: 'myProfile', saga });

  return (
    <div id="divUserProfile">
      <Row className="mrg-0">
        <Col
          md={3}
          style={{
            border: '1px solid #e1e1e1',
            backgroundColor: '#01baef',
            backgroundImage: 'linear-gradient(315deg, #01baef 0%, #20bf55 74%)',
            minHeight: '400px',
          }}
        >
          <Row>
            <Col xs={12} md={12} className="center">
              <Image
                src={personaldetails.ImageURL}
                roundedCircle
                height="125"
                width="125"
                style={{ marginTop: '10px' }}
              />
            </Col>
            <Col md={12} xs={12} className="pad-0">
              <div
                className="center"
                style={{
                  fontSize: '32px',
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                {personaldetails.Name}
              </div>
              <div className="center" style={{ color: 'white' }}>
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
              <br />
              <div className="ngp-header txt-c clr step6 center">
                <span id="garageList">Add Your Vehicles</span>
                <br />
                <span>Tell us about the vehicles you own</span>
              </div>
              <Col md={12} className="mrg-5">
                <Button variant="success" type="button" block>
                  {' '}
                  Add my Electric Car <FontAwesomeIcon icon={faCar} />
                </Button>
              </Col>
              <Col md={12} className="mrg-5">
                <Button variant="warning" type="button" block>
                  {' '}
                  Add my Electric Bike <FontAwesomeIcon icon={faMotorcycle} />
                </Button>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col md={9} className="pad-0">
          <Card className="profile-card">
            <Tabs defaultActiveKey="myaccount" id="profile-tab">
              <Tab
                eventKey="myaccount"
                title={
                  <span>
                    <span className="hide-xs">My Account</span>{' '}
                    {<FontAwesomeIcon icon={faUser} />}
                  </span>
                }
                className="prof-tab"
              >
                <Col>
                  <MyAccount />
                </Col>
              </Tab>
              <Tab
                eventKey="myreview"
                title={
                  <span>
                    <span className="hide-xs">My Reviews & Garage</span>{' '}
                    {<FontAwesomeIcon icon={faComment} />}
                  </span>
                }
                className="prof-tab"
              >
                <Col md={12}>
                  {personaldetails.MyReviews.map(data => bindReviews(data))}
                </Col>
              </Tab>
              <Tab
                eventKey="shortlisted"
                title={
                  <span>
                    <span className="hide-xs">Shortlisted</span>{' '}
                    {<FontAwesomeIcon icon={faHeart} />}
                  </span>
                }
                className="prof-tab"
              >
                <Col md={12}>
                  <CardDeck>
                    {personaldetails.FaviouriteVehicle.map(data =>
                      bindFaviouriteVehicle(data),
                    )}
                  </CardDeck>
                </Col>
              </Tab>
              <Tab
                eventKey="testrides"
                title={
                  <span>
                    <span className="hide-xs">My Test Rides</span>{' '}
                    {<FontAwesomeIcon icon={faCar} />}
                  </span>
                }
                className="prof-tab"
              >
                <Col md={12}>
                  <Accordion defaultActiveKey="0" className="pad-0">
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        <b>Upcoming Test Rides</b>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          {personaldetails.UpcomingTestRides.map(data =>
                            bindUpcomingTestRides(data),
                          )}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                        <b>Past Test Rides</b>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          {personaldetails.PastTestRides.map(data =>
                            bindUpcomingTestRides(data),
                          )}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
              </Tab>
              <Tab
                eventKey="changepassword"
                title={
                  <span>
                    <span className="hide-xs">Change Password</span>{' '}
                    {<FontAwesomeIcon icon={faKey} />}
                  </span>
                }
                className="prof-tab"
              >
                <Col md={12}>
                  <ChangePassword />
                </Col>
              </Tab>
              <Tab
                eventKey="referandearn"
                title={
                  <span>
                    <span className="hide-xs">Refer & Earn</span>{' '}
                    {<FontAwesomeIcon icon={faGift} />}
                  </span>
                }
                className="prof-tab"
              >
                <Col md={12}>
                  <ReferAndEarn />
                </Col>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
      <BookTestRide />
    </div>
  );
}

function bindFaviouriteVehicle(data) {
  return (
    <Card md={3}>
      <Card.Img variant="top" style={{ height: '150px' }} src={data.ImageURL} />
      <Card.Body className="pad-5">
        <Card.Title>{data.Name}</Card.Title>
        <Card.Text>
          <Row style={{ marginLeft: '5px' }}>
            <span>
              {' '}
              <Badge pill variant="success">
                {data.Rating} <FontAwesomeIcon icon={faStar} />
              </Badge>{' '}
            </span>
            &nbsp;&nbsp;&nbsp;
            <h6>{data.Price}</h6>
            <FontAwesomeIcon className="remove-fav" icon={faTrash} />
          </Row>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="pad-10">
        <small className="text-muted">
          <Col>
            <Row>
              <Col md={6} className="pad-0">
                <a href="/viewdetails">
                  <Button variant="info" type="button" size="sm">
                    {' '}
                    <FontAwesomeIcon icon={faEye} /> View Details
                  </Button>
                </a>
              </Col>
              <Col md={6} className="pad-0">
                <Button variant="success" type="button" size="sm">
                  {' '}
                  <FontAwesomeIcon icon={faCar} /> Book Test Ride
                </Button>
              </Col>
            </Row>
          </Col>
        </small>
      </Card.Footer>
    </Card>
  );
}

function bindUpcomingTestRides(data) {
  let badgeclass;
  if (data.BookingStatus === 'COMPLETED') {
    badgeclass = 'success';
  } else if (data.BookingStatus === 'PENDING') {
    badgeclass = 'warning';
  } else if (data.BookingStatus === 'CANCELLED') {
    badgeclass = 'danger';
  } else if (data.BookingStatus === 'BOOKED') {
    badgeclass = 'primary';
  }
  return (
    <div>
      <Col
        md={12}
        style={{
          marginTop: '10px',
          borderBottom: '1px solid #e1e1e1',
          paddingBottom: '5px',
          fontSize: '14px',
        }}
      >
        <Row>
          <Col md={2}>
            <Image
              src={data.ImageURL}
              height="75"
              width="150"
              style={{ marginTop: '10px' }}
            />
          </Col>
          <Col md={6}>
            <b>{data.BikeDetails}</b>
            <br />
            <div style={{ fontSize: '12px' }}>
              <b>Dealer Address: </b> {data.DealerAddress}
            </div>
            <div style={{ fontSize: '12px' }}>
              <b>Booking Date & Time: </b>
              {data.BookingDate} ({data.BookingTime})
            </div>
          </Col>
          <Col
            md={2}
            className="text-center"
            style={{ fontSize: '16px', paddingTop: '10px' }}
          >
            <Badge pill variant={badgeclass}>
              {data.BookingStatus}
            </Badge>
          </Col>
          <Col
            className="text-center"
            md={2}
            style={{ fontSize: '18px', paddingTop: '10px' }}
          >
            <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faClock} /> |{' '}
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              icon={faCalendarTimes}
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
}

function bindReviews(data) {
  return (
    <div>
      <Card id={data.ID}>
        <Card.Body>
          <Card.Title>
            {data.VehicleName}
            <small style={{ fontSize: '12px' }}>
              {' '}
              <Badge pill variant="success">
                {data.Rating} <FontAwesomeIcon icon={faStar} />
              </Badge>{' '}
              {data.Date}
            </small>
          </Card.Title>
          <Row style={{ fontSize: '14px' }}>
            <Col md={4}>
              <Row>
                <Col md={5}>
                  {' '}
                  <b>Bike Usage :</b>
                </Col>
                <Col md={7}>{data.VehicleUsage} Commute</Col>
                <Col md={5}>
                  {' '}
                  <b>Mileage :</b>
                </Col>
                <Col md={7}>{data.Milage} kmph/charge</Col>
                <Col md={5}>
                  {' '}
                  <b>Charge Time :</b>
                </Col>
                <Col md={7}>{data.ChargingTime} hrs</Col>
              </Row>
            </Col>
            <Col md={8}>
              <b>My Reviews : </b> {data.Review}
            </Col>
          </Row>
          <Col md={12} style={{ fontSize: '14px', padding: '0px' }}>
            <span>
              <b>My Ratings</b>
            </span>
            <hr />
            <Row>
              {data.RatingCriteria.map(reviewdata => bindMyratings(reviewdata))}
            </Row>
          </Col>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

function bindMyratings(data) {
  let textcolor;
  let icon;
  switch (data.Value) {
    case '1':
      icon = <FontAwesomeIcon icon={faAngry} />;
      textcolor = 'red';
      break;
    case '2':
      icon = <FontAwesomeIcon icon={faFrown} />;
      textcolor = 'red';
      break;
    case '3':
      icon = <FontAwesomeIcon icon={faMeh} />;
      textcolor = 'yellow';
      break;
    case '4':
      icon = <FontAwesomeIcon icon={faSmile} />;
      textcolor = 'green';
      break;
    case '5':
      icon = <FontAwesomeIcon icon={faGrinHearts} />;
      textcolor = 'green';
      break;
    default:
      break;
  }
  return (
    <Col md={2} className="center">
      <div style={{ color: textcolor, fontSize: '32px' }}>{icon}</div>
      <span style={{ color: 'gray' }}> {data.Name}</span>
    </Col>
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
