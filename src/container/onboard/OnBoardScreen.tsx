import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '../../../assets/images'
import ButtonNext from '../../components/onboard/ButtonNext'
import ButtonAuth from '../../components/ButtonAuth'

const OnBoardScreen = () => {
    const [index, setIndex] = useState(1);
    const onHandleNext = () => {
        setIndex(prev => prev + 1);
    }

    const onHandleSignIn = () => {};
    const onHandleSignUp = () => {};


    const renderStep = () => {
        switch (index) {
            case 1:
                return (
                    <View style={[styles.container, { backgroundColor: 'rgba(220, 193, 255, 1)'}]}>
                        <View style = {styles.itemOnBoard}>
                            <Text style={styles.textTitle}>Welcome to careerspace</Text>
                            <Image style={styles.imgOnBoard} source={images.ONBOARD_1_1} />
                        </View>
                        <ButtonNext onPress={onHandleNext} />
                    </View>
                );
            case 2:
                return (
                    <View style={[styles.container, { backgroundColor: 'rgba(247, 206, 69, 1)' }]}>
                        <View style = {styles.itemOnBoard}>
                            <Text style={styles.textTitle}>Get support in your newcareer</Text>
                            <Image style={styles.imgOnBoard} source={images.ONBOARD_2_1} />
                        </View>
                        <ButtonNext onPress={onHandleNext} />
                    </View>
                );
            case 3:
                return (
                    <View style={[styles.container, { backgroundColor: 'rgba(171, 147, 224, 1)' }]}>
                        <View style = {styles.itemOnBoard}>
                            <Text style={styles.textTitle}>Learn and practrice</Text>
                            <Image style={styles.imgOnBoard} source={images.ONBOARD_3_1} />
                        </View>
                        <ButtonNext onPress={onHandleNext} />
                    </View>
                );
            case 4:
                return (
                    <View style={[styles.container, { backgroundColor: 'rgba(220, 193, 255, 1)' }]}>
                       <View style = {styles.itemOnBoard}>
                            <Text style={styles.textTitle}>Let's start your career!</Text>
                            <Image style={styles.imgOnBoard} source={images.ONBOARD_4_1} />
                        </View>
                        <ButtonAuth
                        color='rgba(245, 243, 120, 1)' 
                        title='Sign in'
                        onPress={onHandleSignIn}
                        styleButton={styles.button}/>
                        <ButtonAuth 
                        color='rgba(255, 255, 255, 1)' 
                        title='Sign up'
                        onPress={onHandleSignUp}
                        styleButton={styles.button}/>
                    </View>
                )
            default:
                return null;
        }
    };

    return (
        renderStep()
    )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemOnBoard: {
        width: '100%',
        height: '60%',
        marginTop: '-20%'
,        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        width: '60%',
        fontWeight: '600',
        fontSize: 36,
        color: 'rgba(0, 0, 0, 1)',
        textAlign: 'center'
    },
    imgOnBoard: {
        resizeMode: 'contain',
        marginTop: '10%'
    },
    button: {
        width: 255,
        height: 50,
    },
})