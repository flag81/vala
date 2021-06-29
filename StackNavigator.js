
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FirstPage from "./pages/FirstPage";
import PakoPage from "./pages/PakoPage";
import Form from "./pages/Form";
import IntPage from "./pages/IntPage";
import FolPage from "./pages/FolPage";
import FillPage from "./pages/FillPage";
import AlbPage from "./pages/AlbPage";
import FamPage from "./pages/FamPage";
import SocialPage from "./pages/SocialPage";
import TransferPage from "./pages/TransferPage";
import RegisterPage from "./pages/RegisterPage";
import ClassicPage from "./pages/ClassicPage";
import CallMePage from "./pages/CallMePage";
import NtripPage from "./pages/NtripPage";
import MissedCallsPage from "./pages/MissedCallsPage";
import ThreePPage from "./pages/ThreePPage";
import ValaTVPage from "./pages/ValaTVPage";


import { View,  StyleSheet} from "react-native";



//import { NavigationContainer } from '@react-navigation/native';

import NavigationDrawerStructure from "./NavigationDrawerStructure";
import CallCenterPage from "./pages/CallCenterPage";
import ClipPage from "./pages/ClipPage";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};



 
const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
    
        screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),


        headerBackground: () => (
          <View
            style={{
              backgroundColor: 'rgba(22, 23, 104, 0.8)',
              ...StyleSheet.absoluteFillObject,
              
            }}
          />
        ),

        headerTransparent: true,
        headerTintColor: 'white', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
    
    
      <Stack.Screen name="Home" component={FirstPage}
 

        options= {{
          title: 'Menu Kryesore',
          headerTransparent: true,         
      
        }}

        
      
      />


      
      <Stack.Screen name="IntPage" component={IntPage} 
            options= {{

              title: 'Pakot INT',
              headerTransparent: true, 

            }}
      />

      <Stack.Screen name="FolPage" component={FolPage} 
            options= {{

            title: 'Pakot FOL',
            headerTransparent: true, 

            }}
      />

      <Stack.Screen name="FillPage" component={FillPage} 
            options= {{

            title: 'Mbushe llogarine',
            headerTransparent: true, 

            }}
      />


<Stack.Screen name="TransferPage" component={TransferPage} 
            options= {{

            title: 'Transfero mbushje',
            headerTransparent: true, 

            }}
      />

    <Stack.Screen name="AlbPage" component={AlbPage} 
            options= {{

            title: 'Pako me Shqiperine',
            headerTransparent: true, 

            }}
      />


    <Stack.Screen name="FamPage" component={FamPage} 
            options= {{

            title: 'Pako Familiare',
            headerTransparent: true, 

            }}
      />

  <Stack.Screen name="SocialPage" component={SocialPage} 
            options= {{

            title: 'Rrjete Sociale',
            headerTransparent: true, 

            }}
      />

<Stack.Screen name="ThreePPage" component={ThreePPage} 
            options= {{

            title: '3P App',
            headerTransparent: true, 

            }}
      />

<Stack.Screen name="ValaTVPage" component={ValaTVPage} 
            options= {{

            title: 'Vala TV',
            headerTransparent: true, 

            }}
      />


        <Stack.Screen name="RegisterPage" component={RegisterPage} 
            options= {{

            title: 'Registerohu',
            headerTransparent: true, 

            }}
      />

      
      <Stack.Screen name="ClassicPage" component={ClassicPage} 
      
        options= {{

        title: 'Pako Classic',
        headerTransparent: true, 

      }}/>

      <Stack.Screen name="CallMePage" component={CallMePage} 
      
      options= {{

      title: 'Sherbimi Te lutem me thirr',
      headerTransparent: true, 

      }}/>

<Stack.Screen name="NtripPage" component={NtripPage} 
      
      options= {{

      title: 'Pako NTrip',
      headerTransparent: true, 

      }}/>

<Stack.Screen name="CallCenterPage" component={CallCenterPage} 
      
      options= {{

      title: 'Qendra e thirrjeve',
      headerTransparent: true, 

      }}/>


<Stack.Screen name="MissedCallsPage" component={MissedCallsPage} 
      
      options= {{

      title: 'Thirrjet e humbura',
      headerTransparent: true, 

      }}/>


<Stack.Screen name="ClipPage" component={ClipPage} 
      
      options= {{

      title: 'Sherbimi CLIP',
      headerTransparent: true, 

      }}/>


      <Stack.Screen name="Form" component={Form} 

      /> 

      <Stack.Screen name="Pako" component={PakoPage} 
      
      options= {{

        title: 'Aktivizo Pako',

      }}
      
      />
    </Stack.Navigator>



  );
}

const ContactStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator 
    

        screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#0D1688', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    
    >

      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Home" component={FirstPage} />
      <Stack.Screen name="IntPage" component={IntPage} />
      <Stack.Screen name="FolPage" component={FolPage} />
     

    </Stack.Navigator>
  );
}



const PakoStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator 

        screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#0D1688', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    
    >


      <Stack.Screen name="PakoPage" component={PakoPage} 
          options={{   
              title:"Aktivizo Pako"
          }}
      />


      <Stack.Screen name="IntPage" component={IntPage} />
      <Stack.Screen name="FolPage" component={FolPage} />

    </Stack.Navigator>
  );
}


export { MainStackNavigator, ContactStackNavigator,PakoStackNavigator };