import { ColorValue, Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import Icon from '../Icon'
import { icons } from '../../../assets/icons'

type Caree = {
    id: number,
    title: String,
    brand: String,
    country: String,
    description: String,
    tag: any,
    image_logo: any,
}

type BackGroudJobProps = {
    backgroud: ColorValue,
    backgroud_tag_1: ColorValue,
    backgroud_tag_2: ColorValue,
    color_tag_1: ColorValue,
    color_tag_2: ColorValue,
}

type ItemCareeProps = {
    item: Caree,
    styleItem: BackGroudJobProps,
    onPressFavorite: () => void,
    onPress: () => void,
}

const ItemCaree: React.FC<ItemCareeProps> = (props) => {
    const { item, styleItem, onPress, onPressFavorite } = props;
    return (
        <View style={[styles.container,
        { backgroundColor: styleItem.backgroud }]}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 36,
                        height: 36,
                        borderRadius: 90,
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={item.image_logo} />
                    </View>
                    <View style={{
                        marginLeft: 5
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            color: 'rgba(0, 0, 0, 1)'
                        }}>{item.title}</Text>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 14,
                            color: 'rgba(67, 67, 67, 1)'
                        }}>{item.brand}</Text>
                    </View>
                </View>
                <Text style={{
                    fontWeight: '400',
                    fontSize: 13,
                    color: 'rgba(0, 0, 0, 1)'
                }}>{item.country}</Text>
            </View>
            <Text numberOfLines={2} style={{
                fontWeight: '400',
                fontSize: 13,
                color: 'rgba(60, 60, 60, 1)',
                marginTop: 13,
            }}>{item.description}</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: 28,
                        paddingHorizontal: 13,
                        backgroundColor: styleItem.backgroud_tag_1,
                        borderRadius: 90,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 14,
                            color: styleItem.color_tag_1,
                        }}>{item.tag[0]}</Text>
                    </View>
                    <View style={{
                        height: 28,
                        paddingHorizontal: 13,
                        backgroundColor: styleItem.backgroud_tag_2,
                        borderRadius: 90,
                        justifyContent: 'center',
                        marginLeft: 7
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 14,
                            color: styleItem.color_tag_2,
                        }}>{item.tag[1]}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Pressable
                        onPress={onPressFavorite}
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: 90,
                            backgroundColor: 'rgba(26, 26, 26, 1)',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Icon source={icons.Heart_white} />
                    </Pressable>
                    <Pressable
                        onPress={onPress}
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: 90,
                            backgroundColor: 'rgba(26, 26, 26, 1)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 7
                        }}>
                        <Icon source={icons.Arrow_bot_right} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ItemCaree

const styles = StyleSheet.create({
    container: {
        width: 345,
        height: 158,
        borderRadius: 15,
        backgroundColor: 'rgba(206, 188, 255, 1)',
        padding: 18,
        marginBottom: 10
    },
})