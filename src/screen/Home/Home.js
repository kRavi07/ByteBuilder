import React from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import MainLayout from "../../component/MainLayout";
import FeatureRow from "./FeatureRow";
import ImageBanner from "./ImageBanner";
import ProductListComponent from "../../component/ProductListComponent";
import { useGetProductsQuery } from "../../state/api";

const Home = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetProductsQuery();

  return (
    <>
      <MainLayout>
        <ImageBanner />
        <FeatureRow />
        <Row className="pb-3">
          <Col md={8}>
            <Image src="https://via.placeholder.com/800x300" fluid />
          </Col>
          <Col md={4}>
            <Image src=" https://via.placeholder.com/400x300" fluid />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto">
            <h2 className="text-center text-light">Prebuild Machine</h2>
          </Col>
          <Row className="gx-0 mb-3 px-2" bg="primary">
            {!isLoading && isSuccess ? (
              <ProductListComponent products={products?.slice(0, 4)} n={4} />
            ) : (
              <Spinner />
            )}
          </Row>
          <Col className="mx-auto text-center">
            <button className="btn btn-light rounded-pill px-4">
              View More
            </button>
          </Col>
        </Row>
        <Row className="py-4">
          <Col md={8}>
            <Image src="https://via.placeholder.com/800x300" fluid />
          </Col>
          <Col md={4}>
            <Image src=" https://via.placeholder.com/400x300" fluid />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto">
            <h2 className="text-center text-light">PC Accessories</h2>
          </Col>
          <Row className="gx-0 mb-3 px-2" bg="primary">
            {!isLoading && isSuccess ? (
              <ProductListComponent products={products?.slice(0, 4)} n={4} />
            ) : (
              <Spinner />
            )}
          </Row>
          <Col className="mx-auto text-center">
            <button className="btn btn-light rounded-pill px-4">
              View More
            </button>
          </Col>
        </Row>
      </MainLayout>
    </>
  );
};

export default Home;
