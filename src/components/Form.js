const Form = ({
  inputName,
  handleFocus,
  handleInputName,
  inputPhone,
  handleInputPhone,
  handleSubmit
}) => {
  return (
    <form>
      <div>
        <label>name: </label>
        <input
          type="text"
          ref={inputName}
          onFocus={handleFocus}
          onChange={handleInputName}
        />
        <br></br>
        <label>phone: </label>
        <input
          type="number"
          ref={inputPhone}
          onFocus={handleFocus}
          onChange={handleInputPhone}
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          add
        </button>
      </div>
    </form>
  );
};

export default Form;
