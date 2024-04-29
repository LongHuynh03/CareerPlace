import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type BackgroundProps = {
    children: React.ReactNode
}

const Background: React.FC<BackgroundProps> = (props) => {
    const { children } = props
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {children}
        </ScrollView>
    )
}

export default Background

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: 'rgba(26, 26, 26, 1)'
    },
})