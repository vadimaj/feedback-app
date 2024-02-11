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

  const total = countTotalFeedback(good, neutral, bad);
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
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      {total < 1 ? (
        <Notification message="There is no feedback" />
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
    </>
  );
}

export default App;
