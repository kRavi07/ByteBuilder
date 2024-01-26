import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Spinner,
} from "react-bootstrap";
import { HStack, VStack } from "../../component/BootstrapStack";
import { FiPlus, FiMinus, FiTrash, FiHeart } from "react-icons/fi";

const CartProduct = ({ products }) => {
  const handleQuantityChnage = () => {};

  console.log(products);

  return (
    <>
      {products?.map((product) => (
        <Card.Body key={product.product?._id || product.variant?._id}>
          <HStack
            style={{
              justifyContent: "space-between",
            }}
          >
            <HStack
              style={{
                width: "30%",
              }}
            >
              <Image
                src={product?.product?.images[0] || product.variant?.images[0]}
                fluid={true}
                style={{
                  objectFit: "cover",
                  width: "100px",
                  height: "100px",
                }}
              />
            </HStack>

            <VStack
              style={{
                width: "70%",
                marginLeft: "1em",
                marginRight: "1em",
              }}
            >
              <p
                style={{
                  fontSize: "1.2em",

                  wordWrap: "break-word",
                }}
              ></p>
              <p
                style={{
                  fontSize: ".9em",
                }}
              >
                {" "}
                {product.product?.name || product.variant?.name}
              </p>
              <p
                style={{
                  fontSize: ".9em",
                }}
              >
                4.5 <span className="text-warning">★</span> (1000)
              </p>
              <p
                style={{
                  fontSize: ".9em",
                }}
              >
                ₹{product.product?.price || product.variant?.price}
              </p>
            </VStack>
          </HStack>

          <HStack
            style={{
              justifyContent: "space-between",
              marginTop: "1.5em",
              width: "70%",
            }}
          >
            <HStack
              style={{
                justifyContent: "space-between",
              }}
            >
              <button
                className="btn btn-link mr-2 text-center"
                style={{
                  color: "white",

                  border: "1px solid #D3D3D3",
                  textDecoration: "none",
                  paddingLeft: "0.5em",
                  paddingRight: "0.5em",
                  borderRadius: "0",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
              >
                <FiMinus />
              </button>
              <input
                className="form-control mx-2 text-center"
                value={product.quantity}
                style={{
                  width: "3em",

                  paddingLeft: "0.5em",
                  paddingRight: "0.5em",
                  borderRadius: "0",
                }}
              />
              <button
                className="btn btn-link mx-2"
                style={{
                  color: "white",
                  border: "1px solid #D3D3D3",
                  textDecoration: "none",
                  paddingLeft: "0.5em",
                  paddingRight: "0.5em",
                  borderRadius: "0",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
              >
                <FiPlus />
              </button>
            </HStack>
            <button
              className="btn btn-link"
              style={{
                color: "white",

                textDecoration: "none",
                hover: {
                  color: "red",
                },
              }}
            >
              Remove <FiTrash />
            </button>

            <button
              className="btn btn-link"
              style={{ color: "white", textDecoration: "none" }}
            >
              Save for later <FiHeart color="red" />
            </button>
          </HStack>
          <hr className="text-light" />
        </Card.Body>
      ))}
    </>
  );
};

export default CartProduct;
