import {
  selectIsConnectedToRoom,

  useHMSStore,
} from "@100mslive/react-sdk";
import Join  from "./components/Join";
import  {Room} from "./components/Room";
function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return (
    <div className="App">
      <>{isConnected ?<Room/> : <Join />}</>
    </div>
  );
}

export default App;
