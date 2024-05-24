import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import DotGreen from './DotGreen';

const data = [
  { label: 'Day 1', value: '1' },
  { label: 'Day 2', value: '2' },
  { label: 'Day 3', value: '3' },
  { label: 'Day 4', value: '4' },
  { label: 'Day 5', value: '5' },
  { label: 'Day 6', value: '6' },
  { label: 'Day 7', value: '7' },
  { label: 'Day 8', value: '8' },
];

const data2 = [
  {
    day: '10/05/2024',
    view: 20,
  },
  {
    day: '11/05/2024',
    view: 40,
  },
  {
    day: '12/05/2024',
    view: 60,
  },
]

const Chart = () => {

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [indexActive, setIndexActive] = useState(-1);

  return (
    <View style={styles.container}>
      <View style={{
        width: 317,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(228, 229, 231, 1)',
      }}>
        <Text style={{
          fontWeight: '400',
          fontSize: 14,
          color: 'rgba(255, 255, 255, 1)',
        }}>Analytics</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconColor='rgba(26, 26, 26, 1)'
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={100}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Day' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        marginTop: 27
      }}>
        <View style={{
          width: 23,
          height: 196,
          justifyContent: 'space-between',
          marginRight: 18
        }}>
          <Text style={styles.textNumber}>100</Text>
          <Text style={styles.textNumber}>80</Text>
          <Text style={styles.textNumber}>60</Text>
          <Text style={styles.textNumber}>40</Text>
          <Text style={styles.textNumber}>0</Text>
        </View>
        <ScrollView horizontal >
          {data2.map((item, index) => {
            const day = item.day.substring(0, 2);
            return (
              <View key={index} style={{
                width: 20,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
                <Pressable
                  onPress={() => {
                    setIndexActive(index);
                  }}
                  style={{
                    width: 10,
                    height: 200,
                    borderRadius: 90,
                    backgroundColor: 'rgba(242, 247, 255, 1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 32
                  }}>
                  <View style={{
                    width: 10,
                    height: item.view * 2,
                    borderRadius: 90,
                    backgroundColor: 'rgba(210, 255, 31, 1)',
                    position: 'absolute',
                    bottom: 0
                  }}>
                    <DotGreen dotStyle={{
                      opacity: indexActive == index ? 1 : 0,
                      width: 12,
                      height: 12,
                      marginLeft: -1
                    }} />
                  </View>
                </Pressable>
                <Text style={{
                  fontWeight: '500',
                  fontSize: 9,
                  color: 'rgba(255, 255, 255, 1)',
                  marginTop: 6
                }}>{day}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  container: {
    width: 344,
    height: 322,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(239, 240, 246, 1)',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14
  },
  dropdown: {
    width: 83,
    height: 28,
    borderRadius: 90,
    backgroundColor: 'rgba(210, 255, 31, 1)',
    marginBottom: 6
  },
  placeholderStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(26, 26, 26, 1)',
    marginLeft: 10,
  },
  selectedTextStyle: {
    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(26, 26, 26, 1)',
    marginLeft: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
  textNumber: {
    fontWeight: '400',
    fontSize: 9.75,
    color: 'rgba(255, 255, 255, 1)',
  }
})