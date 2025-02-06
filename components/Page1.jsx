import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <Text>HI IAM PAGE 1</Text>
        <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width: '100%',
  }
});