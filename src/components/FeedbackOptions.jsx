/* eslint-disable react/prop-types */
import Button from './Button';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <Button onLeaveFeedback={onLeaveFeedback} id={option} key={option}>
          {option}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;
