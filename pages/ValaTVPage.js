import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,ImageBackground } from 'react-native';
import { Ionicons} from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';

import {social, sendEmail} from '../util';


import styles from './styles';


const ValaTVPage = ({ navigation }) => {
	
	return (

		<SafeAreaView style={{ flex: 1 }}>

		<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.5}}>

			<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>
	  
			<View style={{flex: 1, width: '100%', height: '100%' }}>

				<View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', marginBottom: 10}}>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000', paddingLeft: 15}}></Text>
            			<Text style={{fontSize: 14, color: '#000', paddingLeft: 15}}>VALA TV</Text>
					</View>

				</View>

				<TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 100}} 
				
					onPress={()=> social("market://details?id=appbit.es.pretperpare")}>

					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
                <Ionicons name="logo-facebook" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>DOWNLOAD Vala TV</Text>
                        <Text numberOfLines={3} style={{color: '#8f8f8f'}}>
							Klienteve ju ofron mundësinë e një kredie hua
							deri në 3 Euro  pa asnjë provizion shtese.
							</Text>

					</View>
				</TouchableOpacity>
        

			</View>

      </ScrollView> 
	  </ImageBackground>

      </SafeAreaView>

		);
	}



  export default ValaTVPage;
