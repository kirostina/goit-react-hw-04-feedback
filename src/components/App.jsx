import {useState} from 'react';
import FeedbackOptions from 'components/FeedbackOption/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default function App() { 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const stateObj = { good, neutral, bad };


  const addReviewByClick = evt => {
    if (evt.target) {
    const btnName = evt.target.textContent.toLowerCase();
      switch (btnName) {
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
          return;
      }
    }
  };
    const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return `${ Math.round((good * 100) / countTotalFeedback() || 0) }%`;
  };

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(stateObj)}
            onFeedback={addReviewByClick} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePerc={countPositiveFeedbackPercentage()} />
          )
            : (
              <Notification message="No feedback" />
            )}
        </Section>
      </div>
    );
  }


