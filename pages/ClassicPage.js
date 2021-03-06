
import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity,  ScrollView, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';

import { handlePress} from '../util';



import styles from './styles';


 const ClassicPage = ({ navigation }) => {

		
		return (

			<SafeAreaView style={{ flex: 1 }}>

			<ImageBackground source={require('../images/pako-familjare.png')}   
				style={{ flex: 1, width: '100%', height: '100%'}} 
				imageStyle= {{opacity:0.5}}>
	
				<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>
					
				<View style={{height: 100}} />
		  
				<View style={{flex: 1, width: '100%', height: '100%' }}>




				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 120}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
					<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>      
                <MaterialCommunityIcons name="alpha-c-circle" size={28} color="#26aa99" />
						
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>VALA CLASSIC</Text>
						<Text numberOfLines={6} style={{color: 'black'}}>
                        Vala Classic is a package that offers to all Vala 
                        customers calls towards national carriers for only 4.5 cents per minute, {"\n"}
                        after paying 2 euros as a monthly fee.{"\n"}

          </Text>
					</View>
				</TouchableOpacity>




        <View style={{flexDirection: 'row',  marginBottom: 2, padding:20, height: 100,

        justifyContent: 'space-between',  alignItems: 'center',


        }}>


				<View style={[styles.centerElement, {width: 100}]}>
					<View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25,  height:100, width:100, justifyContent: 'center'}}>
						<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=CLASSIC PLUS')}>
                            <Text style={{fontSize: 12, textAlign:"center"}}>Genero Kodin per aktivizim  </Text>
                </      TouchableOpacity>
				    </View>
				</View>



        <View style={[styles.centerElement, {width: 100}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25, height:100, width:100, justifyContent: 'center'}}>
							<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=CLASSIC STATUS')}>
                <Text style={{fontSize: 12, textAlign:"center"}}>Kontrollo gjendjen e pakos </Text>
              </TouchableOpacity>
						</View>
					</View>
        


        		<View style={[styles.centerElement, {width: 100}]}>
								<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25, height:100, width:100, justifyContent: 'center'}}>
									<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=CLASSIC MINUS')}>
						<Text style={{fontSize: 12, textAlign:"center"}}>DEAKTIVIZO PAKON</Text>
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


  export default ClassicPage;
