import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Akun from './src/component/Akun';
import Home from './src/component/Home';
import Menu from './src/component/Menu';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Akun') {
              iconName = focused ? 'Akun' : 'home-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'search-outline' : 'search';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'time-sharp' : 'time-outline';
            ;
        
            return <Ionic name={iconName} size={size} colour={colour} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#ffc125',
            heigh: 60,
          },
        }}>
        <Tab.Screen name='Akun' component={Akun} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Menu' component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;