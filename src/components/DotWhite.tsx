import { View, ViewStyle } from 'react-native'
import React from 'react'

type DotWhiteProps = {
    dotStyle ?: ViewStyle
}

const DotWhite:React.FC<DotWhiteProps> = (props) => {
    const {dotStyle} = props;
  return (
    <View style = {[{
        width: 5,
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 90,
        borderWidth: 2
      }, dotStyle]}/>
  )
}

export default DotWhite