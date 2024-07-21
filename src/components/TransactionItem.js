import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TransactionItem = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.amount}>${transaction.amount}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 14,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default TransactionItem;
