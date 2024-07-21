import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TransactionDetail from '../screens/TransactionDetail';
import TransactionsList from '../screens/TransactionsList';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ title: 'Transactions', headerShown: true }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail', headerShown: true }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
