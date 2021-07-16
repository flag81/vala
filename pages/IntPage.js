
import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, ScrollView, Platform ,  ImageBackground, Dimensions } from 'react-native';
import {  MaterialCommunityIcons } from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';

import { handlePress, get_sms_special} from '../util';


import styles from './styles';

 const IntPage = ({ navigation }) => {

	var sms_special = '';
	
	if (Platform.OS === 'ios')
	{

		sms_special = '&';
	}
	else if (Platform.OS === 'android')
	{

		sms_special = '?';
	}
	else
	{

		sms_special = '';
	}


		
	return (

        <SafeAreaView style={{ flex: 1 }}>

			<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.4}} >


      
			
			<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>

			<View style={{height: 100}} />

			<View style={{flex: 1, width: '100%', height: '100%' }}>

				<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
					<View style={[styles.centerElement, {height: 50}]}>
						
            						<Text style={{fontSize: 14, color: '#000', paddingLeft: 15}}>
										Kliko ne pako per te gjenerar kodin e aktivizimit
									</Text>
					</View>


				</View>

				<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 100}} 
				onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>      
                <MaterialCommunityIcons name="alpha-m-circle" size={28} color="#26aa99" />
						
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>INT M</Text>
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
								<TouchableOpacity  onPress={async () => await handlePress('sms:50555' + get_sms_special() + 'body=INT M')}>
              <Text style={{fontSize: 12}}>Genero Kodin per aktivizim INT M </Text>
                </TouchableOpacity>
                
						</View>
					</View>


        <View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('sms:50555'+ get_sms_special() + 'body=INT STATUS')}>
              <Text style={{fontSize: 12}}>Kontrollo gjendjen e pakos</Text>
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
						<Text style={{fontSize: 15}}>INT L</Text>
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
								<TouchableOpacity  onPress={async () => await handlePress('sms:50555'+ get_sms_special() + 'body=INT L')}>
              <Text style={{fontSize: 12}}>Genero Kodin per aktivizim INT L </Text>
                </TouchableOpacity>
                
						</View>
					</View>



        <View style={[styles.centerElement, {width: 125}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('sms:50555' + get_sms_special() + 'body=INT STATUS')}>
              <Text style={{fontSize: 12}}>Kontrollo gjendjen e pakos L</Text>
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


  export default IntPage;
