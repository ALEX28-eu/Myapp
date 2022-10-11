import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground
} from "react-native"
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import { createAppContainer, createSwitchNavigator } from 'react-navigation'





export default class App extends React.Component {




  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    )
  }

}


var AppNavigator=createSwitchNavigator({
  screen1:HomeScreen,
  screen2:LoginScreen
})

const AppContainer=createAppContainer(AppNavigator)