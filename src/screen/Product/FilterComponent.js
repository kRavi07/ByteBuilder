import React from "react";
import { Card, Row, Form, Col, Badge } from "react-bootstrap";
import { HStack } from "../../component/BootstrapStack";
import "./product-list.css";

const FilterComponent = ({
  selectedFilter,
  setSelectedFilter,
  selectedSort,
  setSelectedSort,
}) => {
  const Brand = [
    {
      name: "Apple",
      id: 1,
    },
    {
      name: "Samsung",
      id: 2,
    },
    // Add more brand data here
  ];

  const Price = [
    "10 - 200",
    "500 - 3000",
    "30,000 - 40,000",
    // Add more price range data here
  ];

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <Col lg={3} className="mt-3 filter-col">
      <Row>
        <Col className="my-3">
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="Price: Low to High"
                      checked={selectedSort === "Price: Low to High"}
                      onChange={handleSortChange}
                    />{" "}
                    Price: Low to High
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="Price: High to Low"
                      checked={selectedSort === "Price: High to Low"}
                      onChange={handleSortChange}
                    />{" "}
                    Price: High to Low
                  </label>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Form>
                {/* Search */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="brand-search-input"
                  />
                  {Brand.map((brand) => (
                    <HStack
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                      className="mt-2"
                      key={brand.id}
                    >
                      <label>
                        <input
                          type="radio"
                          name="brand"
                          value={brand.name}
                          checked={selectedFilter === brand.name}
                          onChange={handleFilterChange}
                        />{" "}
                        {brand.name}
                      </label>
                      <Badge bg="secondary" className="brand-badge">
                        {100} {/* Replace with the actual count */}
                      </Badge>
                    </HStack>
                  ))}
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <Card>
            <Card.Body>
              <Form>
                {/* Price filter */}
                <Form.Group
                  className="mb-3 price-checkbox"
                  controlId="formBasicEmail"
                >
                  {Price.map((priceRange) => (
                    <label key={priceRange}>
                      <input
                        type="radio"
                        name="price"
                        value={priceRange}
                        checked={selectedFilter === priceRange}
                        onChange={handleFilterChange}
                      />{" "}
                      {priceRange}
                    </label>
                  ))}
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default FilterComponent;
