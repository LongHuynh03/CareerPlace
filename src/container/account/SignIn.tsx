import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonAuth from '../../components/ButtonAuth';
import { AccountStackScreenProps } from '../../navigation/Navigation';
import FormInput from '../../components/FormInput';

const SignIn: React.FC<AccountStackScreenProps<'SignIn'>> = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {navigation} = props;

    const onHandleLogIn = () => { 
        navigation.replace('SignUp');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.textTitle}>Log in your</Text>
            <FormInput
                label='Email'
                placeholder='careeplace@gmail.com'
                onChangeText={(text) => setEmail(text)} />
            <FormInput
                label='Password'
                placeholder='**********'
                onChangeText={(text) => setPassword(text)} />
            <ButtonAuth
                color='rgba(210, 255, 31, 1)'
                title='Log in'
                onPress={onHandleLogIn}
                styleButton={styles.buttonLogin}/>
        </ScrollView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(26, 26, 26, 1)'
    },
    textTitle: {
        fontWeight: '600',
        fontSize: 36,
        color: 'rgba(255, 255, 255, 1)',
        marginBottom: 30
    },
    buttonLogin: {
        width: 345,
        height: 58,
        marginTop: 30
    },
})