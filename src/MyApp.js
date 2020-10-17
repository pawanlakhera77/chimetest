import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting":{ "MeetingId":"1418f802-f359-421c-91f3-5b448aa8dccc", "ExternalMeetingId":null, "MediaPlacement":{ "AudioHostUrl":"c3c4b5461fca79991b301a679ec05456.k.m3.as1.app.chime.aws:347 8", "AudioFallbackUrl":"wss://haxrp.m3.as1.app.chime.aws:443/calls/1418f802-f35 9-421c-91f3-5b448aa8dccc", "ScreenDataUrl":"wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/1418f802-f3 59-421c-91f3-5b448aa8dccc", "ScreenSharingUrl":"wss://bitpw.m3.as1.app.chime.aws:443/v2/screen/1418f802 -f359-421c-91f3-5b448aa8dccc", "ScreenViewingUrl":"wss://bitpw.m3.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=1418f802-f359-421c-91f3-5b448aa8dccc", "SignalingUrl":"wss://signal.m3.as1.app.chime.aws/control/1418f802-f359-421 c-91f3-5b448aa8dccc", "TurnControlUrl":"https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion":"ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee":{ "ExternalUserId":"prabhakar2", "AttendeeId":"ce1963e8-0ba5-d638-933b-8c116c582869", "JoinToken":"Y2UxOTYzZTgtMGJhNS1kNjM4LTkzM2ItOGMxMTZjNTgyODY5OjBmNzQzYzg5LTk4 OGYtNGVkNS05M2FiLWYxNTVmYThmMWM3NQ" } }';
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