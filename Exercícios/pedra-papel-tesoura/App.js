import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const choices = ['pedra', 'papel', 'tesoura'];

// Função para escolher aleatoriamente
const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (userSelection) => {
    const computerSelection = getRandomChoice();
    setUserChoice(userSelection);
    setComputerChoice(computerSelection);
    determineWinner(userSelection, computerSelection);
  };

  const determineWinner = (userSelection, computerSelection) => {
    if (userSelection === computerSelection) {
      setResult('Empate!');
    } else if (
      (userSelection === 'pedra' && computerSelection === 'tesoura') ||
      (userSelection === 'papel' && computerSelection === 'pedra') ||
      (userSelection === 'tesoura' && computerSelection === 'papel')
    ) {
      setResult('Você ganhou!');
    } else {
      setResult('Você perdeu!');
    }
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Text category='h1' style={styles.title}>Pedra, Papel e Tesoura</Text>
        
        <View style={styles.choices}>
          <TouchableOpacity onPress={() => playGame('pedra')} style={styles.choiceButton}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5461/5461378.png' }} style={styles.choiceImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playGame('papel')} style={styles.choiceButton}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/29/29963.png' }} style={styles.choiceImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playGame('tesoura')} style={styles.choiceButton}>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/016/314/876/non_2x/scissors-scissors-icon-transparent-free-png.png' }} style={styles.choiceImage} />
          </TouchableOpacity>
        </View>
        
        {userChoice && computerChoice && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Você escolheu: {userChoice}</Text>
            <Text style={styles.resultText}>Computador escolheu: {computerChoice}</Text>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        )}
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34', // Cor de fundo
  },
  title: {
    color: '#61dafb', // Cor do título
    marginBottom: 20,
    fontSize: 32, // Tamanho do texto
    fontWeight: 'bold', // Peso do texto
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  choiceButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#61dafb'
  },
  choiceImage: {
    width: 80, // Tamanho da imagem
    height: 80,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff', // Fundo do resultado
    borderRadius: 10,
    shadowColor: '#000', // Sombra do resultado
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  resultText: {
    color: '#282c34',
    marginVertical: 5,
    fontSize: 18, // Tamanho do texto do resultado
  },
});
