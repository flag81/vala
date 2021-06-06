import React from "react";
 import RNPickerSelect from "react-native-picker-select";
 import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';


export const Picker = ({ navigation }) => {
     return (
         <View style={styling.container}>
             <Text>Hello World!</Text>
             <RNPickerSelect
              placeholder={{ label: "Select you favourite language", value: null }}
       
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeStript", value: "TypeStript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
         </View>
     );
 }
 const styling = StyleSheet.create({
     container : {
         flex            : 1,
         backgroundColor : "#fff",
         alignItems      : "center",
         justifyContent  : "center",
     },
 });

 export default  Picker ;