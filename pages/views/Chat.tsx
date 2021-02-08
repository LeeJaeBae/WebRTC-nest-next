import React, { useEffect } from 'react';
import { NextPage } from 'next';
import io from 'socket.io-client';

type ChatProps = {
  socket: SocketIOClient.Socket | unknown
}

const Chat: NextPage<ChatProps> = ({ socket }) => {
  return <>chat</>;
};

Chat.getInitialProps = (ctx): ChatProps => {
  const { socket } = ctx.query;
  return { socket } as ChatProps;
};

export default Chat;