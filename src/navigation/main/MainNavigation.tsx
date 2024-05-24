import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackParamList, TabMainStackParamList } from "../Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../../container/main/MainScreen";
import NotificationScreen from "../../container/main/NotificationScreen";
import ProfileScreen from "../../container/main/ProfileScreen";
import React from "react";
import { Image } from "react-native";
import { images } from "../../../assets/images";
import Icon from "../../components/Icon";
import { icons } from "../../../assets/icons";
import SearchScreen from "../../container/main/SearchScreen";
import CalenderScreen from "../../container/main/CalenderScreen";
import JobAndCareeScreen from "../../container/main/JobAndCareeScreen";

const Tab = createBottomTabNavigator<TabMainStackParamList>();
const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
        </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    )
};

const CalenderStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Calender" component={CalenderScreen} />
        </Stack.Navigator>
    )
};

const CareeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="JobAndCaree" component={JobAndCareeScreen} />
        </Stack.Navigator>
    )
};




const MainNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: 'absolute',
                left: 24,
                bottom: 10,
                width: 345,
                height: 66,
                borderRadius: 90,
                backgroundColor: 'rgba(47, 47, 47, 1)',
                elevation: 0
            }
            }}>
            <Tab.Screen name="MainStack" component={MainStack} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon source={icons.Home_active} /> : <Icon source={icons.Home} />
                ),
            }} />
            <Tab.Screen name="SearchStack" component={SearchStack} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon source={icons.Search_active} /> : <Icon source={icons.Search} />
                ),
            }} />
            <Tab.Screen name="CalenderStack" component={CalenderStack} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon source={icons.Calender_active} /> : <Icon source={icons.Calender} />
                ),
            }} />
            <Tab.Screen name="JobAndCareeStack" component={CareeStack} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon source={icons.Caree_active} /> : <Icon source={icons.Caree} />
                ),
            }} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{
                tabBarIcon: ({ focused }) => (
                    focused ? <Icon source={icons.Profile_active} /> : <Icon source={icons.Profile} />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default MainNavigation