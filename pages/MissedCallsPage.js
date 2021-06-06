
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  ScrollView , SafeAreaView, ImageBackground } from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import { handlePress} from '../util';
import styles from './styles';


{/*
      missed called page for activization and deactivization
*/}


const MissedCallsPage = ({ navigation }) => {
		
return (

        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={[styling.container1, {backgroundColor: 'white'}]} contentContainerStyle={{flexGrow: 1}}>
      
			    <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
				    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', marginBottom: 2}}>
					    <View style={[styles.centerElement, {height: 20}]}>
						      <Text style={{fontSize: 18, color: '#000', paddingLeft: 15}}></Text>
            		
					</View>


				</View>

				<TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 100}} onPress={()=>{}}>
					<View style={[styles.centerElement, {width: 75}]}>
					<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}> 

                <MaterialCommunityIcons name="alpha-n-circle" size={28} color="#26aa99" />
						
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>Mos i humbe thirrjet</Text>
						<Text  style={{color: '#8f8f8f'}}>
                      Sherbimi per thirrjet e humbura. Sherbim Falas.  {"\n"}
          </Text>
					</View>
				</TouchableOpacity>



        <View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, padding:20, height: 100,

        justifyContent: 'space-between',  alignItems: 'center'}}>

{/*

comment section

*/
}
 
        			<View style={[styles.centerElement, {width: 105}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('tel:**62*222\${%23}')}>
                				<Text style={{fontSize: 12, textAlign:"center"}}>AKTIVIZO SHERBIMIN</Text>
              				</TouchableOpacity>
						</View>
					</View>

					<View style={[styles.centerElement, {width: 100}]}>
						<View style={{borderWidth: 3, borderColor: '#ececec', padding:10 , borderRadius: 25}}>
							<TouchableOpacity  onPress={async () => await handlePress('tel:${%23}${%23}62\${%23}')}>
                				<Text style={{fontSize: 12,textAlign:"center"}}>DEAKTIVIZO SHERBIMIN</Text>
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


export default MissedCallsPage ;
