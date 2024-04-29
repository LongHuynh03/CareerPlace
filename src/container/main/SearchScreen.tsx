import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Background from '../../components/Background'
import Icon from '../../components/Icon'
import { icons } from '../../../assets/icons'
import { DataCategories } from '../../data/Data'

const SearchScreen = () => {

  const [textSearch, setTextSearch] = useState('');
  const [isActive, setIsActive] = useState(1);

  return (
    <Background >
      <View style={styles.boxSearch}>
        <Icon source={icons.Search} />
        <TextInput style={{
          width: '80%',
          fontWeight: '500',
          fontSize: 14,
          color: 'rgba(255, 255, 255, 0.47)'
        }}
          onChangeText={(text) => setTextSearch(text)} />
        <Icon source={icons.Menu} />
      </View>
      <View style={styles.boxPopularSearch}>
        <Text style={{
          fontWeight: '600',
          fontSize: 18,
          color: 'rgba(210, 255, 31, 1)',
          marginBottom: 25
        }}>Popular search</Text>
        <View style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
          {
            DataCategories.map((item) => {
              return (
                <Pressable
                  key={item.id}
                  onPress={() => setIsActive(item.id)}
                  style={{
                    width: 'auto',
                    height: 33,
                    backgroundColor: isActive == item.id ? 'rgba(210, 255, 31, 1)' : undefined,
                    borderWidth: 2,
                    paddingHorizontal: 29,
                    paddingVertical: 5,
                    borderRadius: 90,
                    marginEnd: 5,
                    marginBottom: 5,
                    borderColor: isActive == item.id ? 'rgba(210, 255, 31, 1)' : 'rgba(108, 108, 108, 1)'
                  }}>
                  <Text style={{
                    fontWeight: '500',
                    fontSize: 14,
                    color: isActive == item.id ? 'rgba(26, 26, 26, 1)' : 'rgba(108, 108, 108, 1)',
                  }}>{item.name}</Text>
                </Pressable>
              )
            })
          }
        </View>
      </View>
      <View style={styles.boxCategories}>
        <Text style={{
          fontWeight: '600',
          fontSize: 18,
          color: 'rgba(210, 255, 31, 1)',
          marginBottom: 20
        }}>Categories</Text>
        {
          DataCategories.map((item) => {
            return (
              <Pressable key={item.id} style={{
                width: 345,
                height: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 15
              }}>
                <Text style={{
                  fontWeight: '600',
                  fontSize: 18,
                  color: 'rgba(255, 255, 255, 1)',
                }}>{item.name}</Text>
                <View style={{
                  width: 28,
                  height: 28,
                  backgroundColor: 'rgba(38, 38, 38, 0.68)',
                  borderRadius: 90,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Icon source={icons.Arrow_right} />
                </View>
              </Pressable>
            )
          })
        }
      </View>
      <Pressable style={{
        marginLeft: 24,
        flexDirection: 'row'
      }}>
        <Text style={{
          fontWeight: '600',
          fontSize: 18,
          textDecorationLine: 'underline',
          color: 'rgba(210, 255, 31, 1)',
          marginEnd: 15
        }}>See all</Text>
        <Icon source={icons.Arrow_right_green} />
      </Pressable>
    </Background>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  boxSearch: {
    width: 345,
    height: 51,
    paddingHorizontal: 17,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'rgba(108, 108, 108, 1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 90,
    marginLeft: 24,
  },
  boxPopularSearch: {
    marginLeft: 24,
    marginTop: 26,
  },
  boxCategories: {
    marginLeft: 24,
    marginTop: 26,
  }
})