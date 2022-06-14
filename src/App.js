import {
  selectIsConnectedToRoom,

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
      <Leave/>
      <Bottom/>
      <>{isConnected ?<><Conference/></> : <Join />}</>
    </div>
  );
}

export default App;
