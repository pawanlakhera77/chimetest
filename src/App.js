import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import MyApp from './MyApp.js';
import {
  MeetingProvider,
  lightTheme,
  //RemoteVideo,
  LocalVideo,
  //useLocalVideo
} from 'amazon-chime-sdk-component-library-react';

function App() {
  //const { toggleVideo } = useLocalVideo();
  return (
    <ThemeProvider theme={lightTheme}>
    <MeetingProvider>

      <MyApp />
      <LocalVideo />
      <button onClick={toggleVideo}>Toggle video</button>
    </MeetingProvider>
  </ThemeProvider>
  );
}

export default App;
