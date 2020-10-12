import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "6424b447-8d00-4557-aa22-5cab1a885b68", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "4e81f8fe02859f72036f1b563e1ae4bb.k.m3.as1.app.chime.aws:3478", "AudioFallbackUrl": "wss://haxrp.m3.as1.app.chime.aws:443/calls/6424b447-8d00-4557-aa22-5cab1a885b68", "ScreenDataUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/6424b447-8d00-4557-aa22-5cab1a885b68", "ScreenSharingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/6424b447-8d00-4557-aa22-5cab1a885b68", "ScreenViewingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=6424b447-8d00-4557-aa22-5cab1a885b68", "SignalingUrl": "wss://signal.m3.as1.app.chime.aws/control/6424b447-8d00-4557-aa22-5cab1a885b68", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "5312e15c-4fe6-2d94-9a72-e15b77fd4e33", "JoinToken": "NTMxMmUxNWMtNGZlNi0yZDk0LTlhNzItZTE1Yjc3ZmQ0ZTMzOmUxYTk5MGJjLWUzNGUtNGMyYy04OTIxLTgyN2VkMWY2ZWJiNg" } }';
    const joinData = {
      meetingInfo: JSON.parse(MeetingData),
      attendeeInfo: JSON.parse(AttendeeData)
    };

    // Use the join API to create a meeting session
    await meetingManager.join(joinData);

    // At this point you can let users setup their devices, or start the session immediately
    await meetingManager.start();
  };

  return <button onClick={joinMeeting}>Join</button>;
};

export default MyApp;