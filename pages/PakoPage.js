import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground, Dimensions  } from 'react-native';



import { SafeAreaView } from 'react-native';


import styles from './styles';


 const PakoPage = ({ navigation }) => {


	const DeviceWidth = Dimensions.get('window').width ;
	const DeviceHeight = Dimensions.get('window').height ;

		
	return (

      <SafeAreaView style={{ flex: 1 }}>

			<ImageBackground source={require('../images/pako-familjare.png')}   
			style={{ flex: 1, width: '100%', height: '100%'}} 
			imageStyle= {{opacity:0.4}} > 

		<ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1}}>

		<View style={{flex: 1, width: '100%', height: '100%' }}>


				<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000', paddingLeft: 15}}></Text>
            			<Text style={{fontSize: 14, color: '#000', paddingLeft: 15}}>
							Selekto pakot qe doni , te filloni me aktivizimin.
						</Text>
					</View>

				</View>

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}} onPress={() => navigation.navigate('IntPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						<Image source={require('../images/wifi.png')} tintColor={"#FF1493"}/>
                
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>PAKO INT</Text>
						<Text numberOfLines={2} style={{color: 'black'}}>
								INT M, INT L
								PA LIMIT-SMS
								100 min.komb

						</Text>
					</View>
				</TouchableOpacity>
        

				<TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
				onPress={() => navigation.navigate('FolPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						<Image source={require('../images/microphone.png')} tintColor={"#FF1493"}/>
							 
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>PAKO FOL</Text>
						<Text numberOfLines={2} style={{color: 'black'}}> 
								15 GB Int,
								PA LIMIT-Min Vala&Fiks,
								PA LIMIT-SMS komb,
								300 minuta komb
					</Text>
					</View>
				</TouchableOpacity>


    <TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    onPress={() => navigation.navigate('FamPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						<Image source={require('../images/account-multiple.png')} tintColor={"#FF1493"}/>
							
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>PAKO FAMILJARE</Text>
						<Text numberOfLines={3} style={{color: 'black'}}> 
							2 GB Internet
							PA LIMIT - Minuta Vala & Fiks
							PA LIMIT - SMS kombetare
							150 minuta kombëtare
            
            </Text>
					</View>
				</TouchableOpacity>


    <TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
	onPress={() => navigation.navigate('AlbPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						<Image source={require('../images/check.png')} tintColor={"#FF1493"}/>
						
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>PAKOT PER SHQIPERI</Text>
						<Text numberOfLines={2} style={{color: 'black'}}> 
							15 GB Int,
							PA LIMIT-Min Vala&Fiks,
							PA LIMIT-SMS komb,
							300 minuta komb
			
						</Text>
					</View>
				</TouchableOpacity>
        


    <TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
		onPress={() => navigation.navigate('ClassicPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						<Image source={require('../images/check.png')} tintColor={"#FF1493"}/>
				
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>PAKO VALA CLASSIC</Text>
						<Text numberOfLines={2} style={{color: 'black'}}> 
							15 GB Int,
							PA LIMIT-Min Vala&Fiks,
							PA LIMIT-SMS komb,
							300 minuta komb
					</Text>
					</View>
				</TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
		onPress={() => navigation.navigate('NtripPage')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						<Image source={require('../images/check.png')} tintColor={"#FF1493"}/>
							
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>PAKO NTRIP</Text>
							<Text numberOfLines={2} style={{color: 'black'}}> 
								15 GB Int,
								PA LIMIT-Min Vala&Fiks,
								PA LIMIT-SMS komb,
								300 minuta komb
			
							</Text>
					</View>
				</TouchableOpacity>




            <TouchableOpacity style={{flexDirection: 'row',  marginBottom: 2, height: 80}}    
			onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
						<Image source={require('../images/check.png')} tintColor={"#FF1493"}/>
							
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>PAKO CLIP</Text>
						<Text numberOfLines={2} style={{color: 'black'}}> 
							15 GB Int,
							PA LIMIT-Min Vala&Fiks,
							PA LIMIT-SMS komb,
							300 minuta komb
							
			</Text>
					</View>
				</TouchableOpacity>


				{/* spaceholder */}
				
				<View style={{height: 50}}/>
								
			


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


  export default PakoPage;
