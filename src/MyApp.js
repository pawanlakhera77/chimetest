import React from 'react';

import { useMeetingManager } from 'amazon-chime-sdk-component-library-react';

const MyApp = () => {
  const meetingManager = useMeetingManager();

  const joinMeeting = async () => {
    // Fetch the meeting and attendee data from your server
    //const response = await fetch('/my-server');
    //const data = await response.json();
    var MeetingData = '{ "Meeting": { "MeetingId": "4a737b2b-0251-45f5-bb11-32e01ec8d807", "ExternalMeetingId": null, "MediaPlacement": { "AudioHostUrl": "9036506fdd3d6f3ad69be66a23ae5c1c.k.m1.as1.app.chime.aws:347 8", "AudioFallbackUrl": "wss://haxrp.m1.as1.app.chime.aws:443/calls/4a737b2b-025 1-45f5-bb11-32e01ec8d807", "ScreenDataUrl": "wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/4a737b2b-02 51-45f5-bb11-32e01ec8d807", "ScreenSharingUrl": "wss://bitpw.m1.as1.app.chime.aws:443/v2/screen/4a737b2b -0251-45f5-bb11-32e01ec8d807", "ScreenViewingUrl": "wss://bitpw.m1.as1.app.chime.aws:443/ws/connect?passcod e=null&viewer_uuid=null&X-BitHub-Call-Id=4a737b2b-0251-45f5-bb11-32e01ec8d807", "SignalingUrl": "wss://signal.m1.as1.app.chime.aws/control/4a737b2b-0251-45f 5-bb11-32e01ec8d807", "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions" }, "MediaRegion": "ap-southeast-1" } }';
    var AttendeeData = '{ "Attendee": { "ExternalUserId": "prabhakar", "AttendeeId": "e4bbb965-d6ee-0ab6-609e-bdb6073995cc", "JoinToken": "ZTRiYmI5NjUtZDZlZS0wYWI2LTYwOWUtYmRiNjA3Mzk5NWNjOjVkNDMyYWIxLWFh NDktNDNjZi1iMTYxLWYxZWRhZWMyNmJmNQ" } }';
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