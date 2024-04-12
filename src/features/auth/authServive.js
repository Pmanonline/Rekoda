// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const baseUrl =
//   process.env.NODE_ENV !== "production"
//     ? "http://127.0.0.1:5000/"
//     : import.meta.env.VITE_SERVER_URL;
// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl,
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.userToken;
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//         return headers;
//       }
//     },
//   }),
//   endpoints: (build) => ({
//     getUserDetails: build.query({
//       query: () => ({
//         url: "api/user/profile",
//         method: "GET",
//       }),
//     }),
//   }),
// });
// // export react hook
// export const { useGetUserDetailsQuery } = authApi;
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // Define the base URL
// const baseUrl = process.env.NODE_ENV !== "production"
//     ? "http://127.0.0.1:5000/"
//     : import.meta.env.VITE_SERVER_URL;
// // Create the API slice
// export const authApi = createApi({
//     reducerPath: "authApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl,
//         prepareHeaders: (headers, { getState }) => {
//             // Retrieve the token from the state
//             const token = getState().auth.userToken;
//             if (token) {
//                 headers.set("Authorization", `Bearer ${token}`);
//             }
//             return headers;
//         },
//     }),
//     endpoints: (build) => ({
//         loginUser: build.mutation({
//             query: (credentials) => ({
//                 url: "account/login",
//                 method: "POST",
//                 body: credentials,
//             }),
//         }),
//         getUserDetails: build.query({
//             query: () => ({
//                 url: "api/user/profile",
//                 method: "GET",
//             }),
//         }),
//     }),
// });
// // Extract hooks for each endpoint
// export const { useLoginUserMutation, useGetUserDetailsQuery } = authApi;
// export default authApi;

const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://127.0.0.1:3000/"
    : import.meta.env.VITE_SERVER_URL;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Retrieve the token from the state
      const token = getState().auth.userToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (credentials) => ({
        url: "account/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUserDetails: build.query({
      query: () => ({
        url: "api/user/profile",
        method: "GET",
      }),
    }),
  }),
  // Error handling logic
  keepUnusedDataFor: 300, // Keep data for 5 minutes even if it's unused
  onError: (error) => {
    console.error("An error occurred:", error);
    // You can handle errors globally here
  },
});
