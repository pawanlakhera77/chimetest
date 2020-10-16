import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "fa0328c2-0fbf-42a2-82ef-609dddd8d380", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "6397977cf65cef9ab6aaa1e7757e00dc.k.m2.as1.app.chime.aws:347 8", "AudioFallbackUrl": "wss://haxrp.m2.as1.app.chime.aws:443/calls/fa0328c2-0fb f-42a2-82ef-609dddd8d380", "ScreenDataUrl": "wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/fa0328c2-0f bf-42a2-82ef-609dddd8d380", "ScreenSharingUrl": "wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/fa0328c2 -0fbf-42a2-82ef-609dddd8d380", "ScreenViewingUrl": "wss://bitpw.m2.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=fa0328c2-0fbf-42a2-82ef-609dddd8d380", "SignalingUrl": "wss://signal.m2.as1.app.chime.aws/control/fa0328c2-0fbf-42a 2-82ef-609dddd8d380", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "e4272c61-e146-50a5-2e66-812b1e792018", "JoinToken": "ZTQyNzJjNjEtZTE0Ni01MGE1LTJlNjYtODEyYjFlNzkyMDE4OmY3MzdlN2U1LTFj YjEtNDVhMi1hNjQ3LTVjZGMzMmU0OTAwYg" } }';
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