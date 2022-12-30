import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/api/users",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "/api/users/me",
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const { useSignupMutation, useProfileQuery } = authApiSlice;
