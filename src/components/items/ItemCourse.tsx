import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import ButtonFavorite from '../ButtonFavorite'
import { imageItemCourse, images } from '../../../assets/images'
import { Colors } from '../../values/Colors'

type ItemCourseProps = {
    onPress: () => void,
    name: string,
    price: number,
    rate: number,
    hours: number,
    people: number,
}

const ItemCourse: React.FC<ItemCourseProps> = (props) => {
    const { onPress, name, price, rate, hours, people } = props;
    const randomIndex1 = Math.floor(Math.random() * Colors.length);
    const randomIndex2 = Math.floor(Math.random() * imageItemCourse.length);

    const colorRandom = Colors[randomIndex1];
    const imageRandom = imageItemCourse[randomIndex2];

    return (
        <Pressable style={[styles.container, { backgroundColor: colorRandom }]} >
            <View style={{
                width: 198,
                height: 103,
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontWeight: '400',
                    fontSize: 16,
                    color: 'rgba(26, 26, 26, 1)',
                }}>{name}</Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: 'rgba(26, 26, 26, 1)'
                }}>{price}$</Text>
                <ButtonFavorite
                    isFavorite
                    onPress={onPress}
                    styleButton={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }} />
            </View>
            <Image source={imageRandom} style={{
                resizeMode: 'contain',
                position: 'absolute',
                top: 17,
                right: 12,
                zIndex: -1
            }} />
            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 14,
                left: 19.27
            }}>
                <Text style={{
                    width: 48,
                    height: 18,
                    backgroundColor: 'rgba(26, 26, 26, 1)',
                    borderRadius: 90,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: '400',
                    fontSize: 10,
                    marginRight: 3,
                    color: colorRandom
                }}>{rate}</Text>
                <Text style={{
                    width: 66,
                    height: 18,
                    backgroundColor: 'rgba(26, 26, 26, 1)',
                    borderRadius: 90,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: '400',
                    fontSize: 10,
                    marginRight: 2,
                    color: colorRandom
                }}>{hours} Hours</Text>
                <Text style={{
                    width: 69,
                    height: 18,
                    backgroundColor: 'rgba(26, 26, 26, 1)',
                    borderRadius: 90,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: '400',
                    fontSize: 10,
                    color: colorRandom
                }}>{Math.floor(people / 1000)} People</Text>
            </View>
        </Pressable>
    )
}

export default memo(ItemCourse)

const styles = StyleSheet.create({
    container: {
        width: 224,
        height: 158,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingTop: 15,
        paddingLeft: 14,
    },

})