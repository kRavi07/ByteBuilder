import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";
import Sidebar from "./Sidebar";
import { FiAlignJustify } from "react-icons/fi";
import { HStack } from "./BootstrapStack";
import SearchBox from "./SearchBox";
import "./style/mainLayout.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import CartIcon from "./CartIcon";
import { useGetCartItemsQuantityQuery } from "../state/api";
import "react-toastify/dist/ReactToastify.css";
import { setCartQuantity } from "../state/slices/authSlice";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const { isLoading, isSuccess, data } = useGetCartItemsQuantityQuery();

  const quantity = useSelector((state) => state.auth.cartQuantity);

  const [cartQuantity, setCartQuantity] = useState(
    quantity !== null && quantity ? quantity : 0
  );

  useEffect(() => {
    if (!isLoading && isSuccess && data.quantity) {
      const payload = data.quantity;
      setCartQuantity(payload);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  // Don't invoke handleResize here, just pass the reference
  window.addEventListener("resize", handleResize);

  // Be sure to remove the event listener when the component unmounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency arra
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#333333",
        padding: 0,
      }}
    >
      <BurgerMenu isOpen={isOpen} handleOpen={handleOpen} />
      <Row>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Col
          className="text-light py-2 text-center"
          style={{ height: "5vh", backgroundColor: "black" }}
        >
          <p>This is a notification bar</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <HStack
            className="justify-content-end"
            style={{
              marginRight: "2%",
            }}
          >
            <div className="mt-2">
              <SearchBox />
            </div>

            <button
              className="btn btn-link"
              style={{
                fontSize: "1.5em",
                color: "white",
              }}
              onClick={() => navigate("/cart")}
            >
              {/* add a badge on cart icon */}

              <CartIcon quantity={cartQuantity} />
            </button>

            {screenWidth < 980 && (
              <button
                className="btn btn-link"
                style={{
                  fontSize: "1.5em",
                  color: "white",
                }}
                onClick={handleOpen}
              >
                <FiAlignJustify />
              </button>
            )}
          </HStack>
        </Col>
      </Row>
      <Row>
        <Col
          md={2}
          className="sidebar-container"
          style={{
            height: "100vh",
            overflowY: "hidden",
            position: "fixed",
            marginBottom: "10%",
            paddingBottom: "10%",
          }}
        >
          <Sidebar />
        </Col>
        <Col md={9} className="main-content mt-3">
          {children}
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "25%",
        }}
      >
        <Footer />
      </Row>
    </Container>
  );
};

export default MainLayout;
