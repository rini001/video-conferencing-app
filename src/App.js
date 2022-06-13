import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import { Join } from "./components/Join";
import { Room } from "./components/Room";
const endPoint =
  "https://prod-in2.100ms.live/hmsapi/videoconferencing-videocon.app.100ms.live/";
const getToken = async (user_id) => {
  const response = await fetch(`${endPoint}api/token`, {
    method: "POST",
    body: JSON.stringify({
      user_id,
      role: "host", //host, teacher, guest, student
      type: "app",
      room_id: "62a74f8c2630221c75a44e69",
    }),
  });
  const { token } = await response.json();
  return token;
};
function App() {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const handleSubmit = async (userName) => {
    const token = await getToken(userName);
    hmsActions.join({ authToken: token, userName });
    console.log(1);
  };
 
  return (
    <div className="App">
      <>{isConnected ?<Room/> : <Join handleSubmit={handleSubmit} />}</>
    </div>
  );
}

export default App;
