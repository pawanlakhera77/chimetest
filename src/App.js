import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import MyApp from './MyApp.js';
import {
  MeetingProvider,
  lightTheme,
  //RemoteVideo,
  LocalVideo,
  useLocalVideo,
} from 'amazon-chime-sdk-component-library-react';

function App() {
  // const { toggleVideo } = useLocalVideo();
  return (
    <ThemeProvider theme={lightTheme}>
    <MeetingProvider>
      <MyApp />
      <LocalVideo />
      <MyChild/>
      {/* //<button onClick={toggleVideo}>Toggle video</button> */}
    </MeetingProvider>
  </ThemeProvider>
  );
}

const MyChild = () => {
  const { isVideoEnabled, toggleVideo } = useLocalVideo();

  return (
    <button onClick={toggleVideo}>
      {isVideoEnabled ? 'Stop your video' : 'Start your video'}
    </button>
  );
};

export default App;
