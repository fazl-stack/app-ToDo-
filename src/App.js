//TO DO LIST APP

import React from 'react';
import { StyleSheet,
  Text,
  View, 
  SafeAreaView 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ToDoScreen from './screen/ToDoScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderCustom from './components/header';



export default function App() {
  return (
  <SafeAreaView 
  style={{
    flex : 1, 
    backgroundColor : 'black'
  }}>
  
    <View>
    <HeaderCustom/>
    <ToDoScreen/>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({});