import { useAVToggle, useHMSActions } from '@100mslive/react-sdk';
import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import MyStopwatch from './MyStopwatch';
export const Bottom = () => {
    const hmsActions = useHMSActions();
    const {
        isLocalAudioEnabled,
        isLocalVideoEnabled,
        toggleAudio,
        toggleVideo
      } = useAVToggle();
      const shareScreen = async ()=>{       
try {
    await hmsActions.setScreenShareEnabled(true);
} catch (error) {
    console.log("oops")
}
      }
  return (
    <div style={{display:"flex", columnGap:"15px"}}>
        <button onClick={toggleAudio}>{isLocalAudioEnabled ? <MicIcon/>:<MicOffIcon/>}</button>
        <button onClick={toggleVideo}>{isLocalVideoEnabled ? <VideocamIcon/>:<VideocamOffIcon/>}</button>
        <button onClick={shareScreen}>Share Screen</button>
        <MyStopwatch/>
    </div>
  )
}
