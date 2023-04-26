import * as React from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
       <View style={styles.imgh}><Image
        style={styles.logo1}
        source={require('./assets/header.png')}
      /></View>
    </View>
    <View style={styles.container}><Image
        style={styles.home}
        source={require('./assets/home.png')}
      /></View>
  
     <View style={styles.footer}>
        <View style={styles.imgf}><Image
        style={styles.logo2}
        source={require('./assets/footer.png')}
      /></View>
     
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#181414',
    padding: 8,
  },

  logo1:{
    padding:21,
  },
  imgh:{
    marginLeft:12,
  },
  logo2:{
    padding:25,
    width:270,
  },
  
  imgf:{
    marginLeft:19,
  },
  home:{
    width:400,
  },

  header:{
    backgroundColor: "#242c34",
    padding:25,
    width:375,
    borderRadius:25,
    marginBottom:1,
  },
  footer:{
    backgroundColor: "#242c34",
    padding:25,
    width:375,
    borderRadius:25
  },

 
});
