/**
 *
 * ReferAndEarn
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import {
  faEnvelope,
  faCommentAlt,
  faCopy,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import referimg from '../../images/bgImages/2856741.jpg';

function ReferAndEarn() {
  return (
    <div
      style={{
        minHeight: '400px',
        backgroundImage: `url(${referimg})`,
        backgroundSize: 'cover',
      }}
    >
      <RBS.Col className=" text-center shareHeading" md={12} xs={12}>
        <h2>Tell your friends about us and win exiciting gifts!</h2>
      </RBS.Col>
      <div className="clearfix" />
      <RBS.Col className=" text-center shareIcon" md={12} xs={12}>
        <FontAwesomeIcon icon={faGifts} />{' '}
      </RBS.Col>
      <RBS.Col className=" text-center" md={12} xs={12}>
        <RBS.Col
          md={{ span: 4, offset: 4 }}
          style={{
            opacity: '0.95',
            background: 'rgb(255, 255, 255)',
            color: 'rgb(0, 0, 0)',
            boxShadow: 'rgb(93 93 93) 0px 0px 10px',
            padding: '20px',
          }}
        >
          <RBS.InputGroup>
            <RBS.FormControl
              placeholder="Copy URL"
              aria-label="Copy URL"
              aria-describedby="basic-addon1"
            />
            <RBS.InputGroup.Append>
              <RBS.InputGroup.Text
                id="basic-addon1"
                className="text-primary noBg"
              >
                <FontAwesomeIcon icon={faCopy} />{' '}
              </RBS.InputGroup.Text>
            </RBS.InputGroup.Append>
          </RBS.InputGroup>
          <div className="clearfix" />

          <div className="text-muted">OR</div>
          <RBS.InputGroup>
            <RBS.InputGroup.Prepend>
              <RBS.InputGroup.Text
                id="basic-addon1"
                className="text-success noBg"
              >
                <FontAwesomeIcon icon={faWhatsapp} />{' '}
              </RBS.InputGroup.Text>
            </RBS.InputGroup.Prepend>
            <RBS.FormControl
              placeholder="Whatsapp Number"
              aria-label="Whaatsapp Number"
              aria-describedby="basic-addon1"
            />
          </RBS.InputGroup>
          <div className="clearfix" />
          <br />
          <RBS.InputGroup>
            <RBS.InputGroup.Prepend>
              <RBS.InputGroup.Text
                id="basic-addon1"
                className="text-danger noBg"
              >
                <FontAwesomeIcon icon={faEnvelope} />{' '}
              </RBS.InputGroup.Text>
            </RBS.InputGroup.Prepend>
            <RBS.FormControl
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="basic-addon1"
            />
          </RBS.InputGroup>
          <div className="clearfix" />
          <br />
          <RBS.InputGroup>
            <RBS.InputGroup.Prepend>
              <RBS.InputGroup.Text id="basic-addon1" className="text-info noBg">
                <FontAwesomeIcon icon={faCommentAlt} />{' '}
              </RBS.InputGroup.Text>
            </RBS.InputGroup.Prepend>
            <RBS.FormControl
              placeholder="Phone Number"
              aria-label="Phone Number"
              aria-describedby="basic-addon1"
            />
          </RBS.InputGroup>
          <br />
          <RBS.Button block type="button" variant="warning">
            <FontAwesomeIcon icon={faPaperPlane} /> Invite Friends
          </RBS.Button>
        </RBS.Col>
      </RBS.Col>
    </div>
  );
}

ReferAndEarn.propTypes = {};

export default ReferAndEarn;
