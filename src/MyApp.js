import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "a440db84-1a4e-479e-adb6-fac37a2d0f51", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "37af17b4030f62cb7f69e0ed0cb98d6c.k.m1.as1.app.chime.aws:3478", "AudioFallbackUrl": "wss://haxrp.m1.as1.app.chime.aws:443/calls/a440db84-1a4e-479e-adb6-fac37a2d0f51", "ScreenDataUrl": "wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/a440db84-1a4e-479e-adb6-fac37a2d0f51", "ScreenSharingUrl": "wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/a440db84-1a4e-479e-adb6-fac37a2d0f51", "ScreenViewingUrl": "wss://bitpw.m1.as1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=a440db84-1a4e-479e-adb6-fac37a2d0f51", "SignalingUrl": "wss://signal.m1.as1.app.chime.aws/control/a440db84-1a4e-479e-adb6-fac37a2d0f51", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "0cd8c55a-a44f-10b7-17e3-7de4363204bb", "JoinToken": "MGNkOGM1NWEtYTQ0Zi0xMGI3LTE3ZTMtN2RlNDM2MzIwNGJiOmViMmI5Yzg5LWM0M2ItNDU3NS05Y2M5LWNhZWE0MGVlYjE5Mw" } }';
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