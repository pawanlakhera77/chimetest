import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting":{ "MeetingId":"bddedcd1-035d-45da-8aec-e4a78265e15f", "ExternalMeetingId":null, "MediaPlacement":{ "AudioHostUrl":"368720aa19d7a673ebb70236cb292f2a.k.m1.as1.app.chime.aws:347 8", "AudioFallbackUrl":"wss://haxrp.m1.as1.app.chime.aws:443/calls/bddedcd1-035 d-45da-8aec-e4a78265e15f", "ScreenDataUrl":"wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/bddedcd1-03 5d-45da-8aec-e4a78265e15f", "ScreenSharingUrl":"wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/bddedcd1 -035d-45da-8aec-e4a78265e15f", "ScreenViewingUrl":"wss://bitpw.m1.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=bddedcd1-035d-45da-8aec-e4a78265e15f", "SignalingUrl":"wss://signal.m1.as1.app.chime.aws/control/bddedcd1-035d-45d a-8aec-e4a78265e15f", "TurnControlUrl":"https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion":"ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee":{ "ExternalUserId":"prabhakar2", "AttendeeId":"d5b5579c-14cd-5d0f-7f46-33afce5f0db7", "JoinToken":"ZDViNTU3OWMtMTRjZC01ZDBmLTdmNDYtMzNhZmNlNWYwZGI3OmQyNjE4MGMyLTA5 NmItNDMzOC05MGFiLWExMzQ1ZTU1OGMwOA" } }';
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