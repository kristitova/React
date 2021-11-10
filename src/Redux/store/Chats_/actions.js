export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";


export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: chat
});

export const deleteChat = (idchat) => ({
    type: DELETE_CHAT,
    payload: idchat
});

