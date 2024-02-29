import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import Login from './src/components/Login';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login changeStatus={(user: React.SetStateAction<null>) => setUser(user)} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>DENTRO DA TELA TAREFAS</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc'
  }
})