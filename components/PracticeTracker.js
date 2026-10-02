import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Practice Tracker</Text>
      <Text style={styles.counter}>Solved: {solved}</Text>

      {solved >= 5 && (
        <Text style={styles.success}>Great job!</Text>
      )}

      <View style={styles.row}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" color="#d9534f" onPress={onReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  counter: {
    fontSize: 28,
    marginVertical: 8,
  },

  success: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    gap: 16,
  },
});
