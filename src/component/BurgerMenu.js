import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./style/burgerMenu.css";
import { Nav } from "react-bootstrap";
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
// import the user icon
import { HStack } from "./BootstrapStack";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearUser } from "../state/slices/authSlice";

const BurgerMenu = ({ isOpen, handleOpen }) => {
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

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Menu
      isOpen={isOpen}
      onOpen={handleOpen}
      customBurgerIcon={false}
      noOverlay={true}
    >
      <Nav
        className="flex-column"
        style={{
          alignContent: "left",
          justifyContent: "start",
        }}
      >
        <div className="mb-3 mx-3">
          <SiAsciinema
            style={{
              fontSize: "2.5em",
            }}
          />
        </div>

        <Nav.Link href="#home" className="navLink menu-item">
          <FaHome className="mx-2" />
          Home
        </Nav.Link>
        <Nav.Link href="#devices" className="navLink menu-item">
          <FaDesktop className="mx-2" />
          Devices
        </Nav.Link>
        <Nav.Link href="#accessories" className="navLink menu-item">
          <FaHeadphones className="mx-2" />
          Accessories
        </Nav.Link>
        {auth.isAuthenticated ? (
          <>
            <Nav.Link className="navLink" onClick={() => navigate("/profile")}>
              <FaUser className="mx-2" />
              My Account
            </Nav.Link>
            <Nav.Link href="#track-order" className="navLink">
              <FaShoppingBasket className="mx-2" />
              Track Order
            </Nav.Link>

            <Nav.Link className="navLink" onClick={handleLogout}>
              <FiLogOut className="mx-2" />
              Logout
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link className="navLink">
              <FiLogOut className="mx-2" onClick={handleLogin} />
              Login
            </Nav.Link>
          </>
        )}
        <Nav.Link href="#about-us" className="navLink menu-item">
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
    </Menu>
  );
};

export default BurgerMenu;
