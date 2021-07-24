import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button,  SafeAreaView,ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

  const Form = ({ navigation }) => {
  
  const { register, setValue, handleSubmit, control, reset, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log(errors);

  return (
    
    <SafeAreaView style={styles.container1}> 
      <ScrollView 
          style={[styles.container1, {backgroundColor: 'white'}]}
          contentContainerStyle={{flexGrow: 1}}>

          
    <View style={styles.container}>
      <Text style={styles.label}>Emri</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            
          />
        )}
        name="firstName"
        rules={{ required: true }}
      />
      {errors.firstName && <Text>Kjo fushe duhet te plotesohet.</Text>}
      <Text style={styles.label}>Mbiemri</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />
      {errors.lastName && <Text>Kjo fushe duhet te plotesohet.</Text>}


      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Ruaj"
          onPress={handleSubmit(onSubmit)}
        />
      </View>


    </View>
    </ScrollView>
</SafeAreaView>


  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#FF1493', //vala colors
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});



export default  Form;