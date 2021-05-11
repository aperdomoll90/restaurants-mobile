import React from 'react'
import { ImageBackground } from 'react-native'
import HomeScreen from './screens/Home'

export default function App() {
  // console.log('this is the platform', Platform.OS == 'ios' ? true : false)
  
  return (
    <ImageBackground source={require('./assets/bk.jpeg')} style={{ display: 'flex', height: '100%' }}>
    <HomeScreen />
    </ImageBackground>
  )
}

