/**
 *
 * ChangePassword
 *
 */

import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function ChangePassword() {
  return (
    <div id="divMyProfile">
      <Form>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 2, offset: 2 }}>
            <Form.Label>
              Current Password<span className="required">*</span>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={{ span: 4 }}>
            <Form.Control type="text" placeholder="Current Password" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 2, offset: 2 }}>
            <Form.Label>
              New Password<span className="required">*</span>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={{ span: 4 }}>
            <Form.Control type="text" placeholder="New Password" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 2, offset: 2 }}>
            <Form.Label>
              Confirm Password<span className="required">*</span>
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md={{ span: 4 }}>
            <Form.Control type="text" placeholder="Confirm Password" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 3, offset: 4 }}>
            <Button variant="primary" type="submit" block>
              Change Password
            </Button>
          </Form.Group>
          <Form.Group as={Col} md={{ span: 1 }}>
            <Button variant="secondary" type="button" block>
              Clear
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

ChangePassword.propTypes = {};

export default ChangePassword;
