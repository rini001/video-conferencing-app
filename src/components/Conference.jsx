import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Video from "./Video";

function Conference() {
    const peers = useHMSStore(selectPeers);

    return (
        <>
            {peers.map((peer) => (
                <Video key={peer.id} peer={peer} />
            ))}
        </>
    );
}
export default Conference