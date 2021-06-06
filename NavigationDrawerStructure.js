import * as React from 'react';
import { View, TouchableOpacity, Image} from 'react-native';

import { useNavigation} from '@react-navigation/native';




const  BackArrow = (props) => {
  const isFirst = props.isFirst;

  //Alert.alert(isFirst)
  //console.log(isFirst);

  return (

    <>

    { isFirst   
      ? <Image source={require('./images/arrow-left-circle.png')} tintColor={'white'} /> 
      : <Image source={require('./images/home-outline.svg')} tintColor={'white'} />
    }

    </>




  )
}




const NavigationDrawerStructure = () => {
  //Structure for the navigatin Drawer


  const navigation = useNavigation();


 //console.log(navigation.canGoBack());



  return (



    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
      <TouchableOpacity onPress={ () =>  { 

            if(navigation.canGoBack()){

                navigation.goBack();

            }

        
        }  
        
        
        }>


        {/*Donute Button Image */}
        
        <BackArrow isFirst={navigation.canGoBack()}/>

        
 

      </TouchableOpacity>
    </View>
  );
};

export default NavigationDrawerStructure;