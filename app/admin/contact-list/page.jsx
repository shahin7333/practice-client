import React from "react";
import ContactList from "../../../components/admin/contact-list/ContactList";
import axiosInstance from "../../../services/axiosInstance";

const page = async () => {
  const contacts = await axiosInstance.get("/contacts");
  return <ContactList contactData={contacts.data.payload.messages} />;
};

export default page;
