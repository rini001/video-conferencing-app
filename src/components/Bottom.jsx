import { useAVToggle } from '@100mslive/react-sdk';
import React from 'react'

export const Bottom = () => {
    const {
        isLocalAudioEnabled,
        isLocalVideoEnabled,
        toggleAudio,
        toggleVideo
      } = useAVToggle();
  return (
    <div>
        <button onClick={toggleAudio}>{isLocalAudioEnabled ? "mute":"unmute"}</button>
    </div>
  )
}
