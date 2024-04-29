import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../../navigation/Navigation'

const ProfileScreen:React.FC<MainStackScreenProps<'Profile'>> = (props) => {
  const {navigation} = props;
  
  return (
    <View>
      <Button title='nhấn' 
      onPress={ () => {
        navigation.navigate('Main')
      }}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})