import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonNextProps = {
    onPress : () => void
}

const ButtonNext:React.FC<ButtonNextProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style = {styles.button}>
        <Text style = {styles.textButton}>Next</Text>
    </TouchableOpacity>
  )
}

export default ButtonNext

const styles = StyleSheet.create({
  button: {
    width: 162,
    height: 49,
    borderWidth: 2,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 23,
    color: 'rgba(0, 0, 0, 1)'
  },
})