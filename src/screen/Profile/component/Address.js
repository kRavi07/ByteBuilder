import React, { useState } from "react";
import {
  Col,
  Row,
  Accordion,
  Card,
  Button,
  Form,
  useAccordionButton,
  Spinner,
} from "react-bootstrap";
import { FiPlus, FiTrash } from "react-icons/fi";
import { HStack } from "../../../component/BootstrapStack";
import { COLOR } from "../../../Util/color";
import { BiEdit } from "react-icons/bi";
import "./address.css";
import {
  useAddAddressMutation,
  useDeleteAddressMutation,
  useGetAddressQuery,
  useUpdateAddressMutation,
  useLazyGetAddressQuery,
} from "../../../state/api";
import { toast } from "react-toastify";
const Address = () => {
  const [addAddress] = useAddAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
  const [deleteAddress] = useDeleteAddressMutation();
  const { data: address, refetch, isLoading } = useGetAddressQuery();

  const [editAddress, setEditAddress] = useState(null);

  const handleEdit = (addr) => {
    setEditAddress(addr);
    console.log(editAddress);
  };

  const [addressData, setAddressData] = useState({
    name: "",
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

    if (editAddress) {
      setEditAddress((prevEditAddress) => ({
        ...prevEditAddress,
        [name]: value,
      }));
    } else {
      setAddressData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCheckBox = (e) => {
    console.log(e.target.value);
    setAddressData({ ...addressData, isDefault: !isDefault });
  };

  const {
    name,
    address1,
    address2,
    city,
    zipcode,
    state,
    phone,
    landmark,
    isDefault,
    country,
  } = addressData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(addressData);

    try {
      const res = await addAddress(addressData);
      console.log(res);
      const { data, error } = res;
      console.log(data.message);
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
      clearForm();
    }
  };

  const handleUpdateAddress = async (e) => {
    try {
      const res = await updateAddress(editAddress);
      console.log(res);
      const { data, error } = res;
      console.log(data.message);
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
      clearForm();
    }
  };

  const clearForm = () => {
    setAddressData({
      name: "",
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
  };

  const handleDeleteAddress = async (id) => {
    try {
      const res = await deleteAddress(id);
      const { data, error } = res;
      console.log(data.message);
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

      refetch();
    } catch (error) {}
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.info(" this")
    );

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        style={{
          backgroundColor: "none",
          border: "none",
          background: "none",
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <Col sm={12} className="px-5 addressCol">
      <Row className="addressWrapper">
        <Col sm={12}>
          <Accordion flush className="text-primary">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FiPlus
                  style={{
                    fontSize: "1.2em",
                    marginRight: "0.5em",
                  }}
                />{" "}
                {"  "} Add New Address
              </Accordion.Header>
              <Accordion.Body
                style={{
                  backgroundColor: "rgb(190,230,210)",
                  opacity: "0.8",
                }}
              >
                <Row
                  style={{
                    width: "80%",
                  }}
                >
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        onChange={handleChange}
                        value={name}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Phone Number"
                        name="phone"
                        onChange={handleChange}
                        value={phone}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Address 1</Form.Label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Enter Address"
                        name="address1"
                        onChange={handleChange}
                        value={address1}
                      ></textarea>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Address 2</Form.Label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Enter Address"
                        name="address2"
                        onChange={handleChange}
                        value={address2}
                      ></textarea>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter City"
                        name="city"
                        value={city}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter State"
                        name="state"
                        value={state}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Zip Code"
                        name="zipcode"
                        value={zipcode}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Country"
                        name="country"
                        value={country}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group controlId="landmark">
                      <Form.Label>Landmark</Form.Label>
                      <Form.Control
                        type="text"
                        name="landmark"
                        value={landmark}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={12}>
                    <Form.Group controlId="setAsDefault">
                      <Form.Check
                        type="checkbox"
                        name="isDefault"
                        label="Set as Primary Address"
                        checked={isDefault}
                        onChange={handleCheckBox}
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={6} className="mt-3">
                    <button
                      className="btn btn-link"
                      style={{
                        backgroundColor: COLOR.secondary,
                        color: "white",
                        width: "50%",
                        paddiningInline: "2em",
                        paddingBlock: "0.5em",
                        fontWeight: "bold",
                        borderRadius: "0",
                        textDecoration: "none",
                      }}
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-link"
                      style={{
                        color: COLOR.secondary,
                        textDecoration: "none",
                        fontSize: "1.2em",
                        textTransform: "capitalize",
                      }}
                      onClick={clearForm}
                    >
                      Cancel
                    </button>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col sm={12}>
          <Accordion className="text-primary" flush>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {address &&
                  address?.map((addr) => (
                    <>
                      <Card className="my-3">
                        <Card.Header>
                          <HStack
                            style={{
                              justifyContent: "space-between",
                            }}
                          >
                            <div>
                              <p>
                                {addr.name && addr.name}{" "}
                                {addr.address1 && addr.address1}
                                {addr.city && addr.city}
                                {addr.zipcode && addr.zipcode}
                              </p>
                            </div>
                            <HStack>
                              <CustomToggle eventKey={addr._id}>
                                <BiEdit
                                  className="mx-2"
                                  style={{
                                    fontSize: "1.2em",
                                  }}
                                  onClick={() => handleEdit(addr)}
                                />
                              </CustomToggle>

                              <button className="btn btn-link">
                                <FiTrash
                                  className="mx-2"
                                  style={{
                                    fontSize: "1.2em",
                                  }}
                                  onClick={() => handleDeleteAddress(addr._id)}
                                />
                              </button>
                            </HStack>
                          </HStack>
                        </Card.Header>
                        <Accordion.Collapse eventKey={addr._id}>
                          <Card.Body
                            style={{
                              backgroundColor: "rgb(190,230,210)",
                            }}
                          >
                            <Row
                              style={{
                                width: "80%",
                              }}
                            >
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    onChange={handleChange}
                                    value={
                                      editAddress !== null
                                        ? editAddress?.name
                                        : addr.name
                                    }
                                  />
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    name="phone"
                                    onChange={handleChange}
                                    value={
                                      editAddress !== null
                                        ? editAddress?.phone
                                        : addr.phone
                                    }
                                  />
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Address 1</Form.Label>
                                  <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Enter Address"
                                    name="address1"
                                    onChange={handleChange}
                                    value={
                                      editAddress !== null
                                        ? editAddress?.address1
                                        : addr.address1
                                    }
                                  ></textarea>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Address 2</Form.Label>
                                  <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Enter Address"
                                    name="address2"
                                    onChange={handleChange}
                                    value={
                                      editAddress !== null
                                        ? editAddress?.address2
                                        : addr.address2
                                    }
                                  ></textarea>
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>City</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter City"
                                    name="city"
                                    value={
                                      editAddress !== null
                                        ? editAddress?.city
                                        : addr.city
                                    }
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>State</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter State"
                                    name="state"
                                    value={
                                      editAddress !== null
                                        ? editAddress?.state
                                        : addr.state
                                    }
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Zip Code</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Zip Code"
                                    name="zipcode"
                                    value={
                                      editAddress !== null
                                        ? editAddress?.zipcode
                                        : addr.zipcode
                                    }
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col sm={6}>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Country</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Country"
                                    name="country"
                                    value={
                                      editAddress !== null
                                        ? editAddress?.country
                                        : addr.country
                                    }
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>
                              <Col sm={12}>
                                <Form.Group controlId="landmark">
                                  <Form.Label>Landmark</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="landmark"
                                    value={
                                      editAddress !== null
                                        ? editAddress?.landmark
                                        : addr.landmark
                                    }
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Col>

                              <Col sm={6} className="mt-3">
                                <button
                                  className="btn btn-link"
                                  style={{
                                    backgroundColor: COLOR.secondary,
                                    color: "white",
                                    width: "50%",
                                    paddiningInline: "2em",
                                    paddingBlock: "0.5em",
                                    fontWeight: "bold",
                                    borderRadius: "0",
                                    textDecoration: "none",
                                  }}
                                  onClick={handleUpdateAddress}
                                >
                                  Save
                                </button>
                                <button
                                  className="btn btn-link"
                                  style={{
                                    color: COLOR.secondary,
                                    textDecoration: "none",
                                    fontSize: "1.2em",
                                    textTransform: "capitalize",
                                  }}
                                  onClick={clearForm}
                                >
                                  Cancel
                                </button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </>
                  ))}
              </>
            )}
          </Accordion>
        </Col>
      </Row>
    </Col>
  );
};

export default Address;
