import * as React from 'react';

import  { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

 import RNPickerSelect from "react-native-picker-select";

import Constants from 'expo-constants';
import { handlePress} from '../util';




const FillPage= ({ navigation }) => {
  

  const [secretCode, setsecretCode] = useState('');

  const [bankCode, setbankCode] = useState('');
  
  const [amount, setAmount] = useState(0);



  //console.log(errors);

  return (


  <View style={styles.container}>


    <Text style={styles.label}>Mbushje me gervishje</Text>
      <Text style={styles.label}>Sheno numerin:</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => setsecretCode(text)}
          value={secretCode}
          keyboardType= {"numeric"}
          maxLength = {20}
          placeholder = {'Sheno numerin e zbuluar'}
        />


      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Gjenero kodin per mbushje"
          onPress={
                      async () => await handlePress('tel:*103*' + secretCode)
                  }
        />
      </View>
    


        <View style={styles.container}>
          <Text>Per Bankes me SMS</Text>
             <Text>{bankCode}</Text>
               <RNPickerSelect

                 placeholder={{ label: "Zgjidhe banken tuaj", value: null }}
                 value={bankCode}
                 onValueChange={(value) => setbankCode(value)}
                 items={[
                     { label: "Banka Ekonomike	", value: "50005" },
                     { label: "NLB Banka", value: "50444" },
                     { label: "ProCredit Bank	", value: "50333" },
                     { label: "Raiffeisen Bank	", value: "50222" },
                     { label: "TEB Bank	", value: "50001" },
 
                 ]}
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

    color: 'white',
    height: 40,
    backgroundColor: '#FF1493', //vala colors
    borderRadius: 4,
    marginTop:20
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
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



export default  FillPage;