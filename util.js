import * as React from 'react';


import qs from 'qs';


import {Linking,Alert,Text, View, Platform} from 'react-native';
  

export function get_sms_special(){

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


          return sms_special ;

}


  
  export  function onPressButton() {
    alert('You tapped the button!');
  }


  export  function register(phone,email) {

      alert("Tel: " + phone + " Email: " + email);

  }



export  function makeCall() {
    //alert('You tapped the button!');

     handlePress('tel:08001000')
  }
  

  export  function writeFacebook() {
    //alert('You tapped the button!');

     handlePress('https://www.messenger.com/t/valamobile')
  }


  export  function writeInstagram() {
    //alert('You tapped the button!');

     handlePress('https://www.instagram.com/vala_mobile/')
  }

  export  function writeTwitter() {
    //alert('You tapped the button!');

     handlePress('https://twitter.com/Vala_mobile')
  }

  export  function writeYoutube() {
    //alert('You tapped the button!');

     handlePress('https://www.youtube.com/channel/UCDEH2lD8qVuLmIhJ5qAlefA')
  }



export function social(url){


  //alert('You long-pressed the soc !');

  handlePress(url);
  

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



export async function sendEmail(to, subject, body) {
   
 
    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
    });



    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not open email');
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
        width: 50,
        height: 50,
      }}>

      <Text style={{ color: 'white', fontSize: 12 }}>{initials}</Text>
    </View>
  );
};

