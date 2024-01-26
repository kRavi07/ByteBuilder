import React, { useState } from "react";
import { Row, Col, Card, Spinner, Form, Button } from "react-bootstrap";
import { HStack } from "../../component/BootstrapStack";
import MainLayout from "../../component/MainLayout";
import { COLOR } from "../../Util/color";
import CartProduct from "./CartProduct";
import {
  useGetCartItemsForGuestQuery,
  useGetCartItemsQuery,
  useGetAddressQuery,
  useAddAddressMutation,
} from "../../state/api";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { toast } from "react-toastify";
const Cart = () => {
  const guestId = Cookies.get("guestId");

  const [modalOpen, setModalOpen] = useState(false);
  const [isAddressAdded, setISAddressAdded] = useState(false);

  const {
    data,
    isLoading: isLoadingForGuest,
    isSuccess: isLoadedForGuest,
  } = useGetCartItemsForGuestQuery(guestId);
  const {
    data: userCartItems,
    isLoading: isLoadingForUser,
    isSuccess: isLoadedForUser,
  } = useGetCartItemsQuery();
  const { data: address } = useGetAddressQuery();
  const [addAddress] = useAddAddressMutation();
  const auth = useSelector((state) => state.auth);

  const [addressData, setAddressData] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    landmark: "",
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setISAddressAdded(true);
    try {
      const res = await addAddress(addressData);
      console.log(res);
      const { data, error } = res;
      console.log(error.data.error);
      if (data && data.message && !error) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (error.data) {
        toast.warn(error.data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.danger("Something went wrong. ", {
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
    } finally {
      handleModalClose();
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(!modalOpen);
    setAddressData({
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
      landmark: "",
    });
    setISAddressAdded(false);
  };

  const filteredAddresses = address?.filter((address) => address.isDefault)[0];
  console.log(filteredAddresses);

  const handleAddAddress = async () => {
    try {
    } catch (error) {}
  };

  return (
    <MainLayout>
      <Row className="mx-4">
        <Col md={8}>
          <Card
            className="text-light my-2"
            style={{
              backgroundColor: "#000",
            }}
          >
            <Card.Body>
              <HStack
                style={{
                  justifyContent: "space-between",
                }}
              >
                {auth.isAuthenticated ? (
                  address && address?.length <= 0 ? (
                    <>
                      <p>Please add a address.</p>
                      <button
                        className="btn btn-link"
                        style={{
                          color: "white",
                          border: "1px solid #D3D3D3",
                          textDecoration: "none",
                          hover: {
                            color: "red",
                          },
                        }}
                        onClick={handleModalOpen}
                      >
                        Add
                      </button>
                    </>
                  ) : (
                    <>
                      <p>
                        Delivery to : <strong>Ravi KANt Kumar, 60000990</strong>
                        {filteredAddresses &&
                          `${filteredAddresses.address1}, ${filteredAddresses.city}, ${filteredAddresses.state}, ${filteredAddresses.zipcode} `}
                      </p>
                      <button
                        className="btn btn-link"
                        style={{
                          color: "white",
                          border: "1px solid #D3D3D3",
                          textDecoration: "none",
                          hover: {
                            color: "red",
                          },
                        }}
                      >
                        Change
                      </button>
                    </>
                  )
                ) : (
                  <>
                    Address : Please login to add address.{" "}
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "underline",
                        color: "white",
                      }}
                    >
                      Login
                    </Link>
                  </>
                )}
              </HStack>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#000",
            }}
            className="text-light"
          >
            {(isLoadingForGuest && !isLoadedForGuest) ||
            (!isLoadedForUser && isLoadedForUser) ? (
              <>
                <Card.Body>
                  <HStack
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    (
                    <Spinner />)
                  </HStack>
                </Card.Body>
              </>
            ) : userCartItems?.cart || data?.data?.items ? (
              <CartProduct
                products={
                  auth.isAuthenticated && userCartItems.cart
                    ? userCartItems.cart
                    : data?.data.items
                }
              />
            ) : (
              <Card.Body>
                <HStack
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <p>No Product in Cart</p>
                </HStack>
              </Card.Body>
            )}
          </Card>
        </Col>
        <Col md={4}>
          <Card
            style={{
              backgroundColor: "#000",
              color: "white",
            }}
            className="mt-1"
          >
            <Card.Header>PRICE DETAILS</Card.Header>
            <hr />
            <Card.Body>
              <HStack style={{ justifyContent: "space-between" }}>
                <p>Price (1 item)</p>
                <p>$25.99</p>
              </HStack>
              <HStack style={{ justifyContent: "space-between" }}>
                <p>Delivery Charges</p>
                <p className="text-success">Free</p>
              </HStack>
              <HStack style={{ justifyContent: "space-between" }}>
                <p>Discount</p>
                <p className="text-success">-$0.00</p>
              </HStack>

              <hr />
              <HStack style={{ justifyContent: "space-between" }}>
                <p>
                  <strong>Total Amount </strong>
                </p>
                <p>
                  <strong>$25.99</strong>
                </p>
              </HStack>
              <hr />
              <HStack
                style={{
                  justifyContent: "start",
                  paddingBottom: "0",
                  paddingTop: "0",
                }}
              >
                <p className="text-success">
                  You will save $0.00 on this order
                </p>
              </HStack>

              <hr />

              <HStack
                style={{
                  justifyContent: "center",
                }}
              >
                {auth.isAuthenticated ? (
                  <button
                    className="btn btn-link px-5"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      backgroundColor: COLOR.secondary,
                      paddingInline: "2em",
                      borderRadius: "0",
                      paddingTop: "0.5em",
                      paddingBottom: "0.5em",
                    }}
                  >
                    Place Order
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-link px-5"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        backgroundColor: COLOR.secondary,
                        paddingInline: "2em",
                        borderRadius: "0",
                        paddingTop: "0.5em",
                        paddingBottom: "0.5em",
                      }}
                    >
                      Please Login first
                    </button>
                  </>
                )}
              </HStack>
            </Card.Body>
          </Card>
        </Col>

        <Modal
          title="Title"
          open={modalOpen}
          onOk={handleSubmit}
          confirmLoading={isAddressAdded}
          onCancel={handleModalClose}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="address1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control
                type="text"
                name="address1"
                value={addressData.address1}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="address2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                type="text"
                name="address2"
                value={addressData.address2}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={addressData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={addressData.state}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="zipcode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="zipcode"
                value={addressData.zipcode}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={addressData.country}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={addressData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="landmark">
              <Form.Label>Landmark</Form.Label>
              <Form.Control
                type="text"
                name="landmark"
                value={addressData.landmark}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="setAsDefault">
              <Form.Check
                type="checkbox"
                name="isDefault"
                label="Set as Primary Address"
                checked={addressData.isDefault}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal>
      </Row>
    </MainLayout>
  );
};

export default Cart;
