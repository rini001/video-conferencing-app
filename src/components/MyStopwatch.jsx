import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    // isRunning,
    // start,
    // pause,
    // reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{color:"white"}}>
    <span>In call :</span>  <span style={{color:"white"}}>{hours}</span>:<span style={{color:"white"}}>{minutes}</span>:<span style={{color:"white"}}>{seconds}</span>
      </div>
    </div>
  );
}
export default MyStopwatch