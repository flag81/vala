
import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity,  ScrollView , SafeAreaView } from 'react-native';
import {   MaterialCommunityIcons } from '@expo/vector-icons';


import { handlePress} from '../util';
import styles from './styles';


 const CallCenterPage = ({ navigation }) => {

		
		return (

            <SafeAreaView style={{ flex: 1 }}>

            <ScrollView 
          style={[styling.container1, {backgroundColor: 'white'}]}
          contentContainerStyle={{flexGrow: 1}}>
      
			<View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', marginBottom: 2}}>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000', paddingLeft: 15}}></Text>
            			<Text style={{fontSize: 14, color: '#000', paddingLeft: 15}}>Kliko ne pako per te gjeneruar kodin e aktivizimit</Text>
					</View>


				</View>

				<TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 100}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
					<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}> 

                <MaterialCommunityIcons name="alpha-n-circle" size={28} color="#26aa99" />
						
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>Orari</Text>
						<Text  style={{color: '#8f8f8f'}}>

                        Hënë - E diele: non stop 24/7 {"\n"}

                       

          </Text>
					</View>
				</TouchableOpacity>




        <View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, padding:20, height: 100,

        justifyContent: 'space-between',  alignItems: 'center'}}>


				<View style={[styles.centerElement, {width: 100}]}>
					<View style={{borderWidth: 3, borderColor: '#ececec', padding: 10, borderRadius: 25}}>
						<TouchableOpacity  onPress={async () => await handlePress('tel:080010000')}>
                            <Text style={{fontSize: 12}}>INDIVIDE </Text>
                		</TouchableOpacity>
				    </View>
				</View>



        			<View style={[styles.centerElement, {width: 105}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('tel:080015000')}>
                				<Text style={{fontSize: 12}}>BIZNESET</Text>
              				</TouchableOpacity>
						</View>
					</View>

					<View style={[styles.centerElement, {width: 100}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('tel:080016000')}>
                				<Text style={{fontSize: 12}}>BIZNESET</Text>
              				</TouchableOpacity>
						</View>
					</View>


        </View>

		

			


      








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


  export default CallCenterPage ;
