import React, { useState, useEffect } from 'react';
import API from '../services/api';
import styles from './Goals.module.css';

const Goals = () => {
  const [goal, setGoal] = useState('');
  const [currentGoal, setCurrentGoal] = useState(null);

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const response = await API.get('/goals');
        setCurrentGoal(response.data ? response.data.goal : null);
      } catch (error) {
        console.error('Error fetching goal:', error);
      }
    };

    fetchGoal();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post('/goals', { goal });
      setCurrentGoal(goal);
      setGoal('');
      alert('Goal set!');
    } catch (error) {
      console.error('Error setting goal:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Financial Goals</h1>
      <p className={styles.goal}>
        Current Goal: {currentGoal || 'No goal set'}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Set your goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">
          Set Goal
        </button>
      </form>
    </div>
  );
};

export default Goals;
