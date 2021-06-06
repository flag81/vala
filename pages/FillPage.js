import * as React from 'react';

import  { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button, Alert , TouchableOpacity,  ScrollView , SafeAreaView, ImageBackground , Dimensions} from 'react-native';



import Constants from 'expo-constants';

import { handlePress, get_sms_special} from '../util';



function checkcode(code)
{


        if(isNaN(code))
        {
          Alert.alert('Duhet te jete vetem numer')
        }
        else if( code.length != 14)
        {
          Alert.alert('Duhet te jete 14 shifror')
        }
        else{

          //${%23} = hashtag
          handlePress('tel:*103*' + code +'${%23}' )
        
        }
        

}




const FillPage= ({ navigation }) => {

  const DeviceWidth = Dimensions.get('window').width ;
	const DeviceHeight = Dimensions.get('window').height ;
  

  const [secretCode, setsecretCode] = useState('');


  return (

    <SafeAreaView style={{ flex: 1, width: DeviceWidth, height: DeviceHeight }}>

		<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.5}} > 
				

        <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>

		
      
        <View style={{flex: 1, width: '100%', height: '100%' }}>



        <View style={{ width: '80%'}}>

          <Text style={styles.label}>Mbushje me gervishje</Text>
            <Text style={styles.label}>Sheno numerin:</Text>

              <TextInput
                style={{flex:1,  borderWidth: 1, height:40, marginLeft:10, padding:10}}
                onChangeText={(text) => setsecretCode(text)}
                value={secretCode}
                keyboardType= {"numeric"}
                maxLength = {14}
                placeholder = {'Sheno numerin e zbuluar 14 shifror'}
              />

        </View>


        

      <Text style={styles.label}>Gjatesia:{secretCode.length}</Text>



      <View style={{flexDirection: 'row', marginBottom: 2, padding:20,

          justifyContent: 'space-between',  alignItems: 'center'}}>


         <View style={[styles.centerElement, {width: 125}]}>
           <View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
               <TouchableOpacity  onPress={() => checkcode(secretCode)}>
             <Text style={{fontSize: 12}}>Genero Kodin per mbushje </Text>
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
    marginLeft: 10,
    fontSize:16

  },
  button: {

    color: 'white',
    height: 40,
    backgroundColor: '#FF1493', //vala colors
    borderRadius: 4,
    marginTop:20
  },
  
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 4,

    
  },
});



export default  FillPage;