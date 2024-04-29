import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '../../../assets/images'
import { OnBoardStackParamList, OnBoardStackScreenProps } from '../../navigation/Navigation'

const SplashScreen:React.FC<OnBoardStackScreenProps<'Splash'>>= (props) => {

  const navigation = props.navigation;

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('OnBoard');
    }, 3000);
  },[])

  return (
    <View style={styles.container}>
      <Image source={images.CLOUDGREEN_TOP_1} style={[styles.imgCloud,styles.imgCloudTop]} />
      <Text style={styles.textBrand}>careerplace//</Text>
      <Image source={images.CLOUDGREEN_BOT_1} style={[styles.imgCloud,styles.imgCloudBot]} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(210, 255, 31, 1)',
  },
  textBrand: {
    fontWeight: '600',
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -0.5,
  },
  imgCloud: {
    position: 'absolute'
  },
  imgCloudTop: {
    top: 0,
    left: 0
  },
  imgCloudBot: {
    bottom: 0,
    right: 0
  },
})