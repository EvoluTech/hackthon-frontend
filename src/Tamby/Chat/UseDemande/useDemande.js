import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://127.0.0.1:3065";

const useDemande = (roomId) => {
  const [demande, setDemande] = useState([]);
  const socketRef = useRef();
  const [count, setcount] = useState(0);
  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    }); 
 
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setcount((count)=>(count+1));
      setDemande(incomingMessage);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendDemande = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      status: messageBody.utilisateur+'_'+count,
      senderId: socketRef.current.id, 
    }); 
  };

  return { demande, sendDemande };
};

export default useDemande;
