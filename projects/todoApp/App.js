import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Login from './src/components/Login';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login/>
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text>Dentro da tela tarefas</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc'
 }
});
