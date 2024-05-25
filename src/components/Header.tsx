import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { icons } from '../../assets/icons'

type HeaderProps = {
    leftOnPress?: () => void,
    rightOnPress?: () => void,
    title: String,
    iconLeft?: React.ReactNode,
    iconRight?: React.ReactNode,
}

const Header: React.FC<HeaderProps> = (props) => {
    const { leftOnPress, rightOnPress, title, iconLeft, iconRight } = props
    
    return (
        <View style={styles.container}>
            <Pressable onPress={leftOnPress} style = {styles.button}>
                {iconLeft}
            </Pressable>
            <Text style = {{
                fontWeight: '600',
                fontSize: 24,
                color: 'rgba(255, 255, 255, 1)'
            }}>{title}</Text>
            <Pressable onPress={rightOnPress} style = {styles.button}>
                {iconRight}
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        width: 345,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: 28, 
        height: 28,
        justifyContent: 'center',
        alignItems: 'center'
    }
})