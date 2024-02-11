/* eslint-disable react/prop-types */
const Button = ({ children, onLeaveFeedback, id }) => {
  return (
    <button type="button" id={id} onClick={onLeaveFeedback}>
      {children}
    </button>
  );
};
export default Button;
