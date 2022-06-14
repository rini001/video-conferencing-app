import {
  selectIsConnectedToRoom,

  useAVToggle,

  useHMSStore,
} from "@100mslive/react-sdk";
import { Bottom } from "./components/Bottom";
import Conference from "./components/Conference";
import Join  from "./components/Join";
import { Leave } from "./components/Leave";
function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return (
    <div className="App">
      {/* <>{isConnected  ?(isLocalVideoEnabled ? <Conference/>:"oops"): <Join />}</> */}
      <>{isConnected?<Conference/>: <Join />}</>

      {isConnected?<Bottom/>:""}
      <Leave/>
    </div>
  );
}

export default App;
