import './Error.css';

const Error = ({ message, success }) => {
  if (message) {
    if (success) {
      return <div className="success-message">{message}</div>;
    } else {
      return <div className="error-message">{message}</div>;
    }
  }
};

export default Error;
