import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, MainStackNavigator, PakoStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

import { NavigationContainer } from '@react-navigation/native';

import CustomSidebarMenu from './CustomSidebarMenu';
import Form from './pages/Form';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();




const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator 
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        
        
        
        

        drawerContent={(props) => <CustomSidebarMenu {...props} />}>

   

      <Drawer.Screen name="Menu" component={TabNavigator} 
      
       options= {{

        title: 'Menu Kryesore',

       }}

      />  

      <Drawer.Screen name="Form" component={ContactStackNavigator} 
      
      
      options= {{

        title: 'Regjistrohu',

            drawerIcon: ({focused, size}) => (
            <Ionicons
              name="information-circle-outline"
           
              size={28}
              color={focused ? '#FF1493' : '#FF1493'}
            />
          ),

      }}
      
      />    
      
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;