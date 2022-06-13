import React from 'react'
import {
    useHMSStore,
    selectPeers
  } from "@100mslive/react-sdk";
import { Video } from './Video';
export const Room = () => {
  const peers = useHMSStore(selectPeers);
  return (
    <div>
        {peers.map((el)=>(
            <Video peers={el}/>
        ))}
       
    </div>
    
  )
}
