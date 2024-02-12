/* eslint-disable react/prop-types */
const Button = ({ children, onLeaveFeedback, id }) => {
  return (
    <button
      type="button"
      id={id}
      onClick={onLeaveFeedback}
      className="inline-block text-sm rounded-sm bg-cyan-600 text-neutral-50 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-cyan-500 px-4 py-3    "
    >
      {children}
    </button>
  );
};
export default Button;
