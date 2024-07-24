import * as React from 'react'
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'

export type RootStackParamList = {
  home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNav = () => {
  return (
    <Stack.Navigator initialRouteName={'home'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return <NavigationContainer>{AppNav()}</NavigationContainer>
}

export default Navigation
