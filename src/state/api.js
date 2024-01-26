import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../Util/getAuthToken";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.29.62:5000/api" }), // Replace with your API base URL
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    addToCartForGuest: builder.mutation({
      query: (items) => ({
        url: "/guestAddToCart",
        method: "POST",
        body: items,
      }),
    }),

    addToCart: builder.mutation({
      query: (items) => ({
        url: "/addProductToCart",
        method: "POST",
        body: items,
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    getCartItems: builder.query({
      query: () => ({
        url: "/getCartItems",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    getCartItemsQuantity: builder.query({
      query: () => ({
        url: "/getCartQuantity",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    getAddress: builder.query({
      query: () => ({
        url: "/getAddress",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    addAddress: builder.mutation({
      query: (address) => ({
        url: "/addAddress",
        method: "POST",
        body: address,
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    updateAddress: builder.mutation({
      query: (address) => ({
        url: `/updateAddress/${address._id}`,
        method: "POST",
        body: address,
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/deleteAddress/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    getWishlist: builder.query({
      query: () => ({
        url: "/getWishlist",
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),

    addWishlist: builder.mutation({
      query: (product) => ({
        url: "/addWishlist",
        method: "POST",
        body: product,
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
    }),
    removeProductFromWishlist: builder.mutation({
      query: (id) => ({
        url: `/removeFromWishlist/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }),
      onSuccess: (api) => {
        api.invalidateQueries("getWishlist"); // Replace with your query key
      },
    }),

    getCartItemsForGuest: builder.query({
      query: (id) => `/getCartForGuest/${id}`,
    }),

    getCategory: builder.query({
      query: () => "categories",
    }),
    getCompany: builder.query({
      query: (id) => `companies`,
    }),
    getCompanyById: builder.query({
      query: (id) => `companies/${id}`,
    }),
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `product/${id}`,
    }),
    getOrders: builder.query({
      query: () => "order",
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetProductsQuery,
  useGetOrdersQuery,
  useGetCompanyByIdQuery,
  useGetCompanyQuery,
  useGetProductByIdQuery,
  useSignupMutation,
  useLoginMutation,
  useAddToCartForGuestMutation,
  useGetCartItemsForGuestQuery,
  useAddToCartMutation,
  useGetCartItemsQuery,
  useGetAddressQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
  useLazyGetAddressQuery,
  useAddWishlistMutation,
  useGetWishlistQuery,
  useRemoveProductFromWishlistMutation,
  useGetCartItemsQuantityQuery,
} = api;
