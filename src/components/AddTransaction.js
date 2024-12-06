import React, { useState } from 'react';
import API from '../services/api';
import styles from './AddTransaction.module.css';

const AddTransaction = () => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post('/transactions', { type, amount: parseFloat(amount), category });
      alert('Transaction added!');
      setAmount('');
      setCategory('');
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Transaction</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          className={styles.select}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          className={styles.input}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
