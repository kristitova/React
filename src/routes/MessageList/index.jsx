
import React, { useState, useCallback, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { SendMessage } from '../SendMessage';

export const MessageList = () => {


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
            setMessages([...messages, { author: 'Bot', text: 'I am robot', messId: 'id2' }])
        }, 1000);
    });



    const renderMessage = useCallback((mess) => (
        <ListGroup.Item variant="primary" key={mess.chatId}>{mess.author} : {mess.text}</ListGroup.Item>
    ), []);

    const chat = messages.find(({ chatId }) => chatId === chatId);

    if (!chat) {
        return <Redirect to="/404" />
    }

    return (
        <div>
            <ListGroup style={{ width: '500px', margin: '0 auto' }} >{messages.map(renderMessage)}</ListGroup>
            <SendMessage message_={handleSend} />
        </div>
    )

}

