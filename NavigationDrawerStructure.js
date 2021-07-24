import * as React from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import { useNavigation,  useRoute} from '@react-navigation/native';


const  BackArrow = (props) => {



  const route = useRoute();
  //console.log('---'+route.name);

  
  //console.log(props.navigation);

  if (route.name ==="Home")  
  { 
    first = false
  }
  else
  {
    first = true
  }

  return (

    <>

    { first  
      ? <Image source={require('./images/arrow-left-circle.png')} tintColor={'white'} /> 
      : <Image source={require('./images/home-outline.svg')} tintColor={'white'} />
    }

    </>


  )
}




const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer


  const navigation = useNavigation();



//console.log();



  return (



    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
      <TouchableOpacity onPress={ () =>  { 

            if(navigation.canGoBack()){

                navigation.goBack();

            }

        
        }  
        
        
        }>


        {/*Donute Button Image */}
        
        <BackArrow />

        
 

      </TouchableOpacity>
    </View>
  );
};

export default NavigationDrawerStructure;