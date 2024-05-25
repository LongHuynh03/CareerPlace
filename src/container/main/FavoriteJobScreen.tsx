import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import Header from '../../components/Header'
import ButtonBack from '../../components/ButtonBack'
import { MainStackScreenProps } from '../../navigation/Navigation'
import { DataCourse, DataJobs } from '../../data/Data'
import ItemCaree from '../../components/items/ItemCaree'
import ItemCourse from '../../components/items/ItemCourse'

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

const FavoriteJobScreen: React.FC<MainStackScreenProps<'Favorite'>> = (props) => {
  const { navigation } = props;

  return (
    <Background>
      <Header
        title='Favorites'
        iconLeft={<ButtonBack />}
        leftOnPress={() => { }} />
      <View style={styles.textTitle}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 24,
          marginTop: 34,
        }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)'
          }}>Course</Text>
          <View style={{
            width: 223,
            height: 1,
            backgroundColor: 'rgba(57, 57, 57, 1)'
          }} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 0, marginTop: 23 }}>
          {DataJobs.map((item, index) => {
            const backgroundColorJobs = colors[index % colors.length];
            return (
              <ItemCaree key={item.id}
                item={item}
                onPress={() => { }}
                onPressFavorite={() => { }}
                backGroudJobProps={backgroundColorJobs}
                styleItem={{ marginRight: 10, marginBottom: 0 }} />
            )
          })}
        </ScrollView>
      </View>
      <View style={styles.textTitle}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 24,
          marginTop: 20,
        }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)'
          }}>Course</Text>
          <View style={{
            width: 223,
            height: 1,
            backgroundColor: 'rgba(57, 57, 57, 1)'
          }} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 0, marginTop: 23 }}>
            {
              DataCourse.map((item, index) => {
                return (
                  <ItemCourse key={index}
                    hours={item.hours}
                    name={item.name}
                    onPress={() => console.log("FVR")}
                    people={item.people}
                    price={item.price}
                    rate={item.rate} />
                )
              })
            }
        </ScrollView>
      </View>
      <View style={styles.textTitle}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 24,
          marginTop: 20,
        }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)'
          }}>Lectures</Text>
          <View style={{
            width: 223,
            height: 1,
            backgroundColor: 'rgba(57, 57, 57, 1)'
          }} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 0, marginTop: 23 }}>
            {
              DataCourse.map((item, index) => {
                return (
                  <ItemCourse key={index}
                    hours={item.hours}
                    name={item.name}
                    onPress={() => console.log("FVR")}
                    people={item.people}
                    price={item.price}
                    rate={item.rate} />
                )
              })
            }
        </ScrollView>
      </View>
    </Background>
  )
}

export default FavoriteJobScreen

const styles = StyleSheet.create({
  textTitle: {
    paddingLeft: 24,
    // marginBottom: 20,
  },
})