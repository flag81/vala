import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator,  PakoStackNavigator } from "./StackNavigator";

import { TouchableOpacity } from 'react-native';

import {makeCall, writeFacebook} from './util';

import { Ionicons } from '@expo/vector-icons';

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();





const BottomTabNavigator = () => {


  return (
    <Tab.Navigator tabBarOptions={{

        activeTintColor:"blue",
        inactiveTintColor:"gray",


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


<Tab.Screen  name="Pako" component={PakoStackNavigator} 


        options={{
          tabBarIcon: (props) => 
      
              (
                <Ionicons name="md-checkbox-outline" size={props.size} color={props.color}  />
              )
          
            ,

              title: 'Aktivizo Pako',
            
            }}

            

/> 



 

<Tab.Screen name="Face" component={PakoStackNavigator} 

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



  <Tab.Screen name="Contact" component={MainStackNavigator} 



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