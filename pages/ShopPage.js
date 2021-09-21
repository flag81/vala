
import React, { useState } from 'react';
import { StyleSheet,  Text, View, TouchableOpacity,  ScrollView, ImageBackground, ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { SafeAreaView } from 'react-native';


import styles from './styles';

const ActivityIndicatorElement = () => {
  return (
    <View style={styles1.activityIndicatorStyle}>
      <ActivityIndicator color="#009688" size="large" />
    </View>
  );
};


 const ShopPage = ({ navigation }) => {


  const [visible, setVisible] = useState(false);
		
    return (

      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container1}>
        <WebView
          source={{ uri: 'https://shop.kosovotelecom.com/' }}
          style={{ marginTop: 100 }}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />

        {visible ? <ActivityIndicatorElement /> : null}
        </View>
    </SafeAreaView>
      );
	}

  const styles1 = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
    },
    activityIndicatorStyle: {
      flex: 1,
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
  });




  export default ShopPage;
