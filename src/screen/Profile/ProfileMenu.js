import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  FaHome,
  FaDesktop,
  FaShoppingBasket,
  FaInfoCircle,
} from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FiMapPin, FiHeart } from "react-icons/fi";
import "./profile-menu.css";
import { MdOutlineNotificationsActive } from "react-icons/md";

import "./profile-menu.css";
import { NavLink } from "react-router-dom";

function ProfileMenu() {
  return (
    <Navbar
      bg="#333333"
      expand="lg"
      className="text-light .d-none .d-lg-block .d-xl-block "
    >
      <Nav id="profileMenu">
        <NavLink
          href="#home"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#7600dc",
                  paddingInline: "1.1rem",
                  paddingBlock: "0.5rem",
                  textDecoration: "none",
                }
              : { color: "#fff" }
          }
          to=""
        >
          <FaHome className="mx-2" />
          Dashboard
        </NavLink>
        <NavLink
          href="#devices"
          className={({ isActive }) =>
            isActive ? "profileNavLink-active" : "profileNavLink"
          }
          to="my-order"
        >
          <RiShoppingBasketLine className="mx-2" />
          My Order
        </NavLink>
        <NavLink
          href="#accessories"
          className={({ isActive }) =>
            isActive ? "profileNavLink-active" : "profileNavLink"
          }
          to="address"
        >
          <FiMapPin className="mx-2" />
          Address
        </NavLink>
        <NavLink
          href="#my-account"
          className={({ isActive }) =>
            isActive ? "profileNavLink-active" : "profileNavLink"
          }
          to="my-wishlist"
        >
          <FiHeart className="mx-2" />
          My Wishlist
        </NavLink>
        <NavLink
          href="#track-order"
          className={({ isActive }) =>
            isActive ? "profileNavLink-active" : "profileNavLink"
          }
          to="track-order"
        >
          <FaShoppingBasket className="mx-2" />
          Track Order
        </NavLink>
        <NavLink
          href="#about-us"
          className={({ isActive }) =>
            isActive ? "profileNavLink-active" : "profileNavLink"
          }
          to="edit-profile"
        >
          <MdOutlineNotificationsActive className="mx-2" />
          Notification
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default ProfileMenu;
