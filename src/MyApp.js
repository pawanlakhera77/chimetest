import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting":{ "MeetingId":"0161b8ea-09d6-40b6-a56a-d1719b4791b5", "ExternalMeetingId":null, "MediaPlacement":{ "AudioHostUrl":"501fb85471329edddf741927b5404382.k.m3.as1.app.chime.aws:347 8", "AudioFallbackUrl":"wss://haxrp.m3.as1.app.chime.aws:443/calls/0161b8ea-09d 6-40b6-a56a-d1719b4791b5", "ScreenDataUrl":"wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/0161b8ea-09 d6-40b6-a56a-d1719b4791b5", "ScreenSharingUrl":"wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/0161b8ea -09d6-40b6-a56a-d1719b4791b5", "ScreenViewingUrl":"wss://bitpw.m3.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=0161b8ea-09d6-40b6-a56a-d1719b4791b5", "SignalingUrl":"wss://signal.m3.as1.app.chime.aws/control/0161b8ea-09d6-40b 6-a56a-d1719b4791b5", "TurnControlUrl":"https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion":"ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee":{ "ExternalUserId":"prabhakar2", "AttendeeId":"d49fb689-a3b6-d183-538c-6b614f3d0645", "JoinToken":"ZDQ5ZmI2ODktYTNiNi1kMTgzLTUzOGMtNmI2MTRmM2QwNjQ1OmViZDQ4NjQ4LTg2 YWYtNDA1Yy04MWFkLTRjN2I1ZWQwYTJjYg" } }';
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