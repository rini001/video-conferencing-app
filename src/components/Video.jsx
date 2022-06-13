import React from 'react'
import {
    useHMSActions,
    useHMSStore,
    selectCameraStreamByPeerID
  } from "@100mslive/react-sdk";
  
export const Video = ({peers}) => {
    const hmsActions = useHMSActions();
    const videoRef = React.useRef(null);
    const videoTrack = useHMSStore(selectCameraStreamByPeerID(peers.id));
  
    React.useEffect(() => {
      (async () => {
        console.log(videoRef.current);
        console.log(videoTrack);
        if (videoRef.current && videoTrack) {
          if (videoTrack.enabled) {
            await hmsActions.attachVideo(videoTrack.id, videoRef.current);
          } else {
            await hmsActions.detachVideo(videoTrack.id, videoRef.current);
          }
        }
      })();
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoTrack]);
  return (
    <div> <video
    ref={videoRef}
    autoPlay={true}
    playsInline
    muted={true}
    ></video></div>
  )
}
