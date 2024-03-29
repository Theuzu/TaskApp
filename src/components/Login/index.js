import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView , TextInput, TouchableOpacity, Alert } from 'react-native';

import firebase from '../../services/firebaseConnection';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';

export default function Login({ changeStatus }) {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin() {
   
    if(type === 'login'){
      // Aqui fazemos o login
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    
    console.log(user)
    changeStatus(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Ocorreu um erro")

    console.log(errorMessage);
  });

    }else{
     // Aqui cadastramos o usuario 
     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    
    changeStatus(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Ocorreu um erro")
    
    console.log(errorMessage);
  });

    }

  }

 return (
   <SafeAreaView style={styles.container}>
    
    <TextInput
      placeholder="Seu email"
      style={styles.input}
      value={email}
      onChangeText={ (text) => setEmail(text) }
    />

    <TextInput
      placeholder="*********"
      style={styles.input}
      value={password}
      onChangeText={ (text) => setPassword(text) }
    />

    <TouchableOpacity
      style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' } ]}
      onPress={handleLogin}
    >
      <Text style={styles.loginText}>
        { type === 'login' ? 'Acessar' : 'Cadastrar' }
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
      <Text style={{ textAlign: 'center' }}>
        {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta' }
      </Text>
    </TouchableOpacity>



   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 40,
    backgroundColor: '#F2f6fc',
    paddingHorizontal: 10,
  },
  input:{
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  handleLogin:{
    alignItems: 'center',
    justifyContent:'center',
    height: 45,
    marginBottom: 10,
  },
  loginText:{
    color: '#FFF',
    fontSize: 17,
  }
})