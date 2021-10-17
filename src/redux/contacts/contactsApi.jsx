import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://616c2e3c37f997001745d582.mockapi.io",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    createContacts: builder.mutation({
      query: ({ name, number }) => ({
        url: "/contacts",
        method: "POST",
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useCreateContactsMutation,
  useDeleteContactMutation,
} = contactsApi;
