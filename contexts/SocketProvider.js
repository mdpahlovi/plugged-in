import React, { createContext } from "react";
import { io } from "socket.io-client";

const socket = io.connect("https://plugged-in-server.onrender.com/");
export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const socketInfo = {
    socket,
  };

  return (
    <SocketContext.Provider value={socketInfo}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
