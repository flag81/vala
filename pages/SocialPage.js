import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons} from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';

import {social, sendEmail} from '../util';


import styles from './styles';


const PakoPage = ({ navigation }) => {
	
	return (

      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView 
          style={[styling.container1, {backgroundColor: 'white'}]}
          	contentContainerStyle={{flexGrow: 1}}>

			<View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', marginBottom: 10}}>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000', paddingLeft: 15}}></Text>
            			<Text style={{fontSize: 14, color: '#000', paddingLeft: 15}}>NDJEKNA NE RRJETE SOCIALE</Text>
					</View>

				</View>

				<TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}} 
				
					onPress={()=> social('https://www.facebook.com/valamobile')}
				
				>

					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
                <Ionicons name="logo-facebook" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>FACEBOOK</Text>

					</View>
				</TouchableOpacity>
        

				<TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}}
				
				onPress={()=> social('https://twitter.com/Vala_mobile')}
					>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							 <Ionicons name="logo-twitter" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>TWITTER</Text>				
					</View>
				</TouchableOpacity>



                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}}   
				
				onPress={()=> social('https://www.instagram.com/vala_mobile/')}
				
				>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<Ionicons name="logo-instagram" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>INSTAGRAM</Text>
					</View>
				</TouchableOpacity>


                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}}   
				
				onPress={()=> social('https://www.youtube.com/channel/UCDEH2lD8qVuLmIhJ5qAlefA')}
				
				>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
                        <Ionicons name="logo-youtube" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>YOUTUBE</Text>
					</View>
				</TouchableOpacity>
        


    			<TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}}    
				
				onPress={
					async () => await sendEmail("info@kosovotelecom.com", "", "")
				}
>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
                        	<Ionicons name="md-mail" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>SHKRUAJ ME EMAIL</Text>
			
					</View>
				</TouchableOpacity>



			</View>

      </ScrollView> 

      </SafeAreaView>

		);
	}



  const styling = StyleSheet.create({
  container1:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10
  }
});


  export default PakoPage;
