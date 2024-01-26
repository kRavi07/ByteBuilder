import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./dashboard.css";
const Dashboard = () => {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <Col sm={10} className="text-light dashboard-form">
      <Row
        style={{
          padding: 0,
          marginInline: "1em",
        }}
      >
        <Col sm={12} className="text-end">
          <button
            className="btn btn-outline-danger text-light px-4"
            onClick={() => setDisabled(!disabled)}
          >
            Edit Profile
          </button>
        </Col>
        <Col sm={6} classNam="text-dark">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              className="dashboard-input"
              disabled={disabled}
              value="John"
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              className="dashboard-input"
              disabled={disabled}
              value="Doe"
            />
          </Form.Group>
        </Col>

        <Col sm={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              className="dashboard-input"
              disabled={disabled}
              value="johndoe"
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="dashboard-input"
              disabled={disabled}
              value=" abc@xyz.com"
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              className="dashboard-input"
              disabled={disabled}
              value=" 1234567890"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row
        style={{
          marginInline: "1em",
        }}
      >
        <Col sm={12} className="text-end">
          <button className="btn btn-danger px-5" disabled={disabled}>
            Save
          </button>
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
