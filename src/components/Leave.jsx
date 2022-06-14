import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import React from 'react'

export const Leave = () => {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();
  return (
    <div>
        {isConnected && (
        <div>
          <button style={{backgroundColor:"red", color:"white", border:"0px", height:"30px", width:"60px", marginTop:"10px"}} onClick={() => hmsActions.leave()}>Leave</button>
        </div>
      )}
    </div>
  )
}
