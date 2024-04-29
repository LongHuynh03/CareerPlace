import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MainStackScreenProps } from '../../navigation/Navigation'
import { images } from '../../../assets/images';
import DotGreen from '../../components/DotGreen';
import Background from '../../components/Background';
import Icon from '../../components/Icon';
import { icons } from '../../../assets/icons';
import { DataCourse, DataTag } from '../../data/Data';
import ItemCourse from '../../components/items/ItemCourse';

const MainScreen: React.FC<MainStackScreenProps<'Main'>> = (props) => {
  const { navigation } = props;
  const [tagActive, setTagActive] = useState(0);

  return (
    <Background>
      <View style={styles.boxBar}>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <View style={{ width: 50 }}>
            <Image source={images.AVATAR_1} style={{
              width: 50,
              height: 50,
              borderRadius: 90,
            }} />
            <DotGreen dotStyle={{
              position: 'absolute',
              right: 0,
              bottom: 10
            }} />
          </View>
          <Text style={{
            fontWeight: '600',
            fontSize: 16,
            color: 'rgba(171, 147, 224, 1)',
            marginLeft: 15
          }}>Hello, Jane</Text>
        </View>
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
          }} />
        </View>
      </View>
      <View style={styles.boxTag}>
        {DataTag.map((item, index) => {
          return (
            <Pressable key={index} style={{
              height: 33,
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 90,
              paddingHorizontal: 25,
              paddingVertical: 5,
              margin: 5,
              borderColor: 'rgba(108, 108, 108, 1)'
            }}
              onPress={() => { setTagActive(index) }}>
              <Text style={{
                color: index == tagActive ? 'rgba(65, 65, 65, 1)' : 'rgba(255, 255, 255, 0.47)'
              }}>{item.name}</Text>
            </Pressable>
          )
        })}
      </View>
      <View style={styles.boxCourse}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 24
        }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)'
          }}>Course</Text>
          <View style = {{
            width: 223,
            height: 1,
            backgroundColor: 'rgba(57, 57, 57, 1)'
          }} />
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ flexDirection: 'row', paddingRight: 0, marginTop: 18 }}
          showsHorizontalScrollIndicator={false}>
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
      <View style={styles.boxCourse}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 24
        }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)'
          }}>Lectures</Text>
          <View style = {{
            width: 223,
            height: 1,
            backgroundColor: 'rgba(57, 57, 57, 1)'
          }} />
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ flexDirection: 'row', paddingRight: 0, marginTop: 18 }}
          showsHorizontalScrollIndicator={false}>
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
      <View style={styles.boxCourse}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 24
        }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'rgba(255, 255, 255, 1)'
          }}>On Top</Text>
          <View style = {{
            width: 223,
            height: 1,
            backgroundColor: 'rgba(57, 57, 57, 1)'
          }} />
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ flexDirection: 'row', paddingRight: 0, marginTop: 18 }}
          showsHorizontalScrollIndicator={false}>
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



export default MainScreen

const styles = StyleSheet.create({
  boxBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  boxTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    paddingHorizontal: 24
  },
  boxCourse: {
    paddingLeft: 24,
    marginBottom: 18
  },
})