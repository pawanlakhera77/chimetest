import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "4cac25b2-69a4-4a1c-bc9a-bac8cc9cc33e", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "cf4c3fb790c0b967d329a442075c810b.k.m1.as1.app.chime.aws:347 8", "AudioFallbackUrl": "wss://haxrp.m1.as1.app.chime.aws:443/calls/4cac25b2-69a 4-4a1c-bc9a-bac8cc9cc33e", "ScreenDataUrl": "wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/4cac25b2-69 a4-4a1c-bc9a-bac8cc9cc33e", "ScreenSharingUrl": "wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/4cac25b2 -69a4-4a1c-bc9a-bac8cc9cc33e", "ScreenViewingUrl": "wss://bitpw.m1.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=4cac25b2-69a4-4a1c-bc9a-bac8cc9cc33e", "SignalingUrl": "wss://signal.m1.as1.app.chime.aws/control/4cac25b2-69a4-4a1 c-bc9a-bac8cc9cc33e", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "ff3e328b-3fa5-0e8e-dfe3-bc8392366f82", "JoinToken": "ZmYzZTMyOGItM2ZhNS0wZThlLWRmZTMtYmM4MzkyMzY2ZjgyOmRjYjJiZDA4LTRh NGQtNGQwZi1hODJkLWE5ZTQzZTc5MmJlYw" } }';
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