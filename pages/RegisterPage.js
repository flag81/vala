import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import  { useState } from 'react';
import { sendEmail } from '../util';



export default function RegisterPage() {

  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Regjistrohu
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Numri i tele'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='numeric'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput 
          icon='mail'
          placeholder='Email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'

          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View>
        <Button
          style = {{    
            
            backgroundColor: '#FF1493',
            borderRadius: 4
        
            }}

            onPress={
              async () => await sendEmail("flag81@gmail.com", "test:", "test")
          }

          title="Ruaj te dhenat tuaja"
          
        />
      </View>


    </View>
  );
}