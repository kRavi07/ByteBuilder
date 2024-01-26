import React from "react";
import { Accordion, Row, Col, Card, useAccordionButton } from "react-bootstrap";
import { IoFilterOutline } from "react-icons/io5";
import Select from "react-select";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      style={{
        backgroundColor: "none",
        border: "none",
        background: "none",
        width: "100%",
        alignItems: "center",
      }}
    >
      {children}
    </button>
  );
}

const FilterComponentMobile = ({
  selectedFilter,
  setSelectedFilter,
  selectedSort,
  setSelectedSort,
}) => {
  const brands = [
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

  const priceRanges = [
    "Below 10,000",
    "10,000 - 20,000",
    "20,000 - 30,000",
    "30,000 - 40,000",
  ];

  const brandOptions = brands.map((brand) => ({
    value: brand.name,
    label: brand.name,
  }));

  const priceOptions = priceRanges.map((priceRange) => ({
    value: priceRange,
    label: priceRange,
  }));

  const handleFilterChange = (selectedOption) => {
    setSelectedFilter(selectedOption ? selectedOption.value : null);
  };

  const handleSortChange = (selectedOption) => {
    setSelectedSort(selectedOption ? selectedOption.value : null);
  };

  return (
    <Row className="mt-5 gx-0 mobile-filter">
      <Col sm={6} className="px-2 mt-2">
        <Accordion flush>
          <Card>
            <Card.Header
              style={{
                alignItems: "center",
              }}
            >
              <CustomToggle eventKey="1">
                <span>Filter</span>
                <IoFilterOutline
                  className="mx-2"
                  style={{
                    fontSize: "1.2em",
                  }}
                />
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body
                style={{
                  padding: "0px",
                  paddingBlock: ".5rem",
                  paddingInline: "1rem",
                }}
              >
                <Row className="text-dark">
                  <Col xs={12} sm={6} className="mt-2">
                    <Select
                      options={brandOptions}
                      value={
                        selectedFilter
                          ? { value: selectedFilter, label: selectedFilter }
                          : null
                      }
                      onChange={handleFilterChange}
                      isClearable={true}
                      placeholder="Select Brand"
                    />
                  </Col>
                  <Col xs={12} sm={6} className="mt-2">
                    <Select
                      options={priceOptions}
                      value={
                        selectedFilter
                          ? { value: selectedFilter, label: selectedFilter }
                          : null
                      }
                      onChange={handleFilterChange}
                      isClearable={true}
                      placeholder="Select Price Range"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col sm={6} className="px-2 mt-2">
        <Accordion flush>
          <Card>
            <Card.Header
              style={{
                alignItems: "center",
              }}
            >
              <CustomToggle eventKey="2">
                <span>Sort</span>
                <IoFilterOutline
                  className="mx-2"
                  style={{
                    fontSize: "1.2em",
                  }}
                />
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body
                style={{
                  padding: "0px",
                  paddingBlock: ".5rem",
                  paddingInline: "1rem",
                }}
              >
                <Row className="text-dark">
                  <Col xs={12} sm={6} className="mt-2">
                    <Select
                      options={[
                        {
                          value: "Price: Low to High",
                          label: "Price: Low to High",
                        },
                        {
                          value: "Price: High to Low",
                          label: "Price: High to Low",
                        },
                        // Add more sorting options here
                      ]}
                      value={
                        selectedSort
                          ? { value: selectedSort, label: selectedSort }
                          : null
                      }
                      onChange={handleSortChange}
                      isClearable={true}
                      placeholder="Select Sorting"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  );
};

export default FilterComponentMobile;
