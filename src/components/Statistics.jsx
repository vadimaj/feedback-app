/* eslint-disable react/prop-types */
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section className="text-left px-4">
      <div className="flex gap-5 text-slate-600 pb-3">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <p className="font-bold text-base">Total: {total}</p>
      <p className="font-bold text-base">
        Positive feedback: {positivePercentage}%
      </p>
      <p></p>
    </section>
  );
};

export default Statistics;
