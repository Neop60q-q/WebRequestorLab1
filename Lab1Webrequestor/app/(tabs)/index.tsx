import { View, Image, StyleSheet, Platform, Button } from 'react-native';


export default function HomeScreen() {
  return (
    <View style = {styles.containerColumn} >
      <View style = {styles.containerRow}>
        <Button
          title = "CLICK ME"
          onPress = {()=> alert("FUCKOFF STOP PRESSING ME!")}
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

  },
);
