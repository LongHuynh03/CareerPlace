import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type IconProps = {
    source : ImageSourcePropType | undefined
}

const Icon:React.FC<IconProps> = (props) => {
    const {source} = props
  return (
    <Image style = {styles.icon}  source={source}/>
  )
}

export default Icon

const styles = StyleSheet.create({
    icon: {
        resizeMode: 'contain'
    },
})