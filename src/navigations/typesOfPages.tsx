import { NavigatorScreenParams } from "@react-navigation/native"

 



export type AuthStackParamList = {
    Welcome: undefined

    SignIn: undefined
    SignUp: undefined

    BusinSignIn: undefined
    BusinSignUp: undefined
}

export type RootBottomTabParamList = {
    HomeStacK: undefined

}

export type HomeStackParamList = {
    Home: undefined

}

export type AppStackParamList = {
    Root: NavigatorScreenParams<RootBottomTabParamList>
    Settings: undefined
}

export type RootStackParamList = {
    AppStack: NavigatorScreenParams<AppStackParamList>
    AuthStack: NavigatorScreenParams<AuthStackParamList>
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}