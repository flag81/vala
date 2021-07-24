import * as React from 'react';

import  { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button, Alert, ScrollView,SafeAreaView, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

 import RNPickerSelect from "react-native-picker-select";

import Constants from 'expo-constants';
import { handlePress} from '../util';



function checkphone(code,amount)
{


  //console.log(typeof code)
  //console.log(code.startsWith('5'))

        if(isNaN(code))
        {
          Alert.alert('Duhet te jete numer')
        }
        else if( code.length != 8)
        {
          Alert.alert('Duhet te jete 8 shifor')
        }
        else if( code.charAt(0) != '4')
        {
          Alert.alert('Duhet te filloj me 4')
          
          
        }
        else if( amount < 1)
        {
          Alert.alert('Selekto shumen')
          
        }
        else{

          //${%23} = hashtag
          //handlePress('tel:*103*' + code +'${%23}' )

            handlePress(`tel:*121*${code}*${amount}*00000\${%23}`)
        
        }
        

}


const TransferPage= ({ navigation }) => {
  

  const [secretCode, setsecretCode] = useState('');
  const [amount, setAmount] = useState(0);

	const DeviceWidth = Dimensions.get('window').width ;
  const DeviceHeight = Dimensions.get('window').height ;

  //console.log(errors);

  return (


    <SafeAreaView style={{ flex: 1, width: DeviceWidth, height: DeviceHeight }}>

		  <ImageBackground source={require('../images/pako-familjare.png')}   
			  style={{ flex: 1, width: '100%', height: '100%'}} 
			  imageStyle= {{opacity:0.4}} > 
     
	 		  <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>

         <View style={{height: 100}} />
      
				<View style={{flex: 1, width: '100%', height: '100%' }}>


          <View style={{ width: '80%', padding:10}}>

            <Text style={{ fontSize:15, color:'black' , fontWeight:'bold'}}>Sheno numerin te telefonit ku doni ti transferoni:</Text>

              <TextInput

                style={{height: 50, borderWidth: 1, color:'black',borderRadius:15}}
                onChangeText={(text) => setsecretCode(text)}
                value={secretCode}
                keyboardType= {"numeric"}
                maxLength = {8}
                placeholder = {'Sheno numerin ne formatin 4xxxxxxxx'}
                placeholderTextColor="#000" 
              />

          </View>
      <View style={{ marginTop:20, fontSize:15, fontWeight:'black', color:'black', padding:10 }}>
          <Text>Shuma: {amount} EU</Text>
            
          <View style={{ borderWidth: 1, borderColor: 'black', overflow: 'hidden', width:'80%', height:'30%'}}>
               <RNPickerSelect

                  style={pickerStyle}
          
                 placeholder={{ label: "Zgjidhe shumen", value: null}}
                
                 value={amount}
                 onValueChange={(value) => setAmount(value)}
                 useNativeAndroidPickerStyle={false}
                 items =
                 {[
                     { label: "1 EU", value: "1" },
                     { label: "2 EU", value: "2" },
                     { label: "3 EU", value: "3" },
                     { label: "4 EU", value: "4" }, 
                     { label: "5 EU", value: "5" }
                 ]}
             />
             </View>
         </View>


      {/* <View  style={{ marginTop:40 }}>
        <Button
         
         style={{height: 40, borderWidth: 0 }}

          title="Gjenero kodin per transfer"
          onPress={
                       () =>  checkphone(secretCode , amount)
                  }
        />

      </View> */}


      
      <View style={{flexDirection: 'row', marginBottom: 2, padding:20,

          justifyContent: 'space-between',  alignItems: 'center'}}>


         <View style={[styles.centerElement, {width: 125}]}>
           <View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
               <TouchableOpacity  onPress={() => checkphone(secretCode , amount)}>
             <Text style={{fontSize: 12}}>Genero Kodin per transfer </Text>
               </TouchableOpacity>
               
           </View>
         </View>


       <View style={[styles.centerElement, {width: 125}]}>
           <View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
             <TouchableOpacity  onPress={async () => await handlePress('tel:*101' +'${%23}' )}>
             <Text style={{fontSize: 12}}>Kontrollo gjendjen e numrit tuaj</Text>
              </TouchableOpacity>
           </View>
        </View>


      </View>     

     
    </View>

    </ScrollView>

    </ImageBackground>

    </SafeAreaView>


  );
};


const inputStyle = {
  inputIOS: {
      color: 'black',
      paddingHorizontal: 10,
      borderRadius: 5,
      height: 50,
      borderRadius:15
  },
  placeholder: {
      color: 'black',
      borderRadius:15
    },
  inputAndroid: {
      color: 'black',
      paddingHorizontal: 10,
      borderRadius: 5,
      height: 50,
      borderRadius:15
  },
};

const pickerStyle = {
  inputIOS: {
      color: 'black',
      paddingHorizontal: 10,
      borderRadius: 15,
  },
  placeholder: {
      color: 'black',
      borderRadius:15
    },
  inputAndroid: {
      color: 'black',
      paddingHorizontal: 10,
      borderRadius: 25,
  },
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,

  },
  button: {

    color: 'red',
    height: 20,
    backgroundColor: '#FF1493', //vala colors
    borderRadius: 4,
   
  },
  
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: 'white',

  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});



export default  TransferPage;