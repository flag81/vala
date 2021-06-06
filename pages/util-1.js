import * as React from 'react';
import {

  Linking,
  Alert,
  View,
  Text
} from 'react-native';
  
  export function onPressButton() {
    alert('You tapped the button!');
  }

  export function onLongPressButton() {
    alert('You long-pressed the button!');
  }


  
export const handlePress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
     
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
      
    }

};
export async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;
 
    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}


export const InitialIcon = ({ initials }) => {
  return (
    
    
    <View
      style={{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 50,
      }}>

      <Text style={{ color: 'white', fontSize: 25 }}>{initials}</Text>
    </View>
  );
};







