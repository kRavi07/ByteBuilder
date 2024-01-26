import React, { useEffect, useLayoutEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { HStack } from "../../component/BootstrapStack";
import { FiHeart } from "react-icons/fi";
import MainLayout from "../../component/MainLayout";
import { useLocation, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../state/api";
import ProductImageCarousel from "../../component/ProductImageCarousel";
const Product = () => {
  //const { state } = useLocation();
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState(null);

  const { isLoading, isSuccess, data } = useGetProductByIdQuery(id);

  useLayoutEffect(() => {
    if (!isLoading && isSuccess) {
      setProduct(data);
    }
  }, [isLoading, isSuccess, data, product]);

  return (
    <MainLayout>
      {product != null && product ? (
        <Row
          className="px-4 py-4 text-light"
          style={{
            marginLeft: "5%",
          }}
        >
          <Col md={6}>
            <ProductImageCarousel images={product.images} />
          </Col>
          <Col md={6}>
            <HStack
              style={{
                width: "80%",
                justifyContent: "space-between",
              }}
            >
              <h2>{product?.name}</h2>
              <button
                className="btn btn-link text-danger"
                style={{
                  fontSize: "1.5em",
                }}
              >
                <FiHeart />
              </button>
            </HStack>
            <h3>{product?.price}</h3>

            <ul>
              <li>8 cores, 16 threads</li>
              <li>3.5 GHz base clock speed, 5.3 GHz max turbo frequency</li>
              <li>LGA 1200 socket, PCIe 4.0 support</li>
              <li>125W TDP</li>
            </ul>
            {/* add Payment offers and delivery options*/}

            <hr
              style={{
                width: "80%",
              }}
            />

            <ul>
              <li>Free Delivery</li>
              <li>Next Day Delivery (available in select cities)</li>
              <li>Extended Returns: 30 Days Returns/Exchange</li>
            </ul>

            <HStack
              gap={2}
              style={{
                width: "100%",
                marginTop: "10%",
              }}
            >
              <button
                className="btn btn-light rounded-pill "
                style={{
                  width: "40%",
                  color: "black",
                }}
              >
                Add to Cart
              </button>
              <button
                className="btn  rounded-pill mx-4"
                style={{
                  width: "40%",
                  backgroundColor: "#D93B34",
                  color: "white",
                }}
              >
                Buy Now
              </button>
            </HStack>
          </Col>
        </Row>
      ) : (
        <>
          <h2>Loading .....</h2>
        </>
      )}
    </MainLayout>
  );
};

export default Product;
