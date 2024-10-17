import { StyleSheet, Image, View } from 'react-native';
import * as React from 'react';
import { ApplicationProvider, Layout, Text, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const MenuButton = (iconUri, onPress) => (
  <TopNavigationAction
    icon={() => <Image source={{ uri: iconUri }} style={styles.icon} />}
    onPress={onPress}
  />
);

export default function App() {
  const handleMenuPress = (title) => {
    console.log(`${title} pressed`);
  };

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <TopNavigation
          accessoryLeft={() => MenuButton('https://cdn-icons-png.flaticon.com/512/1159/1159633.png', () => handleMenuPress('Botão 1'))}
          accessoryRight={() => (
            <>
              {MenuButton('https://cdn-icons-png.flaticon.com/256/3234/3234974.png', () => handleMenuPress('Botão 2'))}
              {MenuButton('https://cdn-icons-png.freepik.com/256/16738/16738903.png?semt=ais_hybrid', () => handleMenuPress('Botão 3'))}
              {MenuButton('https://cdn-icons-png.flaticon.com/512/4406/4406178.png', () => handleMenuPress('Botão 4'))}
            </>
          )}
        />
        
        <Layout style={styles.content}>
          <Image
            source={{ uri: 'https://www.hostnet.com.br/wp-content/uploads/2023/07/criar-sites-profissionais-1024x682.jpg' }} // Substitua pela URL da sua imagem
            style={styles.mainImage}
          />
          <View style={styles.imageRow}>
            <Image source={{ uri: 'https://example.com/image1.png' }} style={styles.smallImage} />
            <Image source={{ uri: 'https://example.com/image2.png' }} style={styles.smallImage} />
            <Image source={{ uri: 'https://example.com/image3.png' }} style={styles.smallImage} />
          </View>
        </Layout>

        <Layout style={styles.footer}>
          <Button style={styles.footerButton} onPress={() => handleMenuPress('Footer Botão 1')}>Botão 1</Button>
          <Button style={styles.footerButton} onPress={() => handleMenuPress('Footer Botão 2')}>Botão 2</Button>
          <Button style={styles.footerButton} onPress={() => handleMenuPress('Footer Botão 3')}>Botão 3</Button>
          <Button style={styles.footerButton} onPress={() => handleMenuPress('Footer Botão 4')}>Botão 4</Button>
        </Layout>
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start', // Mantenha o conteúdo na parte superior
    alignItems: 'center',
    marginTop: 20, // Margem para evitar sobreposição
  },
  mainImage: {
    width: '90%',
    height: 200, // Ajuste a altura conforme necessário
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  smallImage: {
    width: 80,
    height: 80,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#222',
  },
  footerButton: {
    flex: 1,
    margin: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
