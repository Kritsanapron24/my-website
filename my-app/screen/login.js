import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('th');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      
    } else {
      
    }
  };

  const textData = {
    th: {
      usernamePlaceholder: "กรอกชื่อผู้ใช้",
      passwordPlaceholder: "กรอกรหัสผ่าน",
      loginButtonText: "เข้าสู่ระบบ",
      forgotPasswordText: "ลืมรหัสผ่านหรือไม่?",
    },
    en: {
      usernamePlaceholder: "Enter username",
      passwordPlaceholder: "Enter password",
      loginButtonText: "Login",
      forgotPasswordText: "Forgot Password?",
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.languageButtonContainer}>
        <TouchableOpacity
          style={[styles.languageButton, selectedLanguage === 'th' ? styles.selectedLanguage : null]}
          onPress={() => handleLanguageChange('th')}
        >
          <Text style={styles.languageButtonText}>ไทย</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.languageButton, selectedLanguage === 'en' ? styles.selectedLanguage : null]}
          onPress={() => handleLanguageChange('en')}
        >
          <Text style={styles.languageButtonText}>English</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/catcat.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={textData[selectedLanguage].usernamePlaceholder}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={textData[selectedLanguage].passwordPlaceholder}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('tabs')}
      >
        <Text style={styles.buttonText}>{textData[selectedLanguage].loginButtonText}</Text>
      </TouchableOpacity>
      <Text style={styles.buttonText1}>{textData[selectedLanguage].forgotPasswordText}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DDE6ED'
  },
  languageButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 30,
    paddingRight: 16,
    zIndex: 1,
  },
  languageButton: {
    padding: 4,
    marginLeft: 8,
  },
  selectedLanguage: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  languageButtonText: {
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 210,
    height: 210,
    marginTop: -65,
    borderRadius: 100,
    borderWidth: 3.5,
    marginBottom: 20,
  },
  input: {
    marginTop: 18,
    borderWidth: 2,
    borderColor: '#E3F4F4',
    width: 330,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#F0F0F0',
    marginTop: 8,
    paddingLeft: 20,
    marginBottom: 10,
    fontSize: 15
  },
  buttonContainer: {
    backgroundColor: '#2E4374',
    width: 330,
    padding: 10,
    borderRadius: 50,
    marginBottom: 16,
    marginTop: 35,
    height: 55,
  },
  buttonText: {
    fontSize: 20,
    color: '#F4F4F4',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 1,
    fontFamily: 'NotoSansThai-Regular',
  },
  buttonText1: {
    fontSize: 16,
    color: 'dimgray',
    textAlign: 'center',
    fontFamily: 'NotoSansThai-Regular',
    marginTop: 1,
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
    fontFamily: 'NotoSansThai-Regular',
  },
});

export default Login;
