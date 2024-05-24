import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MainStackScreenProps } from '../../navigation/Navigation'
import Background from '../../components/Background';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import { icons } from '../../../assets/icons';
import DotGreen from '../../components/DotGreen';
import { images } from '../../../assets/images';
import Chart from '../../components/Chart';

const ProfileScreen: React.FC<MainStackScreenProps<'Profile'>> = (props) => {
  const { navigation } = props;
  const [pageActive, setPageActive] = useState('Statistics');

  const onPressOption = () => { };
  const onPressNotification = () => { };

  const onPressPageStatistics = () => {
    setPageActive('Statistics');
  };
  const onPressPagePortfolio = () => {
    setPageActive('Portfolio')
  };
  const onPressPageReviews = () => {
    setPageActive('Reviews')
  };

  return (
    <Background>
      <Header
        title='My profile'
        iconLeft={<Icon source={icons.Setting} />}
        iconRight={
          <View style={{
            width: 24,
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Icon source={icons.Notification} />
            <DotGreen dotStyle={{
              position: 'absolute',
              left: 0,
              top: 0
            }} />
          </View>
        }
        leftOnPress={onPressOption}
        rightOnPress={onPressNotification}
      />
      <View style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
      }}>
        <View style={{
          width: 136,
          height: 136,
          borderWidth: 3,
          borderRadius: 90,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          borderColor: 'rgba(210, 255, 31, 1)'
        }}>
          <Image source={images.AVATAR_1} style={{
            width: 126,
            height: 126,
            borderRadius: 90,
          }} />
        </View>
        <Text style={{
          fontWeight: '600',
          fontSize: 24,
          color: 'rgba(220, 193, 255, 1)',
          marginTop: 15
        }}>Jane Sodi</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 345,
        height: 46,
        marginHorizontal: 24,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 90,
        paddingHorizontal: 4,
        marginTop: 17
      }}>
        <Pressable onPress={onPressPageStatistics}
          style={[styles.buttonPage, {
            backgroundColor: pageActive == 'Statistics' ? 'rgba(210, 255, 31, 1)' : undefined
          }]}>
          <Text style={[styles.textPage, {
            color: pageActive == 'Statistics' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'
          }]}>Statistics</Text>
        </Pressable>
        <Pressable onPress={onPressPagePortfolio}
          style={[styles.buttonPage, {
            backgroundColor: pageActive == 'Portfolio' ? 'rgba(210, 255, 31, 1)' : undefined
          }]}>
          <Text style={[styles.textPage, {
            color: pageActive == 'Portfolio' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'
          }]}>Portfolio</Text>
        </Pressable>
        <Pressable onPress={onPressPageReviews}
          style={[styles.buttonPage, {
            backgroundColor: pageActive == 'Reviews' ? 'rgba(210, 255, 31, 1)' : undefined
          }]}>
          <Text style={[styles.textPage, {
            color: pageActive == 'Reviews' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'
          }]}>Reviews</Text>
        </Pressable>
      </View>
      <View style={{
        width: 344,
        height: 88,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(239, 240, 246, 1)',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 24,
        marginTop: 13
      }}>
        <View style = {{
          flexDirection: 'row',
          alignItems: 'center'
        }}> 
          <View style={{
            width: 53.3,
            height: 55,
            borderRadius: 10,
            backgroundColor: 'rgba(210, 255, 31, 1)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Icon source={icons.Page} />
          </View>
          <View style={{
            marginLeft: 7.77
          }}>
            <Text style = {{
              fontWeight: '400',
              fontSize: 14,
              color: 'rgba(255, 255, 255, 1)'
              }}>CV_Jane Sodi.pdf</Text>
            <Text style = {{
              fontWeight: '400',
              fontSize: 14,
              color: 'rgba(185, 185, 185, 1)'
            }}>Views 39</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Pressable style = {{
            width: 45,
            height: 45,
            borderRadius: 90,
            backgroundColor: 'rgba(239, 239, 239, 1)',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon source={icons.Download} />
          </Pressable>
          <Pressable style = {{
            width: 45,
            height: 45,
            borderRadius: 90,
            backgroundColor: 'rgba(239, 239, 239, 1)',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 8.77
          }}>
            <Icon source={icons.Download} />
          </Pressable>
        </View>
      </View>
      <View style={{
        paddingHorizontal: 24,
        marginTop: 13
      }}>
        <Chart />
      </View>
    </Background>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  buttonPage: {
    width: 110.12,
    height: 38.81,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textPage: {
    fontWeight: '400',
    fontSize: 13,
  },
})