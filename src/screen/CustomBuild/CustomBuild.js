import React from "react";
import MainLayout from "../../component/MainLayout";
import { Row, Col, Image, Form } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import { HStack, VStack } from "../../component/BootstrapStack";
import DynamicSelect from "../../component/DynamicSelect";
import HorizontalTab from "../../component/HorizontalTab";
import { FiUser, FiSettings } from "react-icons/fi";
const CustomBuild = () => {
  const details = {
    name: "Custom Build",
    description: "Custom Build your own PC",
    price: 1000,
  };

  const processors = [
    {
      id: 1,
      name: "Intel Core i9-11900K",
      price: 539.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      name: "AMD Ryzen 9 5950X",
      price: 799.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 3,
      name: "Intel Core i9-11900K",
      price: 539.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 4,
      name: "AMD Ryzen 9 5950X",
      price: 799.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 5,
      name: "Intel Core i9-11900K",
      price: 539.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 6,
      name: "AMD Ryzen 9 5950X",
      price: 799.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 7,
      name: "Intel Core i9-11900K",
      price: 539.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 8,
      name: "AMD Ryzen 9 5950X",
      price: 799.99,
      image: "https://placehold.co/50x50",
    },
    // Add more processor options here
  ];

  const motherboards = [
    {
      id: 1,
      name: "ASUS ROG Maximus XIII Hero",
      price: 599.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      name: "GIGABYTE AORUS X570 Master",
      price: 359.99,
      image: "https://placehold.co/50x50",
    },
    // Add more motherboard options here
  ];

  const storage = [
    {
      id: 1,
      name: "Samsung 970 EVO Plus 1TB",
      price: 179.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      name: "Crucial MX500 2TB",
      price: 249.99,
      image: "https://placehold.co/50x50",
    },
    // Add more storage options here
  ];

  const ram = [
    {
      id: 1,
      name: "Corsair Vengeance RGB Pro 32GB (2x16GB)",
      price: 179.99,
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      name: "G.SKILL Trident Z RGB 64GB (2x32GB)",
      price: 349.99,
      image: "https://placehold.co/50x50",
    },
    // Add more RAM options here
  ];

  // Add more arrays for other component types as needed

  const [selectedOption, setSelectedOption] = React.useState("Select");

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  const nav = [
    {
      title: "My Account",
      icon: <FiUser />,
    },
    {
      title: "Settings",
      icon: <FiSettings />,
    },
  ];

  const tab = ["My Account", "Settings"];

  return (
    <MainLayout>
      <Row className="mx-4">
        <Col sm={4}>
          <Image
            src="https://placehold.co/300x300"
            style={{
              objectFit: "cover",
              width: "300px",
              height: "300px",
            }}
            fluid={true}
          />
        </Col>
        <Col sm={8}>
          <ProductDetails product={details} />
          <Form>
            <VStack
              style={{
                width: "80%",
                color: "white",
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Processor</Form.Label>
                <DynamicSelect
                  type="processor"
                  options={processors}
                  value={selectedOption}
                  onChange={handleOptionChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Motherboard</Form.Label>
                <DynamicSelect
                  type="motherboard"
                  options={motherboards}
                  value={selectedOption}
                  onChange={handleOptionChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Storage</Form.Label>
                <DynamicSelect
                  type={"storage"}
                  options={storage}
                  value={selectedOption}
                  onChange={handleOptionChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>RAM</Form.Label>
                <DynamicSelect
                  type={"ram"}
                  options={ram}
                  value={selectedOption}
                  onChange={handleOptionChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Graphics Card</Form.Label>
                <DynamicSelect
                  type={"graphics card"}
                  options={processors}
                  value={selectedOption}
                  onChange={handleOptionChange}
                />
              </Form.Group>
            </VStack>
          </Form>

          <hr />
          <p className="text-light">
            <b>Price: </b> $ 1,000
          </p>
          <HStack
            style={{
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <button className="btn btn-light">Add to Cart</button>
            <button className="btn btn-link">Add to Favourites</button>
          </HStack>
        </Col>
      </Row>
      <HorizontalTab
        props={{
          nav: nav,
          tab: tab,
        }}
      />
    </MainLayout>
  );
};

export default CustomBuild;
