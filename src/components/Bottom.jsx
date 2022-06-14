import { useAVToggle, useHMSActions } from '@100mslive/react-sdk';
import React from 'react'

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
    <div>
        <button onClick={toggleAudio}>{isLocalAudioEnabled ? "mute":"unmute"}</button>
        <button onClick={toggleVideo}>{isLocalVideoEnabled ? "hide":"unhide"}</button>
        <button onClick={shareScreen}>Share</button>
    </div>
  )
}
