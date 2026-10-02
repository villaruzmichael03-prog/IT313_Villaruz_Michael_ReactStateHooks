import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";

import LabScreen from "./components/LabScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.header}>
        Lab Timer & Practice Tracker
      </Text>

      <LabScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
    alignItems: "center",
    paddingTop: 60,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
