import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{"Meeting": {"MeetingId": "1b320036-a74a-4ec3-8360-bc99722ee23a","ExternalMeetingId": null,"MediaPlacement": {"AudioHostUrl": "9bae5abab0ff7d0e0716fcca503e6d69.k.m2.as1.app.chime.aws:3478","AudioFallbackUrl": "wss://haxrp.m2.as1.app.chime.aws:443/calls/1b320036-a74a-4ec3-8360-bc99722ee23a","ScreenDataUrl": "wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/1b320036-a74a-4ec3-8360-bc99722ee23a","ScreenSharingUrl": "wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/1b320036-a74a-4ec3-8360-bc99722ee23a","ScreenViewingUrl": "wss://bitpw.m2.as1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=1b320036-a74a-4ec3-8360-bc99722ee23a","SignalingUrl": "wss://signal.m2.as1.app.chime.aws/control/1b320036-a74a-4ec3-8360-bc99722ee23a","TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions"},"MediaRegion": "ap-southeast-1"}}';
    var AttendeeData = '{"Attendee": {"ExternalUserId": "prabhakar","AttendeeId": "07eb2630-4897-b1d4-fe83-61d9b018eaa5","JoinToken": "MDdlYjI2MzAtNDg5Ny1iMWQ0LWZlODMtNjFkOWIwMThlYWE1OjU1NmMxZTlkLTZkNDktNGE4OS1hZjkxLTgwNTY5OTdiNjNkOA"}}';
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