import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "5c7ec2fa-995a-47f5-9589-8a56fbdd28f6", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "1b10461bb9890e2280179c75ee4fc4f2.k.m2.as1.app.chime.aws:3478", "AudioFallbackUrl": "wss://haxrp.m2.as1.app.chime.aws:443/calls/5c7ec2fa-995a-47f5-9589-8a56fbdd28f6", "ScreenDataUrl": "wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/5c7ec2fa-995a-47f5-9589-8a56fbdd28f6", "ScreenSharingUrl": "wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/5c7ec2fa-995a-47f5-9589-8a56fbdd28f6", "ScreenViewingUrl": "wss://bitpw.m2.as1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=5c7ec2fa-995a-47f5-9589-8a56fbdd28f6", "SignalingUrl": "wss://signal.m2.as1.app.chime.aws/control/5c7ec2fa-995a-47f5-9589-8a56fbdd28f6", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "24198938-2fc5-c019-80a8-3bf01f7977c7", "JoinToken": "MjQxOTg5MzgtMmZjNS1jMDE5LTgwYTgtM2JmMDFmNzk3N2M3OjljMTQ1MTE2LTU0NmYtNGFiZC1iZjZkLWU5MmYwMTg2MjIxOQ" } }';
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