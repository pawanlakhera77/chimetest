import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "534a4910-ccef-447e-b59f-538d41d9f0ea", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "9776d63d5ab1aaff8fd442a658e784aa.k.m3.as1.app.chime.aws:3478", "AudioFallbackUrl": "wss://haxrp.m3.as1.app.chime.aws:443/calls/534a4910-ccef-447e-b59f-538d41d9f0ea", "ScreenDataUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/534a4910-ccef-447e-b59f-538d41d9f0ea", "ScreenSharingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/534a4910-ccef-447e-b59f-538d41d9f0ea", "ScreenViewingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=534a4910-ccef-447e-b59f-538d41d9f0ea", "SignalingUrl": "wss://signal.m3.as1.app.chime.aws/control/534a4910-ccef-447e-b59f-538d41d9f0ea", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "ace0c132-f01f-d3d6-2b65-16eedcdb91bf", "JoinToken": "YWNlMGMxMzItZjAxZi1kM2Q2LTJiNjUtMTZlZWRjZGI5MWJmOjRkOGI5NWUyLTRlYWQtNDYxOS04NmRmLTExMjZhODNlOTA3NA" } }';
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