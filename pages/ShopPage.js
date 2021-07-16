
import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity,  ScrollView, ImageBackground} from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';

import { handlePress} from '../util';



import styles from './styles';


 const ShopPage = ({ navigation }) => {

		
    return (
        <WebView
          source={{ uri: 'https://shop.kosovotelecom.com/' }}
          style={{ marginTop: 50 }}
        />
      );
	}

    const styling = StyleSheet.create({
  container1:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10
  }
});


  export default ShopPage;
