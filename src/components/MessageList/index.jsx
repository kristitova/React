import React, { useCallback, useMemo, useReducer, useState } from 'react';
import * as styles from './MessageList.module.css'
import ListGroup from 'react-bootstrap/ListGroup'

export const MessageList = ({ messages }) => {
    const renderMessage = useCallback((mess) => (
        <ListGroup.Item variant="primary" key={mess.id}>{mess.author} : {mess.text}</ListGroup.Item>
    ), []);

    return (
        <ListGroup style={{ width: '500px', margin: '0 auto' }} >{messages.map(renderMessage)}</ListGroup>
    )
};