/**
 *
 * Faq
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Faq() {
  return (
    <RBS.Accordion defaultActiveKey="0">
      <RBS.Card border="success">
        <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
          Do I require driving licence to ride electric scooters with top speed
          of up to 25kmph?
        </RBS.Accordion.Toggle>
        <RBS.Accordion.Collapse eventKey="0">
          <RBS.Card.Body>
            The Motor Vehicle Act (MVA) allows electric scooters and motorcycles
            that have a top speed of up to 25kmph to be ridden without any
            licence, learner’s included.
          </RBS.Card.Body>
        </RBS.Accordion.Collapse>
      </RBS.Card>
      <RBS.Card border="success">
        <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="1">
          Do I need to register my electric scooter which has a top speed of
          25kmph with RTO?
        </RBS.Accordion.Toggle>
        <RBS.Accordion.Collapse eventKey="1">
          <RBS.Card.Body>
            No! You don’t need to register your scooter with the RTO if the
            top-speed of the electric scooter doesn’t exceed 25kmph.
          </RBS.Card.Body>
        </RBS.Accordion.Collapse>
      </RBS.Card>
      <RBS.Card border="success">
        <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="2">
          Does my electric scooter with a top speed of 25kmph need a
          registration number?
        </RBS.Accordion.Toggle>
        <RBS.Accordion.Collapse eventKey="2">
          <RBS.Card.Body>
            As the e-scooter with a top speed of 25kmph doesn’t need to be
            registered with RTO, there won’t be a registration number.
          </RBS.Card.Body>
        </RBS.Accordion.Collapse>
      </RBS.Card>
      <RBS.Card border="success">
        <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
          Do we need to buy insurance for these low-speed electric scooters?
        </RBS.Accordion.Toggle>
        <RBS.Accordion.Collapse eventKey="3">
          <RBS.Card.Body>
            Insurance for electric scooters and motorcycles with top speed up of
            to 25kmph is optional. However, it is always recommended to buy at
            least third party insurance policy.
          </RBS.Card.Body>
        </RBS.Accordion.Collapse>
      </RBS.Card>
      <RBS.Card border="success">
        <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="4">
          What about PUC certificate?
        </RBS.Accordion.Toggle>
        <RBS.Accordion.Collapse eventKey="4">
          <RBS.Card.Body>
            Electric two-wheelers don’t pollute as there’s no internal
            combustion engine. Due to this, there’s no need to get a Pollution
            Under Control (PUC) certificate.
          </RBS.Card.Body>
        </RBS.Accordion.Collapse>
      </RBS.Card>
    </RBS.Accordion>
  );
}

Faq.propTypes = {};

export default Faq;
