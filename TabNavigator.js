import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator, PakoStackNavigator } from "./StackNavigator";

import { TouchableOpacity, ScrollView,SafeAreaView, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import {makeCall, writeFacebook} from './util';

import { Ionicons } from '@expo/vector-icons';

import  PakoPage  from "./pages/PakoPage";

const Tab = createBottomTabNavigator();





const BottomTabNavigator = () => {


  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'rgba(48, 51, 118, 0.8)',
        position: 'absolute',
        borderTopWidth: 0,
      
      }
    }}>
      <Tab.Screen name="Home" component={MainStackNavigator} 
      
        options={{

          tabBarIcon: (props) => (<Ionicons name="md-home" size={props.size} color={props.color} />),
          title: 'Menu',
       

            }}
      
      />




<Tab.Screen  name="Pako" component={MainStackNavigator} 

listeners={({ navigation }) => ({
  tabPress: e => {

    //console.log("exe")
    // Prevent default action
    e.preventDefault();

    // Do something with the `navigation` object
    navigation.navigate('Home',{screen:"Pako"});
  },
})}



        options={{
          tabBarIcon: (props) => (
            <Ionicons name="md-checkbox-outline" size={props.size} color={props.color} />
            ),

              title: 'Aktivizo Pako',
            

            }}
/> 

 

<Tab.Screen name="Face" component={ContactStackNavigator} 

     listeners={{
        tabPress: e => {
          e.preventDefault(); // Use this to navigate somewhere else

          writeFacebook();
          //alert("flag")
          //console.log("Foo tab bar button pressed")
        },
      }}


      options={{

          tabBarIcon: (props) => (
          <Ionicons name="logo-facebook" size={props.size} color={props.color} />
          ),

          title: 'Na skruaj',

          tabBarButton: (props) => (<TouchableOpacity  {...props} />),
      }}

/>



  <Tab.Screen name="Contact" component={ContactStackNavigator} 



     listeners={{
        tabPress: e => {
          e.preventDefault(); // Use this to navigate somewhere else

          makeCall();
          //alert("flag")
          //console.log("Foo tab bar button pressed")
        },
      }}


      options={{

          tabBarIcon: (props) => (
          <Ionicons name="md-call" size={props.size} color={props.color} />
          ),

          title: 'Thirr ne Vala',

          tabBarButton: (props) => (<TouchableOpacity  {...props} />),
      }}




/>



    </Tab.Navigator>
  );
};

export default BottomTabNavigator;