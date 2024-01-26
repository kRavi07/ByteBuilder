import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    role: null,
    token: null,
    errorMessage: "",
    cart: 0,
    isError: false,
  },
  reducers: {
    setCartQuantity: (state, action) => {
      state.cart = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.token = action.payload.token;
      localStorage.setItem("user-token", action.payload.token);
    },
    loadUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.token = localStorage.getItem("user-token");
    },
    clearUser: (state) => {
      localStorage.removeItem("user-token");
      console.log("loggedout");
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
    },
  },
});

export const { setUser, clearUser, loadUser, setCartQuantity } =
  authSlice.actions;

export default authSlice.reducer;
