import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import { addContact, deleteContact, updateContact } from './components/Server';
import Error from './components/Error';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [success, setSuccess] = useState(true);
  let contact = {
    name: '',
    phone: ''
  };
  const inputName = useRef();
  const inputPhone = useRef();
  const inputSearch = useRef();
  const inputResult = useRef();

  const handleSearch = (event) => {
    let newSearch = searchResult.concat(event.target.value);
    setSearchResult(newSearch);
    inputResult.current.innerHTML = '';
  };

  const handleInputName = (event) => {
    contact.name = event.target.value;
  };
  const handleInputPhone = (event) => {
    contact.phone = event.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let sismilarName = false;
    persons.forEach((person) => {
      if (person.name === contact.name) {
        sismilarName = true;
        if (
          window.confirm(
            `${contact.name} is already exists. Do you want to update phone number`
          )
        ) {
          const updatedContact = { ...person, phone: contact.phone };
          updateContact(updatedContact).then((response) => {
            setPersons(
              persons.map((person) =>
                person.name === contact.name ? response.data : person
              )
            );
          });
        }
      }
    });
    if (!sismilarName) {
      addContact(contact)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setErrorMessage('Success');
          setSuccess(true);
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        })
        .catch((err) => {
          setErrorMessage(`${err.message}`);
          setSuccess(false);
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        });
    }
    clearValue();
  };
  const clearValue = () => {
    inputName.current.value = '';
    inputPhone.current.value = '';
  };
  const handleFocus = (event) => {
    event.target.value = '';
  };

  const effect = () => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(effect, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        inputSearch={inputSearch}
        handleFocus={handleFocus}
        handleSearch={handleSearch}
        inputResult={inputResult}
        searchResult={searchResult}
        persons={persons}
      />
      <Error
        message={errorMessage}
        success={success}
      />
      <Form
        inputName={inputName}
        handleFocus={handleFocus}
        handleInputName={handleInputName}
        inputPhone={inputPhone}
        handleInputPhone={handleInputPhone}
        handleSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <Persons
        persons={persons}
        deleteContact={deleteContact}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
