/**
 *
 * MyAccount
 *
 */

import React from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import {
  faCalendar,
  faArrowCircleRight,
  faBackspace,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyAccount() {
  return (
    <div id="divMyProfile">
      <Form>
        <Form.Row>
          <Form.Group as={Col} md={2}>
            <Form.Label>
              First Name<span className="required">*</span>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>
              Last Name<span className="required">*</span>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>
              Email Address<span className="required">*</span>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>
              Mobile number<span className="required">*</span>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="text" placeholder="Mobile number" />
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>Gender</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control as="select" placeholder="Select Gender">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>Date of Birth</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <InputGroup>
              <Form.Control type="text" placeholder="Date of Birth" />
              <InputGroup.Text id="basic-addon2">
                <FontAwesomeIcon icon={faCalendar} />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>State</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control as="select" placeholder="Select State">
              <option>Select State</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>City</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control as="select" placeholder="Select City">
              <option>Select City</option>
              <option>Pune</option>
              <option>Mumbai</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>Address line 1</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="text" placeholder="Address line 1" />
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>Address line 2</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="text" placeholder="Address line 2" />
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>Pin Code</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="text" placeholder="Pin Code" />
          </Form.Group>
          <Form.Group as={Col} md={2}>
            <Form.Label>Location</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={4}>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>
          <Form.Group as={Col} md={{ span: 2, offset: 4 }}>
            <Button variant="primary" type="submit" block>
              Submit&nbsp;&nbsp;
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </Button>
          </Form.Group>
          <Form.Group as={Col} md={{ span: 2 }}>
            <Button variant="secondary" type="button" block>
              <FontAwesomeIcon icon={faBackspace} /> &nbsp;&nbsp;Reset
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

MyAccount.propTypes = {};

export default MyAccount;
