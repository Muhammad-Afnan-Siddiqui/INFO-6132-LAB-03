import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TransactionItem from '../components/TransactionItem';
import transactions from '../data/transactions';

const TransactionsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TransactionItem
            transaction={item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TransactionsList;
