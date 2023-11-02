import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      
    } else {
     
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/digitousailorcure/images/0/09/Anya_forger.png/revision/latest?cb=20221019014231' }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('tabs')}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.signupButtonText}>New Here ? Register</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200, 
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: 330,
    borderRadius: 50,
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderColor: 'lightgrey',
    color: 'black',
  },
  buttonContainer: {
    backgroundColor: 'lightgreen',
    width: 330,
    padding: 10,
    borderRadius: 50,
    marginBottom: 16,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500'
  },
  signupButtonContainer: {
    backgroundColor: 'white',
    width: 300,
    padding: 10,
    borderRadius: 50,
  },
  signupButtonText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});

export default Login;
