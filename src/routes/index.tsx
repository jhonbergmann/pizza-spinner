import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import Dashboard from '@/screens/dashboard'
import WinningSlice from '@/screens/winning-slice'

const Stack = createStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="WinningSlice" component={WinningSlice} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
