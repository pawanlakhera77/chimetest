import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{"Meeting": { "MeetingId": "6bee3e9d-0ed9-4910-8eab-7ef997da15b5", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "e57582badb3639816e31425f3f2e559e.k.m3.as1.app.chime.aws:3478", "AudioFallbackUrl": "wss://haxrp.m3.as1.app.chime.aws:443/calls/6bee3e9d-0ed9-4910-8eab-7ef997da15b5", "ScreenDataUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/6bee3e9d-0ed9-4910-8eab-7ef997da15b5", "ScreenSharingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/6bee3e9d-0ed9-4910-8eab-7ef997da15b5", "ScreenViewingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=6bee3e9d-0ed9-4910-8eab-7ef997da15b5", "SignalingUrl": "wss://signal.m3.as1.app.chime.aws/control/6bee3e9d-0ed9-4910-8eab-7ef997da15b5", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "224fac23-992f-6972-4063-0325289f9fa5", "JoinToken": "MjI0ZmFjMjMtOTkyZi02OTcyLTQwNjMtMDMyNTI4OWY5ZmE1OjczOWE3YWI3LTVjNzgtNDExZi1iNjFiLTQ5MjRlN2I0OWVhNw" } }';
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