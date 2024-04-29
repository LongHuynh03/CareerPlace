import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type FormInputProps = {
    label: string,
    onChangeText: (text: string) => void,
    placeholder?:string,
}

const FormInput:React.FC<FormInputProps> = (props) => {
    const {label, onChangeText, placeholder} = props;
  return (
    <View style = {styles.boxForm}>
      <Text style = {styles.labelForm}>{label}</Text>
      <TextInput 
        onChangeText={onChangeText}
        placeholder={placeholder}
        style = {styles.inputText}
      />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    boxForm: {
        margin: 10
    },
    labelForm: {
        fontWeight: '600',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 1)'
    },
    inputText: {
        width: 345,
        height: 51,
        borderRadius: 90,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 15,
        marginTop: 5
    },
})