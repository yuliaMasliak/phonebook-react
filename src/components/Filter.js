const Filter = ({
  inputSearch,
  handleFocus,
  handleSearch,
  inputResult,
  searchResult,
  persons
}) => {
  return (
    <div>
      {' '}
      <label>search with: </label>
      <input
        type="text"
        ref={inputSearch}
        onFocus={handleFocus}
        onChange={handleSearch}
      />
      <h4>Search result</h4>
      <ul ref={inputResult}>
        {searchResult.map((el) =>
          persons.map((person, i) => {
            if (person.name.toLowerCase().includes(el.toLowerCase())) {
              return (
                <li key={person.name + i}>
                  {person.name} {person.phone}
                </li>
              );
            }
          })
        )}
      </ul>
    </div>
  );
};

export default Filter;
