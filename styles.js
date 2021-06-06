import { StyleSheet , Dimensions} from "react-native";
import { Icon } from 'react-native-elements';


const DeviceWidth = Dimensions.get('window').width ;
const DeviceHeight = Dimensions.get('window').height ;


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center'
  },
  button: {
    marginBottom: 5,
    marginLeft:5,
    height: 10,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  
  box: {width: DeviceWidth*0.3, height: DeviceHeight*0.3, marginBottom:2,marginLeft:2, backgroundColor: 'powderblue'}
});




export default styles ;