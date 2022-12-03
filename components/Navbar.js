import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import Card from './Card'

const Tab = createBottomTabNavigator()

const Navbar = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Card" component={Card} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navbar