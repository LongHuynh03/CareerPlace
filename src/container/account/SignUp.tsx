import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonAuth from '../../components/ButtonAuth';
import { AccountStackScreenProps } from '../../navigation/Navigation';
import FormInput from '../../components/FormInput';

const SignUp: React.FC<AccountStackScreenProps<'SignUp'>> = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const {navigation} = props;

    const onHandleCreateAccount = () => {
        navigation.replace('SignIn')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Create account</Text>
            <FormInput 
            label='Email'
            placeholder='careeplace@gmail.com'
            onChangeText={(text)=>setEmail(text)}/>
            <FormInput 
            label='Username'
            placeholder='desing ninja'
            onChangeText={(text)=>setUsername(text)}/>
            <FormInput 
            label='Fullname'
            placeholder='Join Socli'
            onChangeText={(text)=>setFullname(text)}/>
            <ButtonAuth
                color='rgba(210, 255, 31, 1)'
                title='Create an account'
                onPress={onHandleCreateAccount}
                styleButton={styles.buttonCreate}/>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    buttonCreate: {
        width: 345,
        height: 58,
        marginTop: 30
    },
})