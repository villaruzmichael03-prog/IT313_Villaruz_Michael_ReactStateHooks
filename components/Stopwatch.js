import React from "react";
import { View, Text, StyleSheet } from "react-native";

const formatTime = (totalSeconds) => {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");

  return `${mins}:${secs}`;
};

export default function Stopwatch({ isRunning, seconds }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Stopwatch</Text>
      <Text style={styles.time}>{formatTime(seconds)}</Text>

      <Text style={styles.status}>
        {isRunning ? "Running..." : "Paused"}
      </Text>
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

  time: {
    fontSize: 40,
    fontVariant: ["tabular-nums"],
  },

  status: {
    fontSize: 18,
    marginTop: 8,
    color: "#555",
  },
});
