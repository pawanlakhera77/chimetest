import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "774aea4f-a249-4931-94e4-2411c342f6b0", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "b7ec8a39c70a0f80f74683bdf83ddb50.k.m3.as1.app.chime.aws:3478", "AudioFallbackUrl": "wss://haxrp.m3.as1.app.chime.aws:443/calls/774aea4f-a249-4931-94e4-2411c342f6b0", "ScreenDataUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/774aea4f-a249-4931-94e4-2411c342f6b0", "ScreenSharingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/774aea4f-a249-4931-94e4-2411c342f6b0", "ScreenViewingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=774aea4f-a249-4931-94e4-2411c342f6b0", "SignalingUrl": "wss://signal.m3.as1.app.chime.aws/control/774aea4f-a249-4931-94e4-2411c342f6b0", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "54dcbeba-aed5-4e28-86bf-faf859c143c6", "JoinToken": "NTRkY2JlYmEtYWVkNS00ZTI4LTg2YmYtZmFmODU5YzE0M2M2OmIyZjk5ZmZjLTUxNTEtNDQwMS04YTEzLWY4ZjMzNWU1Y2U2Mg" } }';
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