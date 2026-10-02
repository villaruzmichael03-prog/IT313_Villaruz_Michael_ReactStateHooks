import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import PracticeTracker from "./PracticeTracker";
import Stopwatch from "./Stopwatch";
import useStopwatch from "../hooks/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <View style={styles.container}>
      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        isRunning={isRunning}
        seconds={seconds}
      />

      <View style={styles.row}>
        <Button title="Start" onPress={handleStart} />
        <Button title="Stop" color="#d9534f" onPress={handleStop} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
});
