import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons} from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';

import {social, sendEmail} from '../util';


import styles from './styles';


const PakoPage = ({ navigation }) => {
	
	return (

		<SafeAreaView style={{ flex: 1 }}>

		<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.5}}>

			<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>
	  
			<View style={{flex: 1, width: '100%', height: '100%' }}>


				<View style={{flexDirection: 'row', justifyContent: 'space-between',  marginBottom: 10}}>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000', paddingLeft: 15}}></Text>
            			<Text style={{fontSize: 14, color: '#000', paddingLeft: 15}}>NDJEKNA NE RRJETE SOCIALE</Text>
					</View>

				</View>

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}} 
				
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
        

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}
				
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



                <TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2}}   
				
				onPress={()=> social('https://www.instagram.com/vala_mobile/')}>

					<View style={[styles.centerElement, {width: '100%', flexDirection: 'row', padding:10}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25 ,width:'15%'}}>
							<Ionicons name="logo-instagram" size={28} color="#26aa99" />
							
						</View>

						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25, width:'85%', height:50, marginHorizontal:10}}>
							<Text style={{fontSize: 15}}>YOUTUBE  channel</Text>
						</View>

					</View>

				</TouchableOpacity>


                <TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}   
				
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
        


    			<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
				
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

	  </ImageBackground>

      </SafeAreaView>

		);
	}




  export default PakoPage;
