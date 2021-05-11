import React from 'react'
import { ImageBackground } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import ResDetailScreen from './screens/ResDetailScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <ImageBackground source={require('./assets/bk.jpeg')} style={{ display: 'flex', height: '100%' }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='ResDetail' component={ResDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  )
}
