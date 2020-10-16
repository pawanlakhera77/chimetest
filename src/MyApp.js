import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "16036a06-b6f8-4f04-81c7-690c50a28d2c", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "e8a426ee0a4a018cd3a9b0caa421f918.k.m3.as1.app.chime.aws:347 8", "AudioFallbackUrl": "wss://haxrp.m3.as1.app.chime.aws:443/calls/16036a06-b6f 8-4f04-81c7-690c50a28d2c", "ScreenDataUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/16036a06-b6 f8-4f04-81c7-690c50a28d2c", "ScreenSharingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/16036a06 -b6f8-4f04-81c7-690c50a28d2c", "ScreenViewingUrl": "wss://bitpw.m3.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=16036a06-b6f8-4f04-81c7-690c50a28d2c", "SignalingUrl": "wss://signal.m3.as1.app.chime.aws/control/16036a06-b6f8-4f0 4-81c7-690c50a28d2c", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "6b7c0763-4e8f-c482-634b-e4bc2513f943", "JoinToken": "NmI3YzA3NjMtNGU4Zi1jNDgyLTYzNGItZTRiYzI1MTNmOTQzOjU1M2I1MWExLWIy ZmMtNDNiOC1iNjY5LWUzNGVkZjAwYWU5NA" } }';
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