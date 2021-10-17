import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contactsApi";
import { filter } from "./contacts/contacts-reducer";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV === "development",
});
