import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import Icon from '../../components/Icon'
import { icons } from '../../../assets/icons'
import { DataCalender, DataTask } from '../../data/Data'
import { images } from '../../../assets/images'

const CalenderScreen = () => {

  const colors = [
    {
      backgroud: 'rgba(206, 188, 255, 1)',
      image_up: images.CLOUDPURPLE_UP_1,
      image_down: images.CLOUDPURPLE_DOWN_1,
    },
    {
      backgroud: 'rgba(236, 112, 75, 1)',
      image_up: images.LEAVES_UP_1,
      image_down: images.LEAVES_DOWN_1,
    },
    {
      backgroud: 'rgba(210, 255, 31, 1)',
      image_up: images.CLOUDGREEN_UP_1,
      image_down: images.CLOUDGREEN_DOWN_1,
    },
  ]

  const [dateActive, setDateActive] = useState(1);

  return (
    <Background>
      <View style={styles.boxHeader}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingTop: 32
        }}>
          <TouchableOpacity style={{
            width: 28,
            height: 28,
            borderRadius: 90,
            backgroundColor: 'rgba(38, 38, 38, 0.68)',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon source={icons.Arrow_left} />
          </TouchableOpacity>
          <Text style={{
            fontWeight: '600',
            fontSize: 24,
            color: 'rgba(255, 255, 255, 1)'
          }}>CALENDAR</Text>
          <TouchableOpacity style={{
            width: 28,
            height: 28,
            borderRadius: 90,
            backgroundColor: 'rgba(38, 38, 38, 0.68)',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Icon source={icons.Arrow_right} />
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          marginTop: 13
        }}>
          {
            DataCalender.map((item) => {
              return (
                <TouchableOpacity key={item.id} style={{
                  width: 38,
                  height: 59,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: dateActive == item.id ? 'rgba(255, 255, 255, 1)' : undefined,
                  borderRadius: 90
                }}
                  onPress={() => { setDateActive(item.id) }}>
                  <Text style={{
                    fontWeight: '400',
                    fontSize: 15,
                    color: dateActive == item.id ? 'rgba(0, 0, 0, 1)' : 'rgba(184, 184, 184, 1)'
                  }}>{item.title}</Text>
                  <Text style={{
                    fontWeight: '400',
                    fontSize: 15,
                    color: dateActive == item.id ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'
                  }}>{item.day}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <View style={styles.boxTitle}>
        <Text style = {{
          fontWeight: '600',
          fontSize: 18,
          color: 'rgba(255, 255, 255, 1)',
        }}>Items and tasks</Text>
        <View style = {{
          flexDirection: 'row',
        }}>
          <TouchableOpacity><Text style = {{
            fontWeight: '400',
            fontSize: 14,
            color: 'rgba(255, 255, 255, 1)',
            textDecorationLine: 'underline'
          }}>All</Text></TouchableOpacity>
          <TouchableOpacity style = {{
            marginStart: 15
          }}><Text style = {{
            fontWeight: '400',
            fontSize: 14,
            color: 'rgba(255, 255, 255, 1)'
          }}>Unread</Text></TouchableOpacity>
        </View>
      </View>
      <View style = {styles.boxItem}>
        {
          DataTask.map((item, index) => {
            const backgroundColor = colors[index % colors.length]
            return(
              <TouchableOpacity key={item.id} style = {{
                width: 345,
                height: 185,
                backgroundColor: backgroundColor.backgroud,
                marginBottom: 10,
                borderRadius: 15,
                justifyContent: 'space-between',
              }}>
                <View style = {{
                  position: 'absolute',
                  zIndex: -1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: 0,
                  right: 0
                }}>
                  <Image style = {{
                    position: 'absolute',
                    zIndex: 1,
                    bottom: 0,
                  }} source={backgroundColor.image_up} />
                  <Image style = {{
                  }} source={backgroundColor.image_down} />
                </View>
                <View style = {{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'stretch',
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}>
                  <View>
                    <Text style = {{
                      fontWeight: '400',
                      fontSize: 20,
                      color: 'rgba(26, 26, 26, 1)',
                    }}>{item.name}</Text>
                    <Text style = {{
                      fontWeight: '400',
                      fontSize: 14,
                      color: 'rgba(26, 26, 26, 1)',
                      marginTop: 5
                    }}>{item.time}</Text>
                  </View>
                  <Text style = {{
                    fontWeight: '400',
                    fontSize: 14,
                    color: 'rgba(26, 26, 26, 1)',
                    textDecorationLine: 'underline'
                  }}>
                    {item.task} Task
                  </Text>
                </View>
                <View style = {{
                  flexDirection: 'row',
                  marginBottom: 12,
                  paddingHorizontal: 20,
                  justifyContent: 'space-between'
                }}>
                  <View style = {{
                    flexDirection: 'row',
                  }}>
                    <Icon source={icons.Desktop} />
                  <Text style = {{
                    fontWeight: '400',
                    fontSize: 14,
                    color: 'rgba(26, 26, 26, 1)',
                  }}>Online</Text>
                  </View>
                  <TouchableOpacity style = {{
                    width: 28,
                    height: 28,
                    backgroundColor: 'rgba(26, 26, 26, 1)',
                    justifyContent: 'center',
                    alignItems:'center',
                    borderRadius: 90,
                  }}>
                    <Icon source={icons.Arrow_bot_right} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity> 
            )
          })
        }
      </View>
    </Background>
  )
}

export default CalenderScreen

const styles = StyleSheet.create({
  boxHeader: {
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 22,
    marginBottom: 24
  },
  boxItem: {
    paddingHorizontal: 24,

  },
})