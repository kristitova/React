import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';
import { Chats } from './Chats';
import { Chat } from './Chats/routes/Chat';
import { NotFound } from './NotFound';

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/chats' component={Chats} />
            <Route path='/chats/:chatId' component={Chat} />
            <Route path='*' componet={NotFound} />
        </Switch >
    );
}