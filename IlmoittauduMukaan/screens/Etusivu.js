// importoidaan tarvittavat komponentit
import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Header } from "react-native-elements";

export default function Etusivu() {
  // Sovelluksen header/yläpalkki
  // ScrollView sivun scrollaustoiminto

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
      <ScrollView style={styles.scrollview}>
        <Text style={styles.headertext}>
          TERVETULOA events+ -sovelluksen pariin!
        </Text>
        <Text style={styles.text}>
          Tämän yksinkertaisen ja helppokäyttöisen sovelluksen avulla näet
          kaikki kauttamme järjestettävät tulevat tapahtumat tarkempine
          tietoineen. Halutessasi voit ilmoittautua mukaan tapahtumiin.
        </Text>
        <Text style={styles.text}>
          Innostavia kohtaamisia tapahtumien parissa!
        </Text>
        <View style={styles.container2}>
          <Image
            style={{
              marginTop: 7,
              width: 300,
              height: 200,
            }}
            source={require("../assets/together.jpg")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 100,
  },
  headercontainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headertext: {
    marginBottom: 15,
    marginTop: 50,
    fontSize: 25,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    fontSize: 20,
    marginBottom: 20,
    padding: 12,
    textAlign: "center",
  },
});

/* sovelluksen kehittämiskohteita jatkoon: 
    - käyttäjä voi perua ilmoittautumisen sovelluksen kautta
    - ilmoittautuminen rekisteröityy id:n perusteella tietylle tapahtumalle
    - alert-virheilmoitus ilmoittautumisen yhteydessä, mikäli tallennus tietokantaan ei syystä tai toisesta onnistunut 
		(virheilmoitus tietokannasta, ei koodista?)
    - käyttäjä voi selata tapahtumiin ilmoittautumisiaan, mikäli niitä on useita
    - sovellus poistaa tapahtumat automaattisesti tietokannasta sen päivän jälkeen, kun tapahtuma on ohi
    - sovellus näyttää maksimiosallistujamäärän tapahtuman kohdalla sekä tiedon, kuinka monta jo ilmoittautunutta (esim. 12/50)
    - sovelluksen kautta voisi lähettää yhteisen yhden viestin samalla kertaa kunkin tapahtuman osallistujille, mikäli tarvetta, 
		esim. tapahtuman peruuntuessa
    - sovellus optimoitu iPhonelle, toimii lähes yhtä hyvin androidissakin, mutta täydellinen optimointi tulee tehdä myös android-puhelimelle,
		mikäli sovellus tulee oikeaan käyttöön
	- pohdintaa siitä, olisiko sovelluksessa hyvä olla rekisteröityminen ja sisään kirjautuminen omilla tunnuksilla
	- opiskelua sovelluksen julkaisuun liittyvistä asioista (AppStore, Google Play)
*/
