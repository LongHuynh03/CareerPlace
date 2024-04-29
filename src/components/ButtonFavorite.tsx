import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { icons } from '../../assets/icons'

type ButtonFavoritePorps = {
    onPress: () => void,
    isFavorite: boolean,
    styleButton: ViewStyle
}

const ButtonFavorite: React.FC<ButtonFavoritePorps> = (props) => {

    const { onPress, isFavorite, styleButton } = props;
    return (
        <Pressable style = {[styles.button,styleButton]} onPress={onPress}>
            {
                isFavorite ? 
                <Icon source={icons.Heart_red}/>
                :
                <Icon source={icons.Heart_white}/>
            }
        </Pressable>
    )
}

export default ButtonFavorite

const styles = StyleSheet.create({
    button: {
        width: 28,
        height: 28,
        borderRadius: 90,
        backgroundColor: 'rgba(26, 26, 26, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
})