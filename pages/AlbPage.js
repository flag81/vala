
import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, Image, ScrollView , ImageBackground} from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons, Feather, SimpleLineIcons } from '@expo/vector-icons';



import { SafeAreaView } from 'react-native';

import {onPressButton,onLongPressButton, handlePress} from '../util';



import styles from './styles';

 const AlbPage = ({ navigation }) => {
		
return (

		<SafeAreaView style={{ flex: 1 }}>

		<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.5}}>

			<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>
      
			<View style={{flex: 1, width: '100%', height: '100%' }}>


				<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000', paddingLeft: 15}}></Text>
            						<Text style={{fontSize: 14, color: '#000', paddingLeft: 15}}>Kliko ne pako per te gjeneruar kodin e aktivizimit</Text>
					</View>


				</View>


				<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 100}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 15}}>    
						<Text style={{fontSize: 15, color: "white"}}> ALB {"\n"} 200</Text>
               					
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						
						<Text numberOfLines={6} style={{color: 'black'}}>
							6 GB Internet{"\n"}
							PA LIMIT - Minuta Vala & Fiks{"\n"}
							PA LIMIT - SMS kombetare{"\n"}
							100 minuta kombetare,
							Validiteti - 30 dite

          				</Text>
					</View>
				</TouchableOpacity>




					<View style={{flexDirection: 'row', marginBottom: 2, padding:20, height: 100,

					justifyContent: 'space-between',  alignItems: 'center',


					}}>


					<View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
								<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=ALB 200')}>
              <Text style={{fontSize: 12}}>Genero Kodin per aktivizim ALB 200 </Text>
                </TouchableOpacity>
                
						</View>
					</View>



        <View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=ALB STATUS')}>
              <Text style={{fontSize: 12}}>Kontrollo gjendjen e pakos</Text>
               </TouchableOpacity>
						</View>
					</View>

</View>

			


      

				<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 100}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 15}}>    
						<Text style={{fontSize: 15, color: "black"}}> ALB {"\n"} 500</Text>
               					
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						
						<Text numberOfLines={6} style={{color: 'black'}}>
								6 GB Internet{"\n"}
								PA LIMIT - Minuta Vala & Fiks{"\n"}
								PA LIMIT - SMS kombetare{"\n"}
								100 minuta kombetare,
								Validiteti - 30 dite

          </Text>
					</View>
				</TouchableOpacity>




				<View style={{flexDirection: 'row', marginBottom: 2, padding:20, height: 100,

				justifyContent: 'space-between',  alignItems: 'center'

				}}>


					<View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
								<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=ALB STATUS')}>
              <Text style={{fontSize: 12}}>Genero Kodin per aktivizim ALB 500 </Text>
                </TouchableOpacity>
                
						</View>
					</View>



        <View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=INT STATUS')}>
              <Text style={{fontSize: 12}}>Kontrollo gjendjen e pakos ALB 500</Text>
               </TouchableOpacity>
						</View>
					</View>

</View>

			</View>

            </ScrollView> 

			</ImageBackground>

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


  export default AlbPage;
