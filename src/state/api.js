import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../Util/getAuthToken";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.29.62:5000/api",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }), // Replace with your API base URL
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
      }),
    }),

    getCartItems: builder.query({
      query: () => ({
        url: "/getCartItems",
        method: "GET",
      }),
    }),

    getCartItemsQuantity: builder.query({
      query: () => ({
        url: "/getCartQuantity",
        method: "GET",
        credentials: "include",
      }),
    }),

    getAddress: builder.query({
      query: () => ({
        url: "/getAddress",
        method: "GET",
      }),
    }),

    addAddress: builder.mutation({
      query: (address) => ({
        url: "/addAddress",
        method: "POST",
        body: address,
      }),
    }),

    updateAddress: builder.mutation({
      query: (address) => ({
        url: `/updateAddress/${address._id}`,
        method: "POST",
        body: address,
      }),
    }),

    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/deleteAddress/${id}`,
        method: "DELETE",
      }),
    }),

    getWishlist: builder.query({
      query: () => ({
        url: "/getWishlist",
        method: "GET",
      }),
    }),

    addWishlist: builder.mutation({
      query: (product) => ({
        url: "/addWishlist",
        method: "POST",
        body: product,
      }),
    }),
    removeProductFromWishlist: builder.mutation({
      query: (id) => ({
        url: `/removeFromWishlist/${id}`,
        method: "DELETE",
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
