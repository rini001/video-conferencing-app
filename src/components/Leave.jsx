import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import React from 'react'

export const Leave = () => {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();
  return (
    <div>
        {isConnected && (
        <div>
          <button onClick={() => hmsActions.leave()}>Leave</button>
        </div>
      )}
    </div>
  )
}
