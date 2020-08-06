// importoidaan tarvittavat komponentit
import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import { Input, Header, Button } from "react-native-elements";
import firebase from "../components/firebase";

export default function Ilmoittaudu(props) {
  const { navigate } = props.navigation;
  const [nimi, setNimi] = useState("");
  const [puhelinnumero, setPuhelinnumero] = useState("");

  console.disableYellowBox = true;

  // nollaa tekstikentän
  const clearText = () => {
    setNimi("");
    setPuhelinnumero("");
  };

  // lisää käyttäjän tiedot (nimi, puhelinnumero) Firebasen tietokantaan
  const addUserToDatabase = () => {
    firebase.database().ref("kayttajat/").push({
      nimi: nimi,
      puhelinnumero: puhelinnumero,
    });
    navigate("Tapahtumat", {
      showSnackbar: true,
      nimi: nimi,
      puhelinnumero: puhelinnumero,
    });
    // luodaan alert-ikkuna, joka ilmoittaa lisäyksen onnistumisesta
    // kehitysideana joku if-else ehtolauseke, jolla pystytään määrittelemään menikö tiedot oikeasti tietokantaan saakka
    // puuttuu error-ikkuna, jos tiedonsiirrossa ongelmia (tämä ehkä mahdollista määritellä suoraan Firebasessa(?))
    Alert.alert(
      "Kiitos ilmoittautumisesta! Tietosi on tallentunut järjestelmään!"
    );
  };

  // KeyboardAvoidingView-komponentti piilottaa puhelimen näppäimistön
  // asetetaan inputit, johon käyttäjä syöttää tietonsa

  // TALLENNA-buttonia painettaessa se lisää käyttäjän tietokantaan
  // TYHJENNÄ-buttonia painettaessa haetaan clearText-funktiota, joka tyhjentää syöttökentän
  // TAKAISIN-buttonia painettaessa navigoidaan takaisin tapahtumasivulle

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
          backgroundColor="#ac72ac"
          leftComponent={{ color: "#fff" }}
          centerComponent={{
            text: "events+",
            style: { color: "#fff", fontSize: 20 },
          }}
        />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.input}>
          <Input
            placeholder="Kirjoita nimesi.."
            label="NIMI"
            onChangeText={(nimi) => setNimi(nimi)}
            keyboardType="default"
            returnKeyType="done"
            clearButtonMode="always"
            value={nimi}
          />
          <Input
            placeholder="Kirjoita puhelinnumerosi.."
            label="PUHELINNUMERO"
            onChangeText={(puhelinnumero) => setPuhelinnumero(puhelinnumero)}
            keyboardType="default"
            returnKeyType="done"
            clearButtonMode="always"
            value={puhelinnumero}
          />
        </View>
        <View style={styles.buttoncontainer}>
          <Button
            title="TALLENNA"
            buttonStyle={styles.button}
            onPress={addUserToDatabase}
          />
          <Button
            title="TYHJENNÄ"
            buttonStyle={styles.button}
            onPress={clearText}
          />
          <Button
            title="TAKAISIN"
            buttonStyle={styles.button}
            onPress={() => navigate("Tapahtumat")}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headercontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 10,
    padding: 7,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ac72ac",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 3,
    marginTop: 10,
  },
  list: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
});
