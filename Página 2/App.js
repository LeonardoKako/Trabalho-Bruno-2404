import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput , SafeAreaView  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [text1, onChangeText1] = React.useState('Email');
  const [text, onChangeText] = React.useState('Senha');
  return (
    <View style={styles.container}>
     <Image
        style={styles.logo}
        source={require('./assets/ps4.png')}
      />
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
      />
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       </SafeAreaView>
      <View style={styles.button}>
      <Button
        title="Iniciar sessão"
        color="#080404"
      />
    </View>
    <View style={styles.button}>
      <Button
        title="Criar conta"
        color="#080404"
      />
    </View>
    <Text style={styles.p2}>
       Esqueceu a senha?
      </Text>
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
  },
  logo:{
    marginRight:20,
  },

  button: {
    backgroundColor: "#fff",
    padding:5,
    width:270,
    borderRadius:25,
    marginBottom:10
  },
   input: {
    height: 40,
    width:250,
    marginBottom: 15,
    borderWidth: 2,
    padding: 10,
    textAlign:'center',
    color: "#ffff",
    borderColor:"#fff"
  },
   p2: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#ffff',
    marginBottom:13,
  },
 
});
