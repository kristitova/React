import logo from './logo.svg';
import './App.css';
import { useState, useCallback, useEffect } from 'react';
import { MessageList } from './components/MessageList'
import { SendMessage } from './components/SendMessage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [messages, setMessages] = useState([]);

  const handleSend = useCallback((newmessage) => {
    setMessages([...messages, newmessage])
  }, [messages]);

  useEffect(() => {
    if (
      !messages.length || messages[messages.length - 1].author === "Bot"
    ) {
      return;
    }
    const timeout = setTimeout(() => {
      setMessages([...messages, { author: 'Bot', text: 'I am robot', id: Math.random() }])
    }, 1000);
  });


  return (
    <div className="App">
      <MessageList messages={messages} />
      <SendMessage message_={handleSend} />
    </div>
  );
}

export default App;
