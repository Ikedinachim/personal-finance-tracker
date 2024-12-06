import React, { useEffect, useState } from 'react';
import API from '../services/api';
import styles from './Predictions.module.css';

const Predictions = () => {
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await API.get('/predictions');
        setPredictions(response.data);
      } catch (err) {
        setError('Unable to fetch predictions. Please ensure you have enough data.');
      }
    };

    fetchPredictions();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Future Expense Predictions</h1>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <ul className={styles.list}>
          {predictions.map((prediction, index) => (
            <li key={index} className={styles.item}>
              {prediction.date}: ${prediction.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Predictions;
