import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "../../../contexts/SocketProvider";

import Peer from "peerjs";

const RoomModal = () => {
  const { socket } = useContext(SocketContext);
  const { query } = useRouter();
  const [peerId, setPeerId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    const peer = new Peer();
    peer.on("open", (id) => {
      setPeerId(id);
      socket.emit("send_peerid", { room: query?.roomName, id });
    });

    // peer.on("call", (call) => {
    //   const getUserMedia =
    //     window.navigator?.getUserMedia ||
    //     window.navigator?.webkitGetUserMedia ||
    //     window.navigator?.mozGetUserMedia;
    //   console.log("from Effect", call);
    //   getUserMedia(
    //     { video: true, audio: true },
    //     (mediaStream) => {
    //       currentUserVideoRef.current.srcObject = mediaStream;
    //       currentUserVideoRef.current.play();

    //       // const call = peerInstance.current.call(remotePeerId, mediaStream);

    //       call.answer(mediaStream);
    //       call.on("stream", function (remoteStream) {
    //         console.log("calling");
    //         remoteVideoRef.current.srcObject = remoteStream;
    //         remoteVideoRef.current.play();
    //       });
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // });

    peerInstance.current = peer;
  }, [query, socket]);

  useEffect(() => {
    socket.on("receive_peerid", (data) => {
      if (data?.room === query?.roomName) {
        console.log(data);
        setRemotePeerIdValue(data?.id);
      }
    });
  }, [socket, query]);

  const call = (remotePeerId) => {
    const getUserMedia =
      window?.navigator?.getUserMedia ||
      window?.navigator?.webkitGetUserMedia ||
      window?.navigator?.mozGetUserMedia;
    getUserMedia(
      { video: true, audio: true },
      (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();

        const call = peerInstance.current.call(remotePeerId, mediaStream);
        console.log("from function", call);

        call.on("stream", (remoteStream) => {
          console.log("calling");
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    socket.on("end_call", (data) => {
      console.log(data);
      if (data?.satus === "callEnd") {
        setConnect(false);
        currentUserVideoRef.current.pause();
        remoteVideoRef.current.pause();
      }
    });
  }, [socket]);

  const handleReceive = (mypeerId) => {
    const getUserMedia =
      window.navigator?.getUserMedia ||
      window.navigator?.webkitGetUserMedia ||
      window.navigator?.mozGetUserMedia;
    console.log("getting user media");
    getUserMedia(
      { video: true, audio: true },
      (mediaStream) => {
        console.log("inside media stream");
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();

        const call = peerInstance.current.call(mypeerId, mediaStream);
        console.log("from Answer", call);
        call.answer(mediaStream);
        call.on("stream", function (remoteStream) {
          console.log("calling");
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div>
      <input type="checkbox" id="roomModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="roomModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <button className="btn">Join Room</button>
            <div>
              <p>Current user id is : {peerId}</p>
              <p>Remote user id is : {remotePeerIdValue}</p>
              {/* <input
        type="text"
        value={remotePeerIdValue}
        onChange={(e) => setRemotePeerIdValue(e.target.value)}
      /> */}
              <button
                className="btn"
                onClick={() => {
                  call(remotePeerIdValue);
                  setConnect(true);
                }}
              >
                Call
              </button>
              <button
                className="btn"
                onClick={() => {
                  setPeerId("");
                  setRemotePeerIdValue("");
                  socket.emit("call_end", {
                    room: query?.roomName,
                    satus: "callEnd",
                  });
                  currentUserVideoRef.current.srcObject === null;
                  remoteVideoRef.current.srcObject === null;
                  // setConnect(false);
                }}
              >
                endCall
              </button>
              <button onClick={() => handleReceive(peerId)}>Receive</button>
              <div>
                <div>
                  <video ref={currentUserVideoRef} />
                </div>
                <div>
                  <video ref={remoteVideoRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
