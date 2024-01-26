import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import FilterComponent from "./FilterComponent";
import FilterComponentMobile from "./FilterComponentMobile";
import { useGetProductsQuery } from "../../state/api";
import ProductCard from "../../component/ProductCard";
import LazyLoad from "react-lazyload";
import CardPlaceholder from "../../component/CardPlaceholder";

const ProductList = () => {
  const { data: products, isLoading, isSuccess } = useGetProductsQuery();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const applyFilter = (product) => {
    if (!selectedFilter) return true;

    // Extract minimum and maximum price from the selectedFilter string
    const [minPrice, maxPrice] = selectedFilter
      .split("-")
      .map((range) => parseInt(range.replace(/,/g, ""), 10));

    // Check if the product's price falls within the selected price range
    return product.price >= minPrice && product.price <= maxPrice;
  };

  const applySort = (productList) => {
    if (!selectedSort) return productList;

    // Replace 'price' with the appropriate field name in your product schema
    if (selectedSort === "Price: Low to High") {
      return productList.slice().sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
      return productList.slice().sort((a, b) => b.price - a.price);
    } else {
      // Handle other sorting options as needed
      return productList;
    }
  };

  const filteredAndSortedProducts = applySort(
    products ? products.filter(applyFilter) : []
  );

  const renderProductCard = (product) => (
    <Col
      key={product._id}
      xs={12}
      sm={6}
      md={4}
      lg={4}
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
  );

  const handleFilterChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  const handleSortChange = (selectedOption) => {
    setSelectedSort(selectedOption);
  };

  const renderProducts = () => {
    if (isLoading && !isSuccess) {
      return <Spinner />;
    }

    return (
      <>
        <FilterComponent
          selectedFilter={selectedFilter}
          setSelectedFilter={handleFilterChange}
          selectedSort={selectedSort}
          setSelectedSort={handleSortChange}
        />
        <Col lg={9} md={12} sm={12} className="product-list-col">
          {screenWidth < 756 && (
            <FilterComponentMobile
              selectedFilter={selectedFilter}
              setSelectedFilter={handleFilterChange}
              selectedSort={selectedSort}
              setSelectedSort={handleSortChange}
            />
          )}
          <Row className="gx-0">
            {filteredAndSortedProducts.map((product) =>
              product.hasVariant
                ? product.variants?.map((variant) => renderProductCard(variant))
                : renderProductCard(product)
            )}
          </Row>
        </Col>
      </>
    );
  };

  return <Row className="gx-0">{renderProducts()}</Row>;
};

export default ProductList;
