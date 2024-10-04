import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const fortunes = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades.",
  "Oportunidades não surgem, é você que as cria.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "A persistência é o caminho do êxito.",
];

const App = () => {
  const [isCookieBroken, setIsCookieBroken] = useState(false);
  const [fortune, setFortune] = useState("");

  const breakCookie = () => {
    setIsCookieBroken(true);
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
  };

  const resetCookie = () => {
    setIsCookieBroken(false);
    setFortune("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fortune Cookie</Text>
      <TouchableOpacity onPress={isCookieBroken ? resetCookie : breakCookie}>
        <Image
          style={styles.cookieImage}
          source={
            isCookieBroken
              ? require("./assets/opened_cookie.png")
              : require("./assets/closed_cookie.png")
          }
        />
      </TouchableOpacity>
      {isCookieBroken && <Text style={styles.fortuneText}>{fortune}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={isCookieBroken ? resetCookie : breakCookie}
      >
        <Text style={styles.buttonText}>
          {isCookieBroken ? "Tentar Novamente" : "Quebrar Biscoito"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#26606B",
  },
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    fontStyle: "italic",
    color: "#61CA9F",
  },
  button: {
    backgroundColor: "#61CA9F",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default App;
