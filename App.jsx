import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Question from './components/Question';
import Page1 from './components/Page1';  // Make sure to import Page1

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Question />
      <Footer navigation={navigation} />  {/* Pass navigation prop */}
    </SafeAreaView>
  );
};

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="Page1" component={Page1}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
