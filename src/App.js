import React, { useEffect, useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [countTotalFeedback, setCountTotalFeedback] = useState(0);
  const [countPositiveFeedbackPercentage, setCountPositiveFeedbackPercentage] =
    useState(0);

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

  useEffect(() => {
    let countTotalFeedback = good + neutral + bad;
    setCountTotalFeedback(countTotalFeedback);

    setCountPositiveFeedbackPercentage(
      Math.round((good / countTotalFeedback) * 100)
    );
  }, [good, neutral, bad]);

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
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}
