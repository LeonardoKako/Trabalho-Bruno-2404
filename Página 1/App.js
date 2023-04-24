import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
     <Image
        style={styles.logo}
        source={require('./assets/ps4.png')}
      />
      <Text style={styles.p1}>
       Bem-vindo(a) ao PlayStation App
      </Text>
       <Text style={styles.p2}>
       Vamos lá!
      </Text>
      <View style={styles.button}>
      <Button
        title="Iniciar sessão"
        color="#080404"
      />
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
    backgroundColor: '#083ca4',
    padding: 8,
  },
  p1: {
    fontSize: 30,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffff',
    marginBottom:300,
  },
  logo:{
    marginRight:20,
  },
  p2: {
     fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffff',
    marginBottom:13,
  },
  button: {
    backgroundColor: "#fff",
    padding:5,
    width:270,
    borderRadius:25
  }
 
});
