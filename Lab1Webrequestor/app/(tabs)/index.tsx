import React from 'react';
import {useState} from 'react';
import { View, Image, StyleSheet, Platform, Button, TextInput, Text } from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Enter URL');

  {/** Constant to retrieve data */}
  const [webData, setwebData] = useState(""); //states and react hooks

  {/** Constant to send web package */}
  const request = new XMLHttpRequest();


  function handlePressButtonAsync() {
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        console.log("success", + request.responseText)
        setwebData("Status: "+ request.status + " " + request.statusText + " " + request.responseText);
      } else{
        console.warn("error")
        setwebData("Error: "+ request.status + " " + request.statusText + " " + request.responseText);
      }
    };
    request.open ('GET', text);
    request.send ();

  }
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
          title = "Goto request"
          onPress = {()=> handlePressButtonAsync()}
          />
      </View>
      <Text> {webData} </Text>
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
