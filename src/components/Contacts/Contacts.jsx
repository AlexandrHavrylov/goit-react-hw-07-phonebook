import React from "react";

import { useGetAllContactsQuery } from "redux/contacts/contactsApi";

const Contacts = () => {
  const { data, error, isLoading } = useGetAllContactsQuery();

  // const getFilterContacts = (allContacts, filter) => {
  //   const normalizedFilterValue = filter.toLowerCase().trim();

  //   const filtredContacts = allContacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilterValue)
  //   );
  //   return filtredContacts;
  // };

  // const contacts = useSelector((state) =>
  //   getFilterContacts(state.contacts.items, state.contacts.filter)
  // );
  // const dispatch = useDispatch();

  return (
    <div>
      <h2>Contacts</h2>
      <Contacts contacts={data}></Contacts>
    </div>
  );
};

export default Contacts;
