import React, { useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";
import Sidebar from "./Sidebar";
import { FiAlignJustify, FiShoppingCart, FiUser } from "react-icons/fi";
import { HStack } from "./BootstrapStack";
import SearchBox from "./SearchBox";
import "./style/CustomMainPageLayout.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const CustomMainPageLayout = ({ children }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  //find screen width less than 980 px
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  const CartIcon = ({ quantity }) => {
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <FiShoppingCart />
        {quantity > 0 && (
          <Badge
            bg="danger"
            style={{
              position: "absolute",

              top: "1px",
              right: "-10px",
              fontSize: "10px",
              borderRadius: "50%",
              padding: "2px 5px",
            }}
          >
            {quantity}
          </Badge>
        )}
      </div>
    );
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#333333",
        padding: 0,
      }}
    >
      <Row>
        <Col
          md={2}
          className="sidebar-container"
          style={{
            height: "100vh",
            overflowY: "hidden",
            position: "fixed",
          }}
        >
          <Sidebar />
        </Col>
        <Col md={9} className="main-content">
          {children}
        </Col>
      </Row>
      <Row
        className="footer"
        style={{
          marginTop: "10vh",
        }}
      ></Row>
    </Container>
  );
};

export default CustomMainPageLayout;
