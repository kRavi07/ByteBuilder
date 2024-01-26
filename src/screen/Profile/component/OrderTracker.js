import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import Stepbar from "./Stepbar";
import { HStack } from "../../../component/BootstrapStack";

const OrderTracker = () => {
  return (
    <Col sm={12}>
      <Container>
        <Row>
          <Col sm={10} className="text-center">
            <HStack
              style={{
                justifyContent: "space-evenly",
              }}
            >
              <input
                type="search"
                placeholder="Enter order id"
                className="w-50"
                style={{
                  background: "transparent",
                  paddingBlock: "0.5rem",
                  paddingInline: "1rem",
                  border: "1px solid #fff",
                  color: "#fff",
                }}
              />
              <button
                className="btn btn-link"
                style={{
                  background: "transparent",
                  border: "1px solid red",
                  color: "#fff",
                  textDecoration: "none",
                  paddingInline: "5%",
                  paddingBlock: "1%",
                }}
              >
                Track
              </button>
            </HStack>
          </Col>
          <Col sm={12} className="mt-5 text-center">
            <Stepbar />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default OrderTracker;
