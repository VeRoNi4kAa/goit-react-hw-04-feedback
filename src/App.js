import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const arrayNames = [`good`, `neutral`, `bad`];

  const handleIncrement = options => {
    switch (options) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const difference = countTotalFeedback() - (neutral + bad);
    return Math.round((difference * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={arrayNames}
          onLeaveFeedback={handleIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}
