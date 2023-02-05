import React, { createContext } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5000/");
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
