import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "../../container/onboard/OnBoardScreen";
import SplashScreen from "../../container/onboard/SplashScreen";


const Stack = createStackNavigator();

const OnBoardNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="OnBoard" component={OnBoardScreen} />
        </Stack.Navigator>
    )
}

export default OnBoardNavigation;