const Persons = ({ persons, deleteContact, setPersons }) => {
  const handleDeleteContact = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name} from contacts?`)) {
      const updatedContacts = persons.filter((person) => person.id !== id);
      deleteContact(id);
      setPersons(updatedContacts);
    }
  };
  return (
    <ul>
      {persons.map((person, i) => (
        <li key={person.name + i}>
          {person.name} {person.phone}
          <button
            onClick={() => {
              handleDeleteContact(person.id, person.name);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
