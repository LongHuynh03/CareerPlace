import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '../../navigation/Navigation'
import Background from '../../components/Background';
import Header from '../../components/Header';
import ButtonBack from '../../components/ButtonBack';
import Icon from '../../components/Icon';
import { icons } from '../../../assets/icons';
import { DataNotification } from '../../data/Data';

const NotificationScreen: React.FC<MainStackScreenProps<'Notification'>> = (props) => {
    const {navigation} = props;

    const onPressGoBack = () => {
      navigation.replace('Main');
    };
    const onPressDeleteAll = () => {};
  return (
    <Background>
      <Header 
      title= 'Notifications'
      iconLeft = {<ButtonBack />}
      iconRight = {<Icon source={icons.Delete} />}
      leftOnPress={onPressGoBack}
      rightOnPress={onPressDeleteAll} />
      <View style = {{
        paddingHorizontal: 24,
        marginTop: 31
      }}>
        {DataNotification.map((item) => {
          return(
            <View key={item.id} style= {{
              width: 343,
              borderRadius: 15,
              backgroundColor: 'rgba(44, 44, 44, 1)',
              paddingVertical: 20,
              paddingHorizontal: 18,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10
            }}>
              <Text style= {{
                width: 291,
                fontWeight: '400',
                fontSize: 14,
                color: 'rgba(255, 255, 255, 1)',
              }}>{item.message}</Text>
              <Pressable >
                <Icon source={icons.X} />
              </Pressable>
            </View>
          )
        })}
      </View>
      <View style = {{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style = {{
          fontWeight: '600',
          fontSize: 24,
          color: 'rgba(61, 61, 61, 1)'
        }}>No more notifications</Text>
      </View>
    </Background>
  )
}

export default NotificationScreen
const styles = StyleSheet.create({})