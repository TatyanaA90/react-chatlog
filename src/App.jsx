import './App.css';
/*import ChatEntry from './components/ChatEntry';*/
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';




const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        <ChatEntry
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />
        {/*Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
