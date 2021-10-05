import react from 'react';
import { useParams, Redirect, Route, Link, Switch } from "react-router-dom";
import { NotFound } from '../../../NotFound';
import { ListGroup } from 'react-bootstrap';
import { OwnMessagesList } from '../../../OwnMessagesList';


export const Chat = ({ chatnum }) => {
    //const { chatId } = useParams();
    console.log(chatnum);

    // const chat = InitialChat.find(({ chatId }) => chatId === chatId);

    if (chatnum.chatId == 0) {
        return <Redirect to="/404" />
    }

    return (
        <div>
            {chatnum.namechat}

            <Link to={`/chats/${chatnum.chatId}/OwnMessagesList`}>
            </Link>
            <Switch>
                <Route path={'/chats/:chatId/OwnMessagesList'} component={OwnMessagesList} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div >
    )


}

