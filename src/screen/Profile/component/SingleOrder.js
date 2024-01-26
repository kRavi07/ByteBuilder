import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import DynamicBreadcrumb from "../../../component/DynamicBreadcrumb";
import { HStack, VStack } from "../../../component/BootstrapStack";
import { COLOR } from "../../../Util/color";
import Divider from "../../../component/Divider";
const SingleOrder = () => {
  const { id } = useParams();
  return (
    <Col sm={10}>
      <DynamicBreadcrumb />
      <Row>
        <Col sm={6} className="text-light">
          <p>
            <strong>Order ID: {id}</strong>
          </p>
          <h6>Delivery Address</h6>
          <p>
            <strong>Address:</strong> 123, ABC Street, XYZ City, 123456
          </p>
        </Col>
        <Col sm={6}>
          <HStack
            style={{
              justifyContent: "space-between",
            }}
          >
            <Image
              alt="order"
              src="https://placeimg.com/640/480/any"
              style={{
                height: "10em",
                width: "10em",
                objectFit: "contain",
                border: "1px solid white",
              }}
            />

            <p className="text-light">
              <strong>Amount Paid: 1000 TK</strong>
            </p>

            <VStack>
              <button
                className="btn btn-link py-2 mb-2"
                style={{
                  color: "white",
                  height: "3em",
                  alignContent: "center",
                  border: "1px solid",
                  borderColor: COLOR.secondary,
                  textDecoration: "none",
                  paddingBlock: "0.5em",
                }}
              >
                Cancel Order
              </button>
              <button
                className="btn btn-link py-2 mt-2"
                style={{
                  color: "white",
                  height: "3em",
                  alignContent: "center",
                  backgroundColor: COLOR.secondary,
                  border: "1px solid white",
                  textDecoration: "none",
                  paddingBlock: "0.5em",
                }}
              >
                Download Invoice
              </button>
            </VStack>
          </HStack>
        </Col>
      </Row>
      <Row>
        <h6 className="text-light">Order Details</h6>
        <Divider color="white" thickness={"2"} className="my-3" />
        <Col sm={12}>
          <Row>
            <Col sm={6}>
              <HStack
                style={{
                  justifyContent: "space-between",
                  marginInline: "1em",
                }}
              >
                <Image
                  alt="order"
                  src="
                    https://placeimg.com/640/480/any
                  "
                  style={{
                    height: "10em",
                    width: "10em",
                    objectFit: "contain",
                    border: "1px solid white",
                  }}
                  fluid
                />
                <p className="text-light">
                  <strong>Product 1</strong>
                </p>
              </HStack>
            </Col>

            <Col sm={6}>
              <HStack
                style={{
                  justifyContent: "space-between",
                  marginInline: "1em",
                }}
              >
                <p>
                  <strong>
                    <span className="text-light">Price:</span> 1000 TK
                  </strong>
                </p>

                <button
                  className="btn btn-link py-2 mb-2"
                  style={{
                    color: "white",
                    height: "3em",
                    alignContent: "center",
                    border: "1px solid",
                    borderColor: COLOR.secondary,
                    textDecoration: "none",
                    paddingBlock: "0.5em",
                  }}
                >
                  Review Product
                </button>
              </HStack>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleOrder;
