import { View, ViewStyle } from 'react-native'
import React from 'react'

type DotGreenProps = {
  dotStyle?: ViewStyle
}

const DotGreen: React.FC<DotGreenProps> = (props) => {
  const { dotStyle } = props;
  return (
    <View style={[{
      width: 10,
      height: 10,
      backgroundColor: 'rgba(210, 255, 31, 1)',
      borderRadius: 90,
      borderWidth: 2,
      borderColor: 'rgba(26, 26, 26, 1)'
    }, dotStyle]} />
  )
}

export default DotGreen