import { StyleSheet , Dimensions} from "react-native";


const DeviceWidth = Dimensions.get('window').width ;



const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center'
  },
  container1:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  button: {
    marginBottom: 5,
    marginLeft:5,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white'
  },
  
  box: {width: DeviceWidth*0.3, height: DeviceWidth*0.3, marginBottom:2,marginLeft:2, backgroundColor: 'powderblue'},

  centerElement: {justifyContent: 'center', alignItems: 'center'}
});







export default styles ;
