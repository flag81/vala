
import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, Image, ScrollView,ImageBackground, Dimensions } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';

import {onPressButton,onLongPressButton, handlePress} from '../util';


import styles from './styles';

 const FamPage = ({ navigation }) => {

	const DeviceWidth = Dimensions.get('window').width ;
const DeviceHeight = Dimensions.get('window').height ;

// console.log(DeviceWidth);
// console.log(DeviceHeight);

		
		return (

	


            <SafeAreaView style={{ flex: 1, width: DeviceWidth, height: DeviceHeight }}>

		<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.5}} > 
				

            <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>
			<View style={{height: 100}} />
		
      
			<View style={{flex: 1, width: DeviceWidth, height: DeviceHeight }}>




				<View style={{flexDirection: 'row', justifyContent: 'space-between',   marginBottom: 10, alignContent:'center'}}>
					<View style={{justifyContent: "center",alignItems: "center",paddingTop: 10, width:'100%'}}>
            			<Text style={{fontSize: 17, color: '#000', paddingLeft: 15}}>ZGJIDH PAKON</Text>
					</View>


				</View>

				<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 100}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>      
                <MaterialCommunityIcons name="alpha-m-circle" size={28} color="#26aa99" />
						
						</View>
					</View>
							<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
								<Text style={{fontSize: 15}}>FAM 1</Text>
									<Text numberOfLines={6} style={{color: 'black'}}>
			

									650 minuta kombetare{"\n"}
									650 SMS kombetare{"\n"}
									10 GB Internet{"\n"}
									10 EU
									Validiteti - 30 dite

									</Text>
							</View>
				</TouchableOpacity>




<View style={{flexDirection: 'row', marginBottom: 2, padding:20, height: 100,

 justifyContent: 'space-between',  alignItems: 'center',


}}>


					<View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
								<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=FAM 1')}>
              <Text style={{fontSize: 12}}>Genero Kodin per aktivizim FAM 1 </Text>
                </TouchableOpacity>
                
						</View>
					</View>



        <View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
		
			<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=FAM STATUS')}>
              <Text style={{fontSize: 12}}>Kontrollo gjendjen e pakos FAM 1</Text>
            </TouchableOpacity>
						</View>
					</View>

</View>

			


      

				<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 100}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>      
                <MaterialCommunityIcons name="alpha-l-circle" size={28} color="#26aa99" />
						
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>FAM 2</Text>
						<Text numberOfLines={6} style={{color: 'black'}}>
               
									650 minuta kombetare{"\n"}
									650 SMS kombetare{"\n"}
									10 GB Internet{"\n"}
									10 EU
									Validiteti - 30 dite

          </Text>
					</View>
				</TouchableOpacity>




<View style={{flexDirection: 'row', backgroundColor: 'rgba(52, 52, 52, alpha)', marginBottom: 2, padding:20, height: 100,

 justifyContent: 'space-between',  alignItems: 'center'

}}>


					<View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
								<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=FAM 2')}>
              <Text style={{fontSize: 12}}>Genero Kodin per aktivizim FAM 2 </Text>
                </TouchableOpacity>
                
						</View>
					</View>



				<View style={[styles.centerElement, {width: 125}]}>
					<View 	style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
						<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=FAM STATUS')}>
								<Text style={{fontSize: 12}}>Kontrollo gjendjen e pakos FAM 2</Text>
						</TouchableOpacity>
					</View>			
				</View>			

</View>



<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 100}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>      
                <MaterialCommunityIcons name="alpha-l-circle" size={28} color="#26aa99" />
						
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>FAM 2</Text>
						<Text numberOfLines={6} style={{color: 'black'}}>
               
									650 minuta kombetare{"\n"}
									650 SMS kombetare{"\n"}
									10 GB Internet{"\n"}
									10 EU
									Validiteti - 30 dite

          </Text>
					</View>
				</TouchableOpacity>




<View style={{flexDirection: 'row', backgroundColor: 'rgba(52, 52, 52, alpha)', marginBottom: 2, padding:20, height: 100,

 justifyContent: 'space-between',  alignItems: 'center'

}}>


					<View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
								<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=FAM 2')}>
              <Text style={{fontSize: 12}}>Genero Kodin per aktivizim FAM 2 </Text>
                </TouchableOpacity>
                
						</View>
					</View>



				<View style={[styles.centerElement, {width: 125}]}>
					<View 	style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
						<TouchableOpacity  onPress={async () => await handlePress('sms:50555?body=FAM STATUS')}>
								<Text style={{fontSize: 12}}>Kontrollo gjendjen e pakos FAM 2</Text>
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
  }
});


  export default FamPage;
