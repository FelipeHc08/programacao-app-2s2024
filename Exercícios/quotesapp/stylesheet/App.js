import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const quotes = require('./assets/quotes.json');

const App = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  
  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuotesApp</Text>

      {currentQuote.image && (
        <Image
          source={{ uri: currentQuote.image }}
          style={styles.authorImage}
        />
      )}

      <Text style={styles.quoteText}>"{currentQuote.quote}"</Text>
      <Text style={styles.authorText}>- {currentQuote.author}</Text>

      <TouchableOpacity style={styles.button} onPress={getRandomQuote}>
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#26606B',
  },
  authorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  authorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#61CA9F',
  },
  button: {
    backgroundColor: '#61CA9F',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default App;
