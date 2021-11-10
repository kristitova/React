import React, { useCallback, useState, useEffect } from 'react';
import { SendMessage } from '../SendMessage';
import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../../../Redux/store/Messages_/actions';
import { getMessages } from '../../../../Redux/store/Messages_/selectors';
import { getChats } from '../../../../Redux/store/Chats_/selectors';


export const MessageList = () => {
    const { chatId } = useParams();
    const chats = useSelector(getChats);
    const chat = chats.find(({ idchat }) => idchat == chatId);

    if (!chat) {
        return <Redirect to="/404" />
    }

    const dispatch = useDispatch();
    const messages = useSelector(getMessages);


    const sendMessage = (message) => {
        dispatch(addMessage(chatId, message))
    }

    const onSendMessage = (value) => {
        sendMessage(value)
    }

    useEffect(() => {

        //if (messages.length == 0) {
        // return
        //} else {
        if (
            !messages.length || messages[messages.length - 1].author === "Bot"
        ) {
            return;
        }
        const timeout = setTimeout(() => {
            onSendMessage({ messid: Date.now(), author: 'Bot', text: 'I am robot' });
        }, 1000);

        return () => clearTimeout(timeout);


    }, [messages]);


    const renderMessage = useCallback((mess) => (
        <ListItem key={mess.messid}>
            <ListItemText>
                {mess.author} : {mess.text}
            </ListItemText>
        </ListItem >
    ), [messages]);

    return (

        <Box pb={5} height='400px'>
            <Box>{chat.namechat}</Box>
            <SendMessage mt={10} messageUpdate={onSendMessage} />
            <List > {() => {
                if (!messages.length) messages[chatId].map(renderMessage)
            }
                // console.log(messages);
                // if (!messages.length) {
                //   console.log(messages);

            }</List>
        </Box>
    )
};
