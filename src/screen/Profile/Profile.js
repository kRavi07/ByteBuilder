import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../../component/MainLayout";
import ProfileMenu from "./ProfileMenu";
import { Col } from "react-bootstrap";
const Profile = () => {
  return (
    <MainLayout>
      <ProfileMenu />
      <Col sm={12} className="mt-5">
        <Outlet />
      </Col>
    </MainLayout>
  );
};

export default Profile;
