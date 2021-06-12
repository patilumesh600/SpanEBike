/**
 *
 * BookTestRide
 *
 */

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function BookTestRide() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Modal
        id="modalTestRide"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Book Test Ride
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}

BookTestRide.propTypes = {};

export default BookTestRide;
