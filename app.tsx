import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './dashboard';
import DataEntry from './data_entry'; // Add DataEntry screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="DataEntry" component={DataEntry} options={{ title: 'Data Entry' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
