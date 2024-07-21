import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Summary from '../screens/Summary';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route })  => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Transactions') {
            iconName = 'list'; 
          } else if (route.name === 'Summary') {
            iconName = 'bar-chart'; 
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Transactions" component={StackNavigator} options={{headerShown: false}} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
