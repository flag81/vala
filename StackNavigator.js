
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





import { NavigationContainer } from '@react-navigation/native';

import NavigationDrawerStructure from "./NavigationDrawerStructure";
import CallCenterPage from "./pages/CallCenterPage";

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
        headerStyle: {
          backgroundColor: 'rgba(22, 23, 104, 0.8)',
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
    
    
      <Stack.Screen name="Home" component={FirstPage}
 

        options= {{
          title: 'Menu Kryesore',
          

      
        }}

        
      
      />


      
      <Stack.Screen name="IntPage" component={IntPage} 
            options= {{

              title: 'Pakot INT',

            }}
      />

      <Stack.Screen name="FolPage" component={FolPage} 
            options= {{

            title: 'Pakot FOL',

            }}
      />

      <Stack.Screen name="FillPage" component={FillPage} 
            options= {{

            title: 'Mbushe llogarine',

            }}
      />


<Stack.Screen name="TransferPage" component={TransferPage} 
            options= {{

            title: 'Transfero mbushje',

            }}
      />

    <Stack.Screen name="AlbPage" component={AlbPage} 
            options= {{

            title: 'Pako me Shqiperine',

            }}
      />


    <Stack.Screen name="FamPage" component={FamPage} 
            options= {{

            title: 'Pako Familiare',

            }}
      />

  <Stack.Screen name="SocialPage" component={SocialPage} 
            options= {{

            title: 'Rrjete Sociale',

            }}
      />

<Stack.Screen name="ThreePPage" component={ThreePPage} 
            options= {{

            title: '3P App',

            }}
      />

<Stack.Screen name="ValaTVPage" component={ValaTVPage} 
            options= {{

            title: 'Vala TV',

            }}
      />


        <Stack.Screen name="RegisterPage" component={RegisterPage} 
            options= {{

            title: 'Registerohu',

            }}
      />

      
      <Stack.Screen name="ClassicPage" component={ClassicPage} 
      
        options= {{

        title: 'Pako Classic',

      }}/>

      <Stack.Screen name="CallMePage" component={CallMePage} 
      
      options= {{

      title: 'Sherbimi Te lutem me thirr',

      }}/>

<Stack.Screen name="NtripPage" component={NtripPage} 
      
      options= {{

      title: 'Pako NTrip',

      }}/>

<Stack.Screen name="CallCenterPage" component={CallCenterPage} 
      
      options= {{

      title: 'Qendra e thirrjeve',

      }}/>


<Stack.Screen name="MissedCallsPage" component={MissedCallsPage} 
      
      options= {{

      title: 'Thirrjet e humbura',

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