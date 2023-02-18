import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [msgErrorEmail, setMsgErrorEmail] = useState(false);
  const [msgErrorPassword, setMsgErrorPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [stylesInputEmail, setStylesInputEmail] = useState([styles.input]);
  const [stylesInputPassword, setStylesInputPassword] = useState([styles.input]);

  const handleEmailChange = (text) => {
    setEmail(text);
    setStylesInputEmail([styles.input])
    setMsgErrorEmail(false)
  };
  
  const handlePasswordChange = (password) => {
    setPassword(password);
    setStylesInputPassword([styles.input])
    setMsgErrorPassword(false)
  };

  const handlePress = () => {
    console.warn('Email é Válido:', isValidEmail);
    console.warn('Senha é Válida:', isValidPassword);
    console.warn('Menssagem de erro é Válida:', msgErrorEmail);

    
    setIsValidPassword(isPasswordValid(email));
    setIsValidEmail(validateEmail(password));
    
    if (!isValidEmail) {
      setStylesInputEmail([styles.input, styles.inputError])
      setMsgErrorEmail(true)
    } else {
      setStylesInputEmail([styles.input])
    }
    
    if (!isValidPassword) {
      setStylesInputPassword([styles.input, styles.inputError]);
      setMsgErrorPassword(true)
    } else {
      setStylesInputPassword([styles.input]);
    }

  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const lowercaseRegex = /[a-z]/g;
    const uppercaseRegex = /[A-Z]/g;
    const digitRegex = /[0-9]/g;
    const specialCharRegex = /[^a-zA-Z0-9]/g;

    return (
      password.length >= 8 &&
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };


  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.containerWelcome}>
        <Text style={styles.title} >Bem-vindo</Text>
      </View>
      <View style={styles.containerLogotipo} >
        <Image source={require('../../assets/logotipo_pizzaria.jpg')} style={styles.logotipo} />
        <Text style={styles.labelLogotipo} >Familía Dias</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          placeholder='E-mail'
          style={stylesInputEmail}
          onChangeText={handleEmailChange}
          value={email}
          keyboardType='email-address' />
          {msgErrorEmail ? <Text style={styles.msgErrorEmail}>Error</Text> : null}
        <TextInput
          placeholder='Senha'
          style={stylesInputPassword}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true} />
      </View>

      <View style={styles.containerButton} >
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonTxt} >Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerButtonsPasswordRegister}>
        <TouchableOpacity>
          <Text style={[styles.buttonRegisterTxt, {textDecorationLine: 'underline'}]}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.containerButtonRegister}>
          <Text style={styles.buttonRegisterTxt}>Novo aqui? </Text>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={[styles.buttonRegisterTxt, { fontWeight: '500', textDecorationLine: 'underline' }]} >
              Faça seu cadastro
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#fdfdfd'
  },
  containerWelcome: {
    alignItems: 'center'
  },
  title: {
    color: 'red',
    fontSize: 27,
    fontWeight: 'bold'
  },
  containerLogotipo: {
    alignItems: 'center',
    marginTop: 60
  },
  labelLogotipo: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold'
  },
  containerInput: {
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 80,
  },
  input: {
    height: 43,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  inputError: {
    height: 43,
    width: '100%',
    borderColor: '#ff0000',
    borderWidth: 2,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  msgErrorEmail: {
    color: 'red'
  },
  containerButton: {
    alignItems: 'center',
    marginHorizontal: 30
  },
  button: {
    backgroundColor: '#f0141e',
    width: '100%',
    height: 45,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerButtonsPasswordRegister: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 30
  },
  containerButtonRegister: {
    flexDirection: 'row'
  },
  buttonRegister: {
    flexDirection: 'row'
  },
  buttonRegisterTxt: {
    fontSize: 12,
    
  }
})

export default LoginScreen;
