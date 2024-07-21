import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import transactions from '../data/transactions';

const Summary = () => {

 const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  
  
  const numberOfTransactions = transactions.length;

  const highestTransaction = transactions.reduce((max, transaction) => 
    transaction.amount > max.amount ? transaction : max
  , transactions[0]);

  const lowestTransaction = transactions.reduce((min, transaction) => 
    transaction.amount < min.amount ? transaction : min
  , transactions[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.summaryText}>Number of Transactions: {numberOfTransactions}</Text>
      <Text style={styles.summaryText}>Total Expenses: ${totalExpenses.toFixed(2)}</Text>
      <Text style={styles.summaryText}>
        Highest Transaction: <Text style={styles.highest}>{highestTransaction.name} (${highestTransaction.amount.toFixed(2)})</Text>
      </Text>
      <Text style={styles.summaryText}>
        Lowest Transaction: {lowestTransaction.name} (${lowestTransaction.amount.toFixed(2)})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  highest: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Summary;
