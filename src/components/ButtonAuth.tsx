import { StyleSheet, Text, TouchableOpacity, ViewProps, ViewStyle } from 'react-native'
import React from 'react'

type ButtonAuthProps = {
  title: string,
  color: string,
  styleButton: ViewStyle,
  onPress: () => void,
}

const ButtonAuth: React.FC<ButtonAuthProps> = (props) => {
  const { title, color, onPress, styleButton } = props;
  return (
    <TouchableOpacity onPress={onPress}
      style={[styles.button,{backgroundColor: color,},styleButton]}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonAuth

const styles = StyleSheet.create({
  button: {
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  textButton: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 23,
    color: 'rgba(0, 0, 0, 1)'
  },
})