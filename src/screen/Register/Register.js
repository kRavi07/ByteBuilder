import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Center, HStack, VStack } from "../../component/BootstrapStack";
import MainLayout from "../../component/MainLayout";
import "./register.css";
import { COLOR } from "../../Util/color";
import { FiArrowRight } from "react-icons/fi";
import { userSignup } from "../../state/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useSignupMutation } from "../../state/api";
const Register = () => {
  const [signup] = useSignupMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    confirm_password: "",
  });

  const { first_name, last_name, phone, email, password, confirm_password } =
    formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  //const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  //const token = useSelector((state) => state.user.token);
  //const isLoading = useSelector((state) => state.user.isLoading);
  //const isError = useSelector((state) => state.user.isError);
  //const isLoaded = useSelector((state) => state.user.isLoaded);
  //const message = useSelector((state) => state.user.message);
  //const errorMessage = useSelector((state) => state.user.errorMessage);

  const onSubmit = async () => {
    try {
      if (password !== confirm_password) {
        toast.error("Confirm Password doesn't match", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        return;
      }

      const credentials = formData;

      const res = await signup(credentials);
      console.log(res);

      if (res.data.status === "ok") {
        toast.success(res.data.message, {
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

      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again", {
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
  };

  return (
    <MainLayout>
      <Row
        style={{
          width: "100%",
          paddingBottom: "10%",

          backgroundColor: "#333333",
        }}
        className="rounded"
      >
        <Col md={7} className="illustration-col text-center">
          <Center>
            <img
              src="https://via.placeholder.com/750x600"
              alt="Illustration of a computer"
            />
          </Center>
        </Col>
        <Col
          md={5}
          className="form-col"
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <VStack
            style={{
              width: "100%",
              paddingLeft: "15%",
              paddingRight: "15%",
              marginTop: "6%",
            }}
          >
            <Center className="mt-2 mb-4">
              <h2 className="text-dark">Become a member !</h2>
            </Center>

            <HStack
              style={{
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Form.Group
                className="mb-3 mx-1"
                controlId="formBasicEmail"
                style={{
                  width: "48%",
                }}
              >
                <Form.Label className="text-dark">First Name</Form.Label>
                <Form.Control
                  type="text"
                  className="login-input"
                  placeholder="Evan Jhon"
                  name="first_name"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 mx-1"
                controlId="formBasicEmail"
                style={{
                  width: "48%",
                }}
              >
                <Form.Label className="text-dark">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  className="login-input"
                  placeholder="Evan Jhon"
                  name="last_name"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </Form.Group>
            </HStack>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-dark">Email address</Form.Label>
              <Form.Control
                type="email"
                className="login-input"
                placeholder="abc@xyz.com"
                name="email"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-dark">Mobile Number</Form.Label>
              <Form.Control
                type="mobile"
                className="login-input"
                placeholder="912345678"
                name="phone"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </Form.Group>

            <HStack
              style={{
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Form.Group
                className="mb-3 mx-1"
                controlId="formBasicPassword"
                style={{
                  width: "48%",
                }}
              >
                <Form.Label className="text-dark">Password</Form.Label>
                <Form.Control
                  type="password"
                  className="login-input"
                  placeholder="*************"
                  name="password"
                  onChange={(event) => {
                    onChange(event);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 mx-1"
                controlId="formBasicPassword"
                style={{
                  width: "48%",
                }}
              >
                <Form.Label className="text-dark">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  className="login-input"
                  placeholder="*************"
                  name="confirm_password"
                  onChange={(event) => {
                    onChange(event);
                  }}
                />
              </Form.Group>
            </HStack>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Agree with terms and condition"
              />
            </Form.Group>
            <button
              className="btn btn-link text-dark"
              style={{
                backgroundColor: COLOR.secondary,
                width: "80%",
                margin: "auto",
                textDecoration: "none",
              }}
              onClick={() => onSubmit()}
            >
              Submit <FiArrowRight />
            </button>
            <Center className="mt-2">
              <p className="text-dark">
                have an account?{" "}
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: COLOR.secondary,
                  }}
                >
                  Login
                </a>
              </p>
            </Center>
          </VStack>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Register;
