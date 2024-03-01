import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Login from './src/components/Login'
import TaskList from './src/components/TaskList';

let listaTask = [
  { key: '1', nome: 'Passear com o cachorro' },
  { key: '2', nome: 'Ir no mercado' },
]

export default function App() {
  const [user, setUser] = useState(null);

  const [newTask, setNewTask] = useState('')
  if (!user) {
    return <Login changeStatus={(user: React.SetStateAction<null>) => setUser(user)} />
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerAdd}>
        <TextInput
          style={styles.inputAdd}
          placeholder='Adicione uma tarefa'
          value={newTask}
          onChangeText={(text) => setNewTask(text)} />

        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonAddText}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={listaTask}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskList></TaskList>
      )} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc'
  },
  containerAdd: {
    flexDirection: 'row'
  },
  inputAdd: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000000',
    height: 45,
  },
  buttonAdd: {
    backgroundColor: '#2bbcff',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    paddingHorizontal: 19,
    borderRadius: 4,
  },
  buttonAddText: {
    color: '#FFF',
    fontSize: 23,
  },
})