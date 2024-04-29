import { createStackNavigator } from "@react-navigation/stack";
import { AccountStackParamList } from "../Navigation";
import SignIn from "../../container/account/SignIn";
import SignUp from "../../container/account/SignUp";

const Stack = createStackNavigator<AccountStackParamList>();

const AccountNavigation = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
)}

export default AccountNavigation