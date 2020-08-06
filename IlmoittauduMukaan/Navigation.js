import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Entypo, Fontisto, FontAwesome } from "@expo/vector-icons";

// bottom-navigaattori
import Etusivu from "./screens/Etusivu";
import Tapahtumat from "./screens/Tapahtumat";
import Info from "./screens/Info";

// switch-navigaattori
import Ilmoittaudu from "./screens/Ilmoittaudu";

// luodaan bottom-navigointi, määritellään screenit, asetetaan ne haluttuun järjestykseen ja valitaan halutut iconit @expo/vector-iconseista
const BottomNavigator = createBottomTabNavigator({
  Etusivu: {
    screen: Etusivu,
    navigationOptions: {
      tabBarLabel: "Etusivu",
      tabBarIcon: ({ tintColor }) => (
        <Fontisto name="home" color={tintColor} size={24} />
      ),
    },
  },
  Tapahtumat: {
    screen: Tapahtumat,
    navigationOptions: {
      tabBarLabel: "Tapahtumat",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="calendar" size={24} color={tintColor} />
      ),
    },
  },
  Info: {
    screen: Info,
    navigationOptions: {
      tabBarLabel: "Info",
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="info" color={tintColor} size={24} />
      ),
    },
  },
});

// luodaan switch-navigointi, jotta käyttäjä pystyy siirtymään tapahtumasivulta ilmoittautumissivulle
const SwitchNavigation = createSwitchNavigator({
  Ilmoittaudu: Ilmoittaudu,
});

// yhdistetään kaksi navigointia
const AppNavigator = createSwitchNavigator({
  Paasivu: BottomNavigator,
  Nakyma: SwitchNavigation,
});

// luodaan päänavigaattori
const AppContainer = createAppContainer(AppNavigator);

export default function Navigation() {
  return <AppContainer />;
}
