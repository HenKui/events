// importoidaan tarvittavat komponentit
import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Header, Card } from "react-native-elements";

export default function Info() {
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
        <ScrollView style={styles.scrollview}>
          {/* Luodaan Card-komponenttien avulla boksit tietoikkunoille + asetetaan assets-kansiosta haluttu kuva */}
          <Card
            title="TIETOJA SOVELLUKSESTA"
            image={require("../assets/info2.jpg")}
          >
            <Text style={styles.cardtext}>
              Tämä helppokäyttöinen sovellus on luotu tapahtumiin
              ilmoittautumisia varten. Tapahtuman järjestäjä pystyy näin
              ennakoimaan tapahtumaan osallistujien määrän. Sovellus on
              tarkoitettu yksityishenkilöiden käyttöön. Käytössäsi on nyt
              sovelluksen ensimmäinen pilottiversio. Tähän päivitetään jatkossa
              uusimmat päivitykset ja versiot sovelluksesta.
            </Text>
          </Card>
          <Card title="OHJEITA" image={require("../assets/thisway.jpg")}>
            <Text style={styles.cardtext}>
              Pääset siirtymään sovelluksessa sivulta toiselle alapalkissa
              olevien symboleiden kautta. Tapahtumat-sivulla voit selata
              tarjolla olevia tapahtumia sekä ilmoittautua eri tapahtumiin.
              Samalla sivulla on myös haku-toiminto, voit etsiä hakusanoilla
              erilaisia tarjolla olevia tapahtumia. Mikäli sinulle tulee
              ongelmia sovelluksen käytössä tai ilmenee muuta epäselvää, ota
              yhteyttä sovelluksen ylläpitäjään sähköpostitse osoitteeseen ...
              @hotmail.com.
            </Text>
          </Card>
          <Card title="TIETOSUOJA" image={require("../assets/privacy.jpg")}>
            <Text style={styles.cardtext}>
              Sovellus ei kerää evästeitä tai muita tietoja pelkästä sovelluksen
              selailusta. Kun ilmoittaudut tapahtumaan, sovellus kysyy sinulta
              nimesi ja puhelinnumerosi. Nämä siksi, että tapahtuman järjestäjä
              pystyy tarvittaessa ottamaan sinuun yhteyttä, esim. tapahtuman
              peruuntumisen tai muun tärkeän asian vuoksi.
            </Text>
            <Text style={styles.cardtext}>
              Tiedot tallennetaan tietokantaan, joka on tietosuojattu sekä
              turvallinen tietojen säilytykseen. Kun tapahtuma on ohi, tiedot
              poistetaan tietokannasta välittömästi. Jos perut ilmoittautumisesi
              tapahtumaan, tiedot poistuvat tietokannasta välittömästi perumisen
              jälkeen. Tietoja ei luovuteta missään vaiheessa kolmansille
              osapuolille.
            </Text>
            <Text style={styles.cardtext}>
              Voit aina halutessasi tarkistaa, mitä henkilötietojasi sovelluksen
              tietokannasta löytyy. Tällöin pyydän sinua olemaan yhteydessä
              sovelluksen ylläpitäjään sähköpostitse ... @hotmail.com.
            </Text>
            <Text style={styles.cardtext}>Kiitos!</Text>
          </Card>
          <Text style={styles.bottomtext}>© Henna Kuivalainen 2020</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    fontSize: 34,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  headercontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    marginBottom: 30,
  },
  cardtext: {
    marginBottom: 10,
    textAlign: "center",
  },
  bottomtext: {
    margin: 20,
  },
});
