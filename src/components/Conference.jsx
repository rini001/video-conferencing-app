import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Video from "./Video";
import styles from "./Conference.module.css"
import MyStopwatch from "./MyStopwatch";
function Conference() {
    const peers = useHMSStore(selectPeers);

    return (
        <>
        <div className={styles.users} >
            {peers.map((peer) => (
                <Video key={peer.id} peer={peer} />
            ))}
            </div>
            <MyStopwatch/>
        </>
    );
}
export default Conference