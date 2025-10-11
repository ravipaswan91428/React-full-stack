export default function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-3 bg-[#e5ddd5] flex flex-col">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`my-1.5 px-4 py-2 rounded-xl max-w-[70%] shadow 
            ${msg.fromMe 
              ? "bg-[#dcf8c6] self-end rounded-br-none" 
              : "bg-white self-start rounded-bl-none"}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
