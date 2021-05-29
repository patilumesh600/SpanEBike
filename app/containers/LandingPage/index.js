/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as RBS from 'react-bootstrap';
import {
  faEye,
  faMotorcycle,
  faStar,
  faCar,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FAQ from 'components/Faq';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import banImg1 from '../../images/bgImages/banner-5.jpg';
import banImg2 from '../../images/bgImages/banner-2.jpg';
import banImg3 from '../../images/bgImages/banner-1.jpg';

import ebikebrand from '../../json/ebikebrand.json';
import ecarbrand from '../../json/ecarbrand.json';
import upcomingebike from '../../json/upcomingebike.json';
import upcomingecar from '../../json/upcomingecar.json';
import evehiclenews from '../../json/electricvehiclenews.json';

import './landing.css';

export function LandingPage() {
  useInjectReducer({ key: 'landingPage', reducer });
  useInjectSaga({ key: 'landingPage', saga });

  return (
    <div id="divLanding" style={{ backgroundColor: '#f4f3f3' }}>
      <RBS.Container
        fluid
        style={{ position: 'relative', padding: '0px,15px' }}
      >
        <RBS.Row>
          <RBS.Col md={12} style={{ padding: '0px' }}>
            <RBS.Carousel>
              <RBS.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banImg1}
                  alt="First slide"
                  height="500px"
                />
                <RBS.Carousel.Caption>
                  {/* <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </RBS.Carousel.Caption>
              </RBS.Carousel.Item>
              <RBS.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banImg2}
                  alt="Second slide"
                  height="500px"
                />

                <RBS.Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </RBS.Carousel.Caption>
              </RBS.Carousel.Item>
              <RBS.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banImg3}
                  alt="Third slide"
                  height="500px"
                />
                <RBS.Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </RBS.Carousel.Caption>
              </RBS.Carousel.Item>
            </RBS.Carousel>
          </RBS.Col>
        </RBS.Row>
        <RBS.Row>
          <RBS.Col md={12} className="tabheader">
            <h3>Browse Electric vehicle by Top brand &nbsp;</h3>
          </RBS.Col>
          <RBS.Col
            md={{ span: 10, offset: 1 }}
            style={{
              border: '1px solid #dedede',
              padding: '0px',
              boxShadow: '0 2px 2px #e2e2e2, 0 1px 1px #f1f1f1',
            }}
          >
            <RBS.Tabs id="browsebiketab">
              <RBS.Tab
                eventKey="Brand"
                title="Electric Bike"
                className="browsetab"
              >
                <div id="brand-type-container" className="brand-type-container">
                  <ul>{ebikebrand.map(data => getBrandDetails(data))}</ul>
                </div>
              </RBS.Tab>
              <RBS.Tab
                eventKey="price"
                title="Electric Car"
                className="browsetab"
              >
                <div id="brand-type-container" className="brand-type-container">
                  <ul>{ecarbrand.map(data => getBrandDetails(data))}</ul>
                </div>
              </RBS.Tab>
            </RBS.Tabs>
          </RBS.Col>
          <RBS.Col md={12} className="tabheader">
            <h3>Most Popular Electric Vehicle &nbsp;</h3>
          </RBS.Col>
          <RBS.Col
            md={{ span: 10, offset: 1 }}
            style={{
              border: '1px solid #dedede',
              padding: '0px',
            }}
          >
            <RBS.Tabs id="browsebiketab">
              <RBS.Tab
                eventKey="Brand"
                title="Electric Bike"
                className="browsetab"
              >
                <RBS.CardDeck>
                  {upcomingebike.map(data => getUpcomingBikeDetails(data))}
                </RBS.CardDeck>
              </RBS.Tab>
              <RBS.Tab
                eventKey="price"
                title="Electric Car"
                className="browsetab"
              >
                <RBS.CardDeck>
                  {upcomingecar.map(data => getUpcomingCarDetails(data))}
                </RBS.CardDeck>
              </RBS.Tab>
            </RBS.Tabs>
          </RBS.Col>
          <RBS.Col md={12} className="tabheader">
            <h3>Latest updates from the electric vehicle industry &nbsp;</h3>
          </RBS.Col>
          <RBS.Col
            md={{ span: 10, offset: 1 }}
            style={{
              border: '1px solid #dedede',
              padding: '0px',
            }}
          >
            <RBS.Tabs id="browsebiketab">
              <RBS.Tab
                eventKey="Brand"
                title="Electric Bike"
                className="browsetab"
              >
                <RBS.CardDeck>
                  {evehiclenews.map(data => getNewsSection(data))}
                </RBS.CardDeck>
              </RBS.Tab>
              <RBS.Tab
                eventKey="price"
                title="Electric Car"
                className="browsetab"
              >
                <RBS.CardDeck>
                  {evehiclenews.map(data => getNewsSection(data))}
                </RBS.CardDeck>
              </RBS.Tab>
            </RBS.Tabs>
          </RBS.Col>
          <RBS.Col md={12} className="tabheader">
            <h3>Frequently asked questions & answers &nbsp;</h3>
          </RBS.Col>
          <RBS.Col
            md={{ span: 10, offset: 1 }}
            style={{
              border: '1px solid #dedede',
              padding: '0px',
              boxShadow: '0 2px 2px #e2e2e2, 0 1px 1px #f1f1f1',
            }}
          >
            <FAQ />
          </RBS.Col>
        </RBS.Row>
      </RBS.Container>
    </div>
  );
}

LandingPage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

function getBrandDetails(data) {
  return (
    <li>
      <a href="/hero" title={data.Name}>
        <span className="brand-type">
          <img
            // eslint-disable-next-line global-require
            src={data.LogoPath}
            alt={data.Name}
            border="0"
          />
        </span>
        <span className="brand-type-title">{data.Name}</span>
      </a>
    </li>
  );
}

function getUpcomingBikeDetails(data) {
  return (
    <RBS.Card>
      <RBS.Card.Img variant="top" src={data.ImagePath} />
      <RBS.Card.Body>
        <RBS.Card.Title>{data.Name}</RBS.Card.Title>
        <RBS.Card.Text>
          <span className="upcoming-span">{data.MilageDetails}</span>
          <br />
          <span className="upcoming-span">{data.Showroom}</span>
          <br />
          <h5>{data.ShowroomPrice}</h5>
        </RBS.Card.Text>
      </RBS.Card.Body>
      <RBS.Card.Footer>
        <small className="text-muted">
          <RBS.Button variant="success" type="button" size="xs">
            {' '}
            <FontAwesomeIcon icon={faMotorcycle} /> Book Test Ride
          </RBS.Button>
          &nbsp;&nbsp;&nbsp;
          <RBS.Button variant="info" type="button" size="xs">
            {' '}
            <FontAwesomeIcon icon={faEye} /> View Details
          </RBS.Button>
        </small>
      </RBS.Card.Footer>
    </RBS.Card>
  );
}

function getUpcomingCarDetails(data) {
  return (
    <RBS.Card>
      <RBS.Card.Img variant="top" src={data.ImagePath} />
      <RBS.Card.Body>
        <RBS.Card.Title>{data.Name}</RBS.Card.Title>
        <RBS.Card.Text>
          <span>
            {' '}
            <RBS.Badge pill variant="success">
              {data.Rating} <FontAwesomeIcon icon={faStar} />
            </RBS.Badge>{' '}
          </span>
          <span className="upcoming-span">({data.Review}) Reviews</span>
          <br />
          <h5>{data.PriceRange}</h5>
        </RBS.Card.Text>
      </RBS.Card.Body>
      <RBS.Card.Footer>
        <small className="text-muted">
          <RBS.Button variant="success" type="button" size="xs">
            {' '}
            <FontAwesomeIcon icon={faCar} /> Book Test Ride
          </RBS.Button>
          &nbsp;&nbsp;&nbsp;
          <RBS.Button variant="info" type="button" size="xs">
            {' '}
            <FontAwesomeIcon icon={faEye} /> View Details
          </RBS.Button>
        </small>
      </RBS.Card.Footer>
    </RBS.Card>
  );
}

function getNewsSection(data) {
  return (
    <RBS.Card>
      <RBS.Card.Img variant="top" src={data.ImagePath} />
      <RBS.Card.Body>
        <RBS.Card.Title>{data.Title}</RBS.Card.Title>
        <RBS.Card.Text>
          <span className="upcoming-span">
            <FontAwesomeIcon icon={faCalendar} /> {data.Date}
          </span>
          <br />
          <span className="upcoming-span">
            <FontAwesomeIcon icon={faUser} /> {data.Author}
          </span>
        </RBS.Card.Text>
      </RBS.Card.Body>
    </RBS.Card>
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LandingPage);
