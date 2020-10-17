import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting":{ "MeetingId":"e7b20d7c-1272-4af5-9e53-d5ea86c42838", "ExternalMeetingId":null, "MediaPlacement":{ "AudioHostUrl":"58f8a51a83617897df1ead1f5849b29f.k.m2.as1.app.chime.aws:347 8", "AudioFallbackUrl":"wss://haxrp.m2.as1.app.chime.aws:443/calls/e7b20d7c-127 2-4af5-9e53-d5ea86c42838", "ScreenDataUrl":"wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/e7b20d7c-12 72-4af5-9e53-d5ea86c42838", "ScreenSharingUrl":"wss://bitpw.m2.as1.app.chime.aws:443/v2/screen/e7b20d7c -1272-4af5-9e53-d5ea86c42838", "ScreenViewingUrl":"wss://bitpw.m2.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=e7b20d7c-1272-4af5-9e53-d5ea86c42838", "SignalingUrl":"wss://signal.m2.as1.app.chime.aws/control/e7b20d7c-1272-4af 5-9e53-d5ea86c42838", "TurnControlUrl":"https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion":"ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee":{ "ExternalUserId":"prabhakar2", "AttendeeId":"99241f0c-2e7b-f0d9-f090-46445562fca2", "JoinToken":"OTkyNDFmMGMtMmU3Yi1mMGQ5LWYwOTAtNDY0NDU1NjJmY2EyOmExZjU3NDM4LTBl N2UtNDAyMS05NjMxLTMyMDQ1Y2UwOTE5OA" } }';
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