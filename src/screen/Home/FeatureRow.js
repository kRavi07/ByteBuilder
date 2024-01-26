import React from "react";
import { HStack } from "../../component/BootstrapStack";
import { Row, Col } from "react-bootstrap";
import { CiBookmarkCheck } from "react-icons/ci";
const FeatureRow = () => {
  return (
    <Row className="mt-2">
      <Col>
        <HStack
          style={{
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <p>
            <CiBookmarkCheck style={{ fontSize: "1.5em" }} />
            <span className="mx-2">Free Shipping</span>
          </p>

          <p>
            <CiBookmarkCheck style={{ fontSize: "1.5em" }} />
            <span className="mx-2">Free Shipping</span>
          </p>

          <p>
            <CiBookmarkCheck style={{ fontSize: "1.5em" }} />
            <span className="mx-2">Free Shipping</span>
          </p>

          <p>
            <CiBookmarkCheck style={{ fontSize: "1.5em" }} />
            <span className="mx-2">Free Shipping</span>
          </p>
        </HStack>
      </Col>
    </Row>
  );
};

export default FeatureRow;
