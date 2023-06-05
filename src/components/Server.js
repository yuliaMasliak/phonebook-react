import axios from 'axios';

const baseUrl = 'https://notes-server-website.onrender.com/persons';

const getAllContacts = () => {
  const request = axios.get(baseUrl);
  return request;
};
const addContact = (contact) => {
  const request = axios.post(baseUrl, contact);
  return request;
};

const deleteContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateContact = (contact) => {
  const request = axios.put(`${baseUrl}/${contact.id}`, contact);
  return request;
};

export { addContact, deleteContact, updateContact, getAllContacts };
