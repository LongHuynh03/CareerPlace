import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ItemOnBoard = {
    id: number,
    title: string,
    image: any,
    color: string
}

const ItemOnBoard = (itemOnBoard: ItemOnBoard) => {
    return (
        <View style={[styles.container, { backgroundColor: itemOnBoard?.color }]}>
            <View key={itemOnBoard?.id}>
                <Text>{itemOnBoard?.title}</Text>
                <Image source={itemOnBoard?.image} />
            </View>
        </View>
    )
}

export default ItemOnBoard

const styles = StyleSheet.create({
    container: {},
})