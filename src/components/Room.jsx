import React from 'react'
import {
    useHMSStore,
    selectLocalPeer,
    selectPeers
  } from "@100mslive/react-sdk";
import { Video } from './Video';
export const Room = () => {
    const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);
  return (
    <div>
        {localPeer && <Video peers={localPeer} isLocal={true} />}
         {peers &&
          peers
            .filter((peers) => !peers.isLocal)
            .map((peers) => {
              return (
                <>
                  <Video isLocal={false} peers={peers} />
                </>
              );
            })}
    </div>
    
  )
}
