import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import OnBoardNavigation from './src/navigation/onboard/OnBoardNavigaton'
import AccountNavigation from './src/navigation/account/AccountNavigation'
import MainNavigation from './src/navigation/main/MainNavigation'

const App = () => {
  return (
    <NavigationContainer >
        <MainNavigation/>
        {/* <OnBoardNavigation/> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})