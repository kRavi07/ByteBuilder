import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  FaHome,
  FaDesktop,
  FaHeadphones,
  FaUser,
  FaShoppingBasket,
  FaInfoCircle,
} from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { SiAsciinema } from "react-icons/si";
import { FiLogOut } from "react-icons/fi"; // import the user icon
import "./style/sidebar.css";
import { HStack } from "./BootstrapStack";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearUser } from "../state/slices/authSlice";
function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const role = useSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(clearUser());

    if (!role || !isAuthenticated || !localStorage.getItem("user-token")) {
      toast.success("You have been logged out.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    setTimeout(() => {
      if (!localStorage.getItem("user-token")) {
        navigate("/login");
      }
    }, 1000);
  };

  return (
    <Navbar
      bg="#333333"
      expand="lg"
      className="text-light .d-none .d-lg-block .d-xl-block"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="flex-column "
          style={{
            alignContent: "left",
            justifyContent: "start",
          }}
        >
          <div className="mb-3 mx-4">
            <SiAsciinema
              style={{
                fontSize: "2.5em",
              }}
            />
          </div>

          <Nav.Link className="navLink" onClick={() => navigate("/")}>
            <FaHome className="mx-2" />
            Home
          </Nav.Link>
          <Nav.Link
            className="navLink"
            onClick={() => navigate("/build-your-own")}
          >
            <FaDesktop className="mx-2" />
            Build Your PC
          </Nav.Link>
          <Nav.Link className="navLink" onClick={() => navigate("/products")}>
            <FaHeadphones className="mx-2" />
            Accessories
          </Nav.Link>
          {auth.isAuthenticated && (
            <>
              <Nav.Link
                className="navLink"
                onClick={() => navigate("/profile")}
              >
                <FaUser className="mx-2" />
                My Account
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/profile/track-order")}
                className="navLink"
              >
                <FaShoppingBasket className="mx-2" />
                Track Order
              </Nav.Link>

              <Nav.Link href="#" onClick={handleLogout} className="navLink">
                <FiLogOut className="mx-2" />
                Logout
              </Nav.Link>
            </>
          )}

          <Nav.Link href="#about-us" className="navLink">
            <FaInfoCircle className="mx-2" />
            About Us
          </Nav.Link>

          <hr className="my-4" />

          <div className="mt-2">
            <HStack style={{ justifyContent: "space-between" }}>
              <AiFillFacebook className="mx-2 socialLink" />
              <AiFillTwitterCircle className="mx-2 socialLink" />
              <AiFillInstagram className="mx-2 socialLink" />
            </HStack>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
