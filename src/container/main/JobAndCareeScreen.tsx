import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { DataJobs } from '../../data/Data'
import ItemCaree from '../../components/items/ItemCaree'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import { icons } from '../../../assets/icons'

const JobAndCareeScreen = () => {

  const colors = [
    {
      backgroud: 'rgba(206, 188, 255, 1)',
      backgroud_tag_1: 'rgba(208, 252, 255, 1)',
      backgroud_tag_2: 'rgba(246, 211, 255, 1)',
      color_tag_1: 'rgba(0, 118, 255, 1)',
      color_tag_2: 'rgba(225, 104, 255, 1)',
    },
    {
      backgroud: 'rgba(255, 224, 120, 1)',
      backgroud_tag_1: 'rgba(208, 252, 255, 1)',
      backgroud_tag_2: 'rgba(246, 211, 255, 1)',
      color_tag_1: 'rgba(0, 118, 255, 1)',
      color_tag_2: 'rgba(225, 104, 255, 1)',
    },
    {
      backgroud: 'rgba(171, 147, 224, 1)',
      backgroud_tag_1: 'rgba(208, 252, 255, 1)',
      backgroud_tag_2: 'rgba(189, 255, 149, 1)',
      color_tag_1: 'rgba(0, 118, 255, 1)',
      color_tag_2: 'rgba(60, 157, 0, 1)',
    },
    {
      backgroud: 'rgba(255, 130, 92, 1)',
      backgroud_tag_1: 'rgba(208, 252, 255, 1)',
      backgroud_tag_2: 'rgba(246, 211, 255, 1)',
      color_tag_1: 'rgba(0, 118, 255, 1)',
      color_tag_2: 'rgba(225, 104, 255, 1)',
    },
  ]

  const onPressJob = () => { };
  const onPressFavorite = () => { };
  const onPressFavoriteJos = () => { };
  const onPressSearch = () => { };

  return (
    <Background>
      <Header title="Career"
        iconLeft={<Icon source={icons.Heart} />}
        iconRight={<Icon source={icons.Search_active} />}
        leftOnPress={onPressFavoriteJos}
        rightOnPress={onPressSearch} />
      <View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 25,
        marginTop: 36
      }}>
        <Text style = {{
          fontWeight: '600',
          fontSize: 24,
          color: 'rgba(255, 255, 255, 1)',
        }}>Jobs</Text>
        <Pressable style = {{}}>
          <Icon source={icons.Menu_active} />
        </Pressable>
      </View>
      <View style = {{
        paddingHorizontal: 24
      }}>
        {DataJobs.map((item, index) => {
          const backgroundColorJobs = colors[index % colors.length];
          
          return (
            <ItemCaree
              key={item.id}
              item={item}
              styleItem={backgroundColorJobs}
              onPress={onPressJob}
              onPressFavorite={onPressFavorite} />
          )
        })
        }
      </View>
    </Background>
  )
}

export default JobAndCareeScreen

const styles = StyleSheet.create({})