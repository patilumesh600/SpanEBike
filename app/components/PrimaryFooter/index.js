/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/**
 *
 * PrimaryFooter
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PrimaryFooter() {
  return (
    <RBS.Container
      style={{
        background: '#000',
        color: '#d5d5d5',
        padding: '15px',
        marginTop: '5%',
      }}
      fluid
    >
      <RBS.Row>
        <RBS.Col md={12}>
          <RBS.Row>
            <RBS.Col md={3}>
              <div style={{ fontSize: '18px', marginLeft: '25px' }}>Tools</div>
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    {' '}
                    EMI Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Car Finance
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Car insurance
                  </a>
                </li>
              </ul>
            </RBS.Col>
            <RBS.Col md={3}>
              <div style={{ fontSize: '18px', marginLeft: '25px' }}>
                Auto Enthusiasts
              </div>
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    {' '}
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Review
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </RBS.Col>
            <RBS.Col md={3}>
              <div style={{ fontSize: '18px', marginLeft: '25px' }}>
                Research
              </div>
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    {' '}
                    New Car
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    New Bike
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Compare Car
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Compare Bike
                  </a>
                </li>
              </ul>
            </RBS.Col>
            <RBS.Col md={3}>
              <div style={{ fontSize: '18px' }}>Follow us</div>
              <br />
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '36px', marginLeft: '5px' }}
              />{' '}
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
        <RBS.Col md={12}>
          <hr style={{ borderBottom: '1px solid #ffffff' }} />
          <RBS.Row>
            <RBS.Col md={8}>
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                About us
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                Advertise us
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                Contact us
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                Sitemap
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                Term of use
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                Privacy Policy
              </a>{' '}
              {'|'}{' '}
              <a
                href="javascript:;"
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                Feedback
              </a>{' '}
            </RBS.Col>
            <RBS.Col md={4}>
              <span
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: '#d5d5d5',
                }}
              >
                Copyright © 2021 Powered By Span App Software Pvt. Ltd. All
                Rights Reserved.
              </span>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  );
}

PrimaryFooter.propTypes = {};

export default PrimaryFooter;
