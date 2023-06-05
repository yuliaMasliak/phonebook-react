import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

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

export { addContact, deleteContact, updateContact };
