import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const calculateTotalLikes = (messages) => {
  return messages.reduce((total, message) => {
    return total + (message.liked ? 1 : 0);
  }, 0);
};

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const totalLikes = calculateTotalLikes(messages);

  const toggleLike = (id) => {
    const updatedMessages = messages.map((message) =>
      message.id === id ? { ...message, liked: !message.liked } : message
    );
    setMessages(updatedMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messages} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

export default App;