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



export default class HomeScreen extends React.Component{
gotologinscreen=()=>{
    this.props.navigation.navigate("screen1")
}



render(){
    return(
        <View>
<TouchableOpacity onPress={this.gotologinscreen}> 
    <Text> go to homescreen </Text>
    </TouchableOpacity>      
    </View>)
}

}