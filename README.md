# IT313_Villaruz_Michael_ReactStateHooks

## Problem

A small study-tracking screen for lab sessions that counts solved practice
problems and tracks how long a student has been working.

## Approach

- `LabScreen` owns the state (`solved`, `isRunning`) and passes data down
  as props.
- `PracticeTracker` shows the solved count, Solve +1 and Reset buttons,
  and displays "Great job!" at 5 solved.
- `Stopwatch` displays the formatted time and Running/Paused label.
- `useStopwatch` is a custom hook using `useState` and `useEffect`.
- Event handlers are passed as function references.
- The counter uses the functional update form.

## How to Run

1. Install dependencies: `npm install`
2. Start the app: `npx expo start`
3. Scan the QR code using Expo Go.

## Hooks Used

`useState`, `useEffect`, and the custom `useStopwatch` hook.
