// importoidaan tarvittavat komponentit
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Header, Card, Button, SearchBar } from "react-native-elements";
import firebase from "../components/firebase";

export default function Tapahtumat(props) {
  // luodaan muuttujat
  const [tapahtumaLista, setTapahtumaLista] = useState([]);
  const [filteredTapahtumaLista, setFilteredTapahtumaLista] = useState([]);
  const [hakusana, setHakusana] = useState("");
  const { navigate } = props.navigation;

  // piilottaa debuggauksen yellowboksin
  console.disableYellowBox = true;

  // hakee useEffect -toiminnolla Firebasesta sinne tallennetun tapahtuma datan + asetetaan tapahtumalistalle filtteröinti (haku)
  useEffect(() => {
    firebase
      .database()
      .ref("tapahtumat/")
      .on("value", (snapshot) => {
        const tapahtumaLista = Object.values(snapshot.val());

        setTapahtumaLista(tapahtumaLista);
        setFilteredTapahtumaLista(filteredTapahtumaLista);
      });
  }, []);

  // filtteröidään tapahtumalistat niin, että hakutoiminnosta voidaan hakea tiettyjen kirjainten mukaan (esim. Kir = Kirpputori)
  useEffect(() => {
    const tulokset = tapahtumaLista.filter((tapahtuma) =>
      tapahtuma.nimi.toLowerCase().includes(hakusana.toLowerCase())
    );
    setFilteredTapahtumaLista(tulokset);
  }, [hakusana, tapahtumaLista]); // palautetaan filtteröity tapahtumalista

  // hakutoiminnon käsittelijä (handler)
  const handleChange = (text) => {
    setHakusana(text);
  };

  // hakutoiminnon käsittelijä  (kun käyttäjä on kirjoittanut ja klikannut hakupalkkia)
  const handleSubmit = (event) => {
    handleChange(event.nativeEvent.text);
  };

  // palauttaa tapahtumalistan alkuperäiseen tilaan (resetoi)
  const resetTapahtumaLista = () => {
    setFilteredTapahtumaLista(tapahtumaLista);
  };

  // käsittelee tapahtuman, kun käyttäjä valitsee tietyn tapahtuman kohdalta: ilmoittaudu. Sivun pitäisi navigoitua tietyn tapahtuman ilmoittautumiseen id:n perusteella
  // tämä ei jostain syystä toiminut oikein
  const handleSelect = (item) => {
    navigate("Ilmoittaudu", { tapahtuma: item.id });
  };

  // Luodaan SearchBar-komponentti, jolle määritellään tietyt asetukset + kutsutaan handleSubmit-funktiota
  // filteredTapahtumaLista.map = Mapataan filtteröity tapahtumalista
  // asetetaan Firebasesta haettu data Card-komponenttien sisälle ja kutsutaan tietokannasta haluttuja kohteita
  // ILMOITTAUDU -button, joka onPressillä kutsuu handleSelect funktiota
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

        <SearchBar
          onChangeText={handleChange}
          placeholder="Hae tapahtumia"
          onSubmitEditing={handleSubmit}
          value={hakusana}
          platform="ios"
          lightTheme={true}
          showCancel={true}
          cancelButtonTitle="Peruuta"
          containerStyle={styles.searchcontainer}
          inputContainerStyle={{ backgroundColor: "#F0F0F0" }}
          returnKeyType="search"
          onClear={resetTapahtumaLista}
          onCancel={resetTapahtumaLista}
        />
        <ScrollView>
          <View>
            {filteredTapahtumaLista.map((item, i) => (
              <Card title={item.nimi}>
                <Text style={styles.cardtext}>{item.kuvaus}</Text>
                <Text style={styles.cardtext}>Osoite: {item.osoite}</Text>
                <Text style={styles.cardtext}>Päivämäärä: {item.pvm}</Text>
                <Text style={styles.cardtext}>
                  Kellonaika: {item.kellonaika}
                </Text>
                <Button
                  title="ILMOITTAUDU"
                  buttonStyle={styles.button}
                  onPress={() => handleSelect(item)}
                  key={i}
                  title={item.nimi}
                  title="Ilmoittaudu"
                />
              </Card>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 50,
  },
  card: {
    fontSize: 34,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  top: {
    fontSize: 36,
    marginTop: 30,
    marginLeft: 20,
    textAlign: "center",
  },
  headercontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  header2: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
  },
  header3: {
    textAlign: "center",
    fontSize: 15,
  },
  cardtext: {
    marginBottom: 10,
  },

  bottomtext: {
    margin: 20,
  },
  button: {
    backgroundColor: "#ac72ac",
    borderRadius: 23,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
