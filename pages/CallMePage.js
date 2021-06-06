import * as React from 'react';

import  { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button,Alert, SafeAreaView, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

 import RNPickerSelect from "react-native-picker-select";

import Constants from 'expo-constants';
import { handlePress} from '../util';



function checkphone(code,amount)
{


        if(isNaN(code))
        {
          Alert.alert('not num')
        }
        else if( code.length != 8)
        {
          Alert.alert('not 8')
          console.log(code.startsWith('4'));

        }
        else if( !code.startsWith('4'))
        {
          Alert.alert('not with 4')

        }
        else{

          //${%23} = hashtag
          //handlePress('tel:*103*' + code +'${%23}' )

          handlePress(`tel:*141*${code}\${%23}`)

        
        }
        

}


const CallMePage= ({ navigation }) => {
  

  const [secretCode, setsecretCode] = useState('');
  
  const [amount, setAmount] = useState(0);

  const DeviceWidth = Dimensions.get('window').width ;
	const DeviceHeight = Dimensions.get('window').height ;



  //console.log(errors);

  return (


    <SafeAreaView style={{ flex: 1 }}>

		<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.5}}>

			<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>
      
			<View style={{flex: 1, width: '100%', height: '100%' }}>


      <View style={{ width: '80%', padding:10}}>

                <Text style={styles.label}>Sheno numerin te telefonit qe doni ta lajm:</Text>


                  <TextInput
                    style={{height: 40, borderWidth: 1, borderRadius:15}}
                    onChangeText={(text) => setsecretCode(text)}
                    value={secretCode}
                    keyboardType= {"numeric"}
                    maxLength = {8}
                    placeholder = {'Sheno numerin e telefonit 4xxxxxxxx'}
                  />




      </View>


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



export default  CallMePage;