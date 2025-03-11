import React from 'react'
import { View, Image, StyleSheet, Platform, Button, TextInput } from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter URL');
  return (
    <View style = {styles.containerColumn} >
      <View style = {styles.containerRow}>
        {/*Applies to all new created text inputs */}
        <TextInput 
          style = {styles.input}
          onChangeText={onChangeText}
          value = {text}
        />
        <Button
          title = "CLICK ME"
          onPress = {()=> alert(" STOP PRESSING ME!" + text)}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: 'space-between',
    
  },
  input:{
    justifyContent: 'center',
  },

  },
);
