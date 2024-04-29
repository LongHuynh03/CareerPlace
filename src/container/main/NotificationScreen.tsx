import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../../navigation/Navigation'

const NotificationScreen: React.FC<MainStackScreenProps<'Notification'>> = (props) => {
    // const {navigation} = props;
  return (
    <View>
      <Text>: React.FC</Text>
    </View>
  )
}

export default NotificationScreen
const styles = StyleSheet.create({})