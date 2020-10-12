import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import MyApp from './MyApp.js';
import {
  MeetingProvider,
  lightTheme
} from 'amazon-chime-sdk-component-library-react';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
    <MeetingProvider>
      <MyApp />
    </MeetingProvider>
  </ThemeProvider>
  );
}

export default App;
