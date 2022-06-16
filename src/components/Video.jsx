import { useRef, useEffect } from "react";
import {
  useHMSStore,
  useHMSActions,
  selectCameraStreamByPeerID,
} from "@100mslive/react-sdk";

function Video({ peer }) {
  const videoRef = useRef(null);
  const hmsActions = useHMSActions();
  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));
  useEffect(() => {
    if (videoRef.current && videoTrack) {
      if (videoTrack.enabled) {
        hmsActions.attachVideo(videoTrack.id, videoRef.current);
      } else {
        hmsActions.detachVideo(videoTrack.id, videoRef.current);
      }
    }
  }, [videoTrack, hmsActions]);
  return (
    <div>
      <video  ref={videoRef} autoPlay muted playsInline></video>
      <div  style={{color:"white"}}>
        <h1>{peer.name} {peer.isLocal ? "(You)" : ""}</h1>
      </div>
    </div>
  );
}

export default Video;
