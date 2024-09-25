import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [clients, setClients] = useState(0);
  const scaleAnim = new Animated.Value(1);

  const increment = () => {
    setClients(prevClient => prevClient + 1);
    animate();
  };

  const decrement = () => {
    if (clients > 0) {
      setClients(prevClient => prevClient - 1);
      animate();
    }
  };

  const animate = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Restaurante</Text>
      <Animated.Text style={[styles.count, { transform: [{ scale: scaleAnim }] }]}>
        {clients}
      </Animated.Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <FontAwesome5 name="utensils" size={24} color="white" />
          <Text style={styles.buttonText}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <FontAwesome5 name="minus-circle" size={24} color="white" />
          <Text style={styles.buttonText}>Saída</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4e3', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 20,
    fontFamily: 'sans-serif-light',
  },
  count: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#26606B', 
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    flex: 1,
    backgroundColor: '#D2691E', 
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
});
