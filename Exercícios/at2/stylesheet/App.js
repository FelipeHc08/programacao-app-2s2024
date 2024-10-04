import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'; 

const PreferencesScreen = () => {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    if (nightMode) {
      setTheme('Escuro');
    } else if (theme === 'Escuro') {
      setTheme('Claro');
    }
  }, [nightMode]);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  const backgroundColor = nightMode || theme === 'Escuro' ? '#333' : '#fff';
  const textColor = nightMode || theme === 'Escuro' ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor, fontSize }]}>
        Configurações de Preferências
      </Text>

      <Text style={[styles.label, { color: textColor }]}>Tema:</Text>
      <Picker
        selectedValue={theme}
        style={[styles.picker, { color: textColor }]}
        onValueChange={(itemValue) => {
          setTheme(itemValue);
          if (itemValue === 'Escuro') {
            setNightMode(true);
          } else {
            setNightMode(false);
          }
        }}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      <Text style={[styles.label, { color: textColor }]}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={fontSize}
        onValueChange={(value) => setFontSize(Math.round(value))}
      />

      <Text style={[styles.dynamicText, { fontSize, color: textColor }]}>
        Texto de Exemplo (Tamanho da Fonte: {fontSize})
      </Text>

      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: textColor }]}>
          Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}
        </Text>
        <Switch
          value={nightMode}
          onValueChange={(value) => setNightMode(value)}
        />
      </View>

      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  dynamicText: {
    marginVertical: 20,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default PreferencesScreen;
