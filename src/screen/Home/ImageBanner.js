import React from "react";
import { Row, Col } from "react-bootstrap";
import { Center, HStack, VStack } from "../../component/BootstrapStack";

import { DiAndroid, DiApple } from "react-icons/di";

function ImageBanner() {
  return (
    <Row
      style={{
        backgroundImage: "url('https://via.placeholder.com/700x600')",
      }}
    >
      <Col
        xs={6}
        style={{
          height: "30em",
        }}
      >
        <VStack
          className="text-center text-dark"
          style={{
            marginTop: "10%",
            justifyContent: "center",
          }}
        >
          <h1>OVER POWER</h1>
          <h3>your skills with us</h3>
          <h2>Max Powered Machiene</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="btn btn-outline-light rounded-pill mx-auto"
            style={{
              width: "12em",
            }}
          >
            Customize Now
          </button>

          <p>Also available on</p>
          <HStack className="mx-auto">
            <button
              className="btn btn-outline-light mx-2"
              style={{
                borderRadius: "50%",
                fontSize: "1.5em",
              }}
            >
              <DiApple />
            </button>
            <button
              className="btn btn-outline-light"
              style={{
                borderRadius: "50%",
                fontSize: "1.5em",
              }}
            >
              <DiAndroid />
            </button>
          </HStack>
        </VStack>
      </Col>
    </Row>
  );
}

export default ImageBanner;
