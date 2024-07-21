import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.amount}>${transaction.amount}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
      <Text style={styles.description}>{transaction.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    color: '#555',
  },
  date: {
    fontSize: 16,
    color: '#aaa',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default TransactionDetail;
