import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React from 'react';
import Question from './components/Question';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Question/>
      <Footer />
      {/* Footer */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width: '100%',
  }
});