import react, { useState } from 'react';
import { MessageList } from '../MessageList';

export const OwnMessagesList = () => {

    const { chatId } = useParams();

    const ownmess = [
        { chatId: 'chatId1', mess: [] },
        { chatId: 'chatId2', mess: [] }
    ]

    for (i = 0; ownmess.length - 1; i++) {
        if (ownmess[i].chatId != chatId) {
            return <Redirect to="/404" />
        }

        else {
            return (
                <div>
                    <MessageList />
                </div>
            )
        }

    }
}