import * as React from 'react';
import { Button, View, Text, SafeAreaView, Linking } from 'react-native';

import {onPressButton,onLongPressButton, handlePress} from '../util';

import styles from './styles';

import {Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

const smsURL = `sms:50555?body=INT M`;
const telURL = `tel:*101#`;
const faceURL =  `https://www.messenger.com/t/valamobile` ;


const ThirdPage = ({ navigation }) => {
  return (
 <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>

    <View style={{
      flexDirection: 'row',
      backgroundColor: "white"}}>

      <View>
        <TouchableOpacity onPress={onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Aktivizo Pako</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Transfero kredine</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Informatat e mia</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={async () => await handlePress(`https://www.messenger.com/t/valamobile`)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Na kontakto ne Facebook</Text>
          </View>
        </TouchableOpacity>


      </View>



      <View>
        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Mbushe logarine</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sherbimet ne Vala</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sherbimet Fikse</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={async () => await handlePress('tel:080010000')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Thirr ne Vala</Text>
          </View>
        </TouchableOpacity>
        

      </View>

    <View>
         <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Gjendja e llogarise</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Mbushe logarine</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Regjistrohu</Text>
          </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}
            title="Go back">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Fillimi</Text>
          </View>
        </TouchableOpacity>


      </View>


      </View>


      

      </View>
  );
}


export default  ThirdPage;