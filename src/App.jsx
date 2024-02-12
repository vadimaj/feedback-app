import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

import { countPositiveFeedback, countTotalFeedback } from './helpers/count';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const total = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedback(good, total);

  const handleFeedback = (e) => {
    switch (e.target.id) {
      case 'good':
        setGood((state) => state + 1);
        break;
      case 'neutral':
        setNeutral((state) => state + 1);
        break;
      case 'bad':
        setBad((state) => state + 1);
        break;
    }
  };

  return (
    <div className=" w-1/5 mx-auto text-center py-10">
      <Section title="Please leave feedback" className="">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      {total < 1 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}

export default App;
