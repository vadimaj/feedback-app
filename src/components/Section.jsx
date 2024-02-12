/* eslint-disable react/prop-types */
const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className="text-xl font-bold uppercase text-slate-800 mb-5">
        {title}
      </h1>
      <section className="space-x-4 mb-5">{children}</section>
    </div>
  );
};

export default Section;
