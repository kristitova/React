import react from 'react';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Chat } from './routes/Chat';


export const Chats = () => {

    const initialChats = [
        { chatId: 'chatId1', namechat: 'Chat 1' },
        { chatId: 'chatId2', namechat: 'Chat 2' }
    ];

    const renderChat = useCallback((chatmess) => (
        <Link to='/chats/:chatId'>
            <ListGroup.Item variant='secondary' key={chatmess.chatId}><Chat chatnum={chatmess} /></ListGroup.Item>
        </Link>
    ), []);

    return (
        <ListGroup style={{ width: '500px', margin: '0 auto' }} >{initialChats.map(renderChat)}</ListGroup>
    )


};