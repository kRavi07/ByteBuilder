import React from "react";
import { Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import CardPlaceholder from "./CardPlaceholder";
import ProductCard from "./ProductCard";
import "../screen/Product/product-list.css";

const ProductListComponent = ({ products }) => {
  return products?.map((product) =>
    product.hasVariant ? (
      product.variants?.map((variant) => (
        <Col
          key={variant._id} // Assign a unique key for each variant
          xs={12}
          sm={6}
          md={3}
          lg={3}
          className="product-card-list"
        >
          <LazyLoad
            height={200}
            offset={[-200, 0]}
            debounce={100}
            placeholder={
              <div className="mx-2 my-2">
                <CardPlaceholder />
              </div>
            }
          >
            <ProductCard data={variant} />
          </LazyLoad>
        </Col>
      ))
    ) : (
      <Col
        key={product._id} // Assign a unique key for each product
        xs={12}
        sm={6}
        md={3}
        lg={3}
        className="product-card-list"
      >
        <LazyLoad
          height={200}
          offset={[-200, 0]}
          debounce={100}
          placeholder={
            <div className="mx-2 my-2">
              <CardPlaceholder />
            </div>
          }
        >
          <ProductCard data={product} />
        </LazyLoad>
      </Col>
    )
  );
};

export default ProductListComponent;
