import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ email, password });
      console.log(body);
      const data = await axios.post(
        "http://localhost:8000/user/login",
        body,
        config
      );
      console.log(data);

      localStorage.setItem("token", data.token);

      return data.token;
    } catch (err) {
      console.log("error " + err);
      return rejectWithValue(err.error);
    }
  }
);

export const userSignup = createAsyncThunk(
  "user/signup",
  async (
    { first_name, last_name, phone, email, password },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        first_name,
        last_name,
        phone,
        email,
        password,
      });

      const data = await axios.post(
        "http://localhost:8000/user/signup",
        body,
        config
      );
      console.log(data);

      localStorage.setItem("token", data.token);

      return data.token;
    } catch (error) {
      const errors = JSON.stringify(error.response.data);
      console.log(errors);
      return errors.error;
    }
  }
);
