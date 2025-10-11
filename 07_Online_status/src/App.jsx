import { useState } from "react";
import ChatHeader from "./Components/ChatHeader";
import MessageList from "./Components/MessageList";
import MessageInput from "./Components/MessageInput";
import OfflineBanner from "./Components/OflineBanner";
import useOnlineStatus from "./Hooks/userOnlineStatus";

export default function App() {
  const isOnline = useOnlineStatus();
  const [messages, setMessages] = useState([]);

  const handleSend = (newMessage) => {
    setMessages([...messages, { text: newMessage, fromMe: true }]);
  };

  return (
    <div className="flex flex-col h-screen w-[400px] mx-auto border border-gray-300 font-sans">
      {!isOnline && <OfflineBanner />}
      <ChatHeader />
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}
