import React, { useEffect, useState } from 'react';
import API from '../services/api';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [data, setData] = useState({ income: 0, expenses: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/transactions');
        const transactions = response.data;

        const income = transactions
          .filter((t) => t.type === 'income')
          .reduce((acc, t) => acc + t.amount, 0);

        const expenses = transactions
          .filter((t) => t.type === 'expense')
          .reduce((acc, t) => acc + t.amount, 0);

        setData({ income, expenses });
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <p className={styles.stat}>Total Income: ${data.income}</p>
      <p className={styles.stat}>Total Expenses: ${data.expenses}</p>
    </div>
  );
};

export default Dashboard;
