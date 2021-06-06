import * as React from 'react';

import  { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

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



  //console.log(errors);

  return (


  <View style={styles.container}>


      <Text style={styles.label}>Sheno numerin te telefonit ku doni ti transferoni:</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => setsecretCode(text)}
          value={secretCode}
          keyboardType= {"numeric"}
          maxLength = {8}
          placeholder = {'Sheno numerin e telefonit 4xxxxxxxx'}
        />

      <View style={{ marginTop:20 }}>
          <Text>Shuma: {amount} EU</Text>
            
               <RNPickerSelect

                 placeholder={{ label: "Zgjidhe shumen", value: null }}
                 value={amount}
                 onValueChange={(value) => setAmount(value)}
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


      <View  style={{ marginTop:40 }}>
        <Button
         
         style={{height: 40, borderWidth: 0 }}

          title="Gjenero kodin per transfer"
          onPress={
                       () =>  checkphone(secretCode , amount)
                  }
        />

      </View>

     
    </View>


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



export default  TransferPage;