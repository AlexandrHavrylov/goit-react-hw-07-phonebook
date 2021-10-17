import React from "react";
import { ImAddressBook } from "react-icons/im";
import { DeleteBtn } from "styles/Contacts.styled";
import { ContactInfo } from "styles/Contacts.styled";
import { Contact } from "styles/Contacts.styled";
import { ContactsList } from "styles/Contacts.styled";

export default function Contacts({ contacts }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactInfo>
            <ImAddressBook /> {name}: {number}
          </ContactInfo>
          <DeleteBtn type="button">Delete</DeleteBtn>
        </Contact>
      ))}
    </ContactsList>
  );
}
