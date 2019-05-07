

import React, {Component}from 'react';
import { View,Text,Button,Alert,Image, TextInput,StyleSheet } from 'react-native';
import{createStackNavigator,createAppContainer}from 'react-navigator';



class HomeScreen extends Component {
    render (){
      return(
        <View>style={{flex:1, justifyContemt: 'center'}}
          <text> style={{fontSize:50}}>Tela</text>

</View>
      );
      }
    }
const AppNavigator = createStackNavigator(
  {
Home:{
  screen: HomeScreen
}
  }
);

const Appcontainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render(){
    return<Appcontainer/>;
      
  }
  }