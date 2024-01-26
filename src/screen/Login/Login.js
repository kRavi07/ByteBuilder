import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Center, VStack } from "../../component/BootstrapStack";
import MainLayout from "../../component/MainLayout";
import "./login.css";
import { FiArrowRight } from "react-icons/fi";
import { COLOR } from "../../Util/color";
import { useLoginMutation } from "../../state/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../state/slices/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event?.target?.name]: event?.target?.value || "",
    });
  };

  const [login] = useLoginMutation();

  const onSubmit = async () => {
    if (!email || email === "" || !password || password === "") {
      toast.error("Please fill all required fields", {
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
    alert("ok");

    try {
      const credential = {
        email: email,
        password: password,
      };
      const { data } = await login(credential);
      console.log(data);

      if (data?.data) {
        const payload = {
          user: {
            id: data.data.id,
            firstName: data.data.first_name,
            lastName: data.data.last_name,
            email: data.data.email,
            phone: data.data.email,
          },
          role: data.data.role,
          token: data.token,
        };
        dispatch(setUser(payload));

        toast.success(data?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => {
          if (data.token && data.data.role === "user") {
            navigate("/");
          }
        }, 1000);
      } else if (data?.error) {
        toast.error(data?.error?.data?.message, {
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
    } catch (error) {
      console.log(error);
      const err = error?.data?.message;
      if (err) {
        toast.error("Something went wrong", {
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
            backgroundColor: "#D93B34",
          }}
        >
          <VStack
            style={{
              width: "100%",
              paddingLeft: "15%",
              paddingRight: "15%",
              marginTop: "20%",
            }}
          >
            <Center className="mt-2 mb-4">
              <h2 className="text-light">Welcome back</h2>
            </Center>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Email address</Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control
                type="password"
                className="login-input"
                placeholder="*************"
                name="password"
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button
              className="btn btn-link text-light"
              style={{
                backgroundColor: "#333333",
                width: "80%",
                margin: "auto",
                textDecoration: "none",
              }}
              onClick={() => {
                onSubmit();
              }}
            >
              Submit <FiArrowRight />
            </button>
            <Center className="mt-2">
              <p className="text-light">
                Don't have an account?{" "}
                <Link
                  to={"/register"}
                  style={{
                    textDecoration: "none",
                    color: COLOR.black,
                  }}
                >
                  Register
                </Link>
              </p>
            </Center>
          </VStack>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Login;
