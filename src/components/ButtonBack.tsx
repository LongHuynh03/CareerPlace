import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { icons } from '../../assets/icons'

const ButtonBack = () => {
  return (
    <View style = {styles.container}>
      <Icon source={icons.Arrow_left} />
    </View>
  )
}

export default ButtonBack

const styles = StyleSheet.create({
    container: {
        width: 28,
        height: 28,
        borderRadius: 90,
        backgroundColor: 'rgba(38, 38, 38, 0.68)',
        justifyContent: 'center',
        alignItems: 'center',
    },
})