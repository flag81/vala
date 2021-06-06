import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,SafeAreaView, Image, ImageBackground, Dimensions } from 'react-native';


import { handlePress} from '../util';
import styles from './styles';



 const FirstPage = ({ navigation }) => {

	const DeviceWidth = Dimensions.get('window').width ;
	const DeviceHeight = Dimensions.get('window').height ;
		
	return (

		


     	<SafeAreaView style={styling.container1}>

		<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.4}} > 
     
	 		<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>

		
      
				<View style={{flex: 1, width: '100%', height: '100%' }}>	
      
			 
					<View style={{flexDirection: 'row', justifyContent: 'space-between',   marginBottom: 10, alignContent:'center'}}>
						<View style={{ justifyContent: "center",alignItems: "center" , width:'100%'}}>
							<Text style={{fontSize: 18, fontWeight: "bold", color: '#000', paddingLeft: 15, textDecorationColor: "red" }}>
							Zgjidh sherbimet</Text>
						</View>

					</View>

				

				<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 80}} 

          			onPress={() => navigation.navigate('Pako')}>

					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>

						<Image source={require('../images/briefcase-check.png')} tintColor={"#FF1493"}/>
           
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Ativizo Pako</Text>
						<Text numberOfLines={1} style={{color: 'black'}}>INT M, INT S , Fol S, Trip etc</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}} onPress={() => navigation.navigate('FillPage')}> 
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<Image source={require('../images/clipboard-plus.png')} tintColor={"#FF1493"}/>
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Mbushe Llogarine</Text>
						<Text numberOfLines={1} style={{color: 'black'}}> SMS, gervishese, e-shop </Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: 'row', marginBottom: 2, height: 80}}
        
         				onPress={async () => await handlePress('tel:*101'+'${%23}')} >

					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<Image source={require('../images/checkbox-multiple-marked-outline.png')} tintColor={"#FF1493"}/>
            				
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Gjendja e llogarise</Text>
						<Text numberOfLines={3} style={{color: 'black'}}>Kliko per te gjeneruar kodin per gjendejse se llogarise</Text>
					</View>

				</TouchableOpacity>

        
				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}} 
					onPress={async () => await handlePress('https://shop.kosovotelecom.com/')} >
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<Image source={require('../images/basket.png')} tintColor={"#FF1493"}/>
							
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Bjej mbushje online</Text>
						<Text numberOfLines={1} style={{color: 'black'}}>Blej mbushje me kartelen tuaj</Text>
					</View>

				</TouchableOpacity>



				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}
        

					onPress={() => navigation.navigate('MissedCallsPage')}>
         			

					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
            				
							<Image source={require('../images/phone-missed.png')} tintColor={"#FF1493"}/>
							
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Thirrjet e hunbura</Text>
						<Text numberOfLines={3} style={{color: 'black'}}>Aktivizimi i shërbimit për thirrjet e humbura</Text>
					</View>

				</TouchableOpacity>


        		<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}} 
				onPress={() => navigation.navigate('TransferPage')}> 
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>

							
							<Image source={require('../images/account-arrow-right.png')} tintColor={"#FF1493"}/>
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Transefo kredine</Text>
						<Text numberOfLines={1} style={{color: 'black'}}>Transfero kredine ne nje numer tjeter</Text>
					</View>

				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}} 
				onPress={() => navigation.navigate('CallMePage')}> 
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							
							<Image source={require('../images/account-arrow-left.png')} tintColor={"#FF1493"}/>
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Te lutem me thirr</Text>
						<Text numberOfLines={1} style={{color: 'black'}}>Aktivizimi I sherbimit “Te lutem me thirr” </Text>
					</View>
				</TouchableOpacity>

{/*
        		<TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}}    
				onPress={() => navigation.navigate('RegisterPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<MaterialCommunityIcons name="phone" size={28} color="#FF1493" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>Regjisterohu</Text>
						<Text numberOfLines={1} style={{color: '#8f8f8f'}}>Regjistrohu me Vala</Text>
					</View>

				</TouchableOpacity>

*/}

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
	  				onPress={() => navigation.navigate('ThreePPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							
							<Image source={require('../images/account-group.png')} tintColor={"#FF1493"}/>
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>3P Aplikacioni</Text>
						<Text numberOfLines={2} style={{color: 'black'}}>
							Klientëve ju ofron mundësinë e një kredie hua
							deri në 3 Euro  pa asnjë provizion shtese.
							</Text>
						
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
	  				onPress={() => navigation.navigate('ValaTVPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							
							<Image source={require('../images/account-group.png')} tintColor={"#FF1493"}/>
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15,fontWeight: "bold"}}>VALA TV</Text>
						<Text numberOfLines={2} style={{color: 'black'}}>
							Klientëve ju ofron mundësinë e një kredie hua
							deri në 3 Euro  pa asnjë provizion shtese.
							</Text>
						
					</View>
				</TouchableOpacity>


      			<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
	  				onPress={() => navigation.navigate('SocialPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							
							<Image source={require('../images/account-group.png')} tintColor={"#FF1493"}/>
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Rrjete Sociale</Text>
						<Text numberOfLines={1} style={{color: 'black'}}>Na ndiq ne rrjete sociale</Text>
					
					</View>

				</TouchableOpacity>

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
	  				onPress={() => navigation.navigate('CallCenterPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						
							<Image source={require('../images/phone.png')} tintColor={"#FF1493"}/>
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Qendra e thirrjeve</Text>
						<Text numberOfLines={1} style={{color: 'black'}}>Na kontakto ne qendren e thirrjeve</Text>
					</View>

				</TouchableOpacity>

				
				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 50}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						
							
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}></Text>
						<Text numberOfLines={1} style={{color: 'black'}}></Text>
					</View>

				</TouchableOpacity>


    
	</View>

	


	</ScrollView>

	</ImageBackground>

</SafeAreaView>

      
		);
	
}

const styling = StyleSheet.create({
  container1:{
    flex: 1
  }
});


export default  FirstPage;