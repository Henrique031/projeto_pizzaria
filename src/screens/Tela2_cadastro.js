import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const RegisterScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/bk_login_pizza.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.input}
          placeholder="Número de telefone"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#333"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    paddingHorizontal: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    width: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default RegisterScreen;
