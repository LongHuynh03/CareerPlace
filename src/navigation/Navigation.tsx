import {  BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type SplashProps = {};

type OnBoardProps = {};

type SignInProps = {};

type SignUpProps = {};

type MainProps = {};

type CalenderProps = {};

type FavoriteProps ={};

type JobAndCareeProps = {};

type NotificationProps = {};

type ProfileProps = {};

type SearchProps = {};

export type OnBoardStackParamList = {
    Splash: SplashProps | undefined,
    OnBoard: OnBoardProps | undefined,
}

export type AccountStackParamList = {
    SignIn: SignInProps | undefined,
    SignUp: SignUpProps | undefined,
}

export type MainStackParamList = {
    Calender: CalenderProps | undefined,
    Favorite: FavoriteProps | undefined,
    JobAndCaree: JobAndCareeProps | undefined,
    Main: MainProps | undefined,
    Notification: NotificationProps | undefined,
    Profile: ProfileProps | undefined,
    Search: SearchProps | undefined,
}

export type TabMainStackParamList = {
    CalenderStack: CalenderProps | undefined,
    FavoriteStack: FavoriteProps | undefined,
    JobAndCareeStack: JobAndCareeProps | undefined,
    MainStack: MainProps | undefined,
    NotificationStack: NotificationProps | undefined,
    ProfileStack: ProfileProps | undefined,
    SearchStack: SearchProps | undefined,
}


//cấu hình tab screen Main 
export type TabMainStackNavigation = BottomTabNavigationProp<TabMainStackParamList>;
export type S1 = keyof TabMainStackParamList;
export type TabMainStackScreenProps<RouterName extends S1> = BottomTabScreenProps<
    TabMainStackParamList,
    RouterName
>

//cấu hình stack screen Main 
export type MainStackNavigation = StackNavigationProp<MainStackParamList>;
export type S2 = keyof MainStackParamList;
export type MainStackScreenProps<RouterName extends S2> = StackScreenProps<
    MainStackParamList,
    RouterName
>

//cấu hình screen onboard
export type OnBoardStackNavigation = StackNavigationProp<OnBoardStackParamList>;
export type X = keyof OnBoardStackParamList;
export type OnBoardStackScreenProps<RouterName extends X> = StackScreenProps<
    OnBoardStackParamList,
    RouterName
>

//cấu hình screen account
export type AccountStackNavigation = StackNavigationProp<AccountStackParamList>;
export type Y = keyof AccountStackParamList;
export type AccountStackScreenProps<RouterName extends Y> = StackScreenProps<
    AccountStackParamList,
    RouterName
>

