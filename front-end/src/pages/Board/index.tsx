import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Container, Message } from './styles';

interface IMessage {
  id: number;
  content: string;
  user: {
    email: string;
  };
}

const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      user {
        email
      }
    }
  }
`;

const Board = () => {
  const { loading, data } = useQuery<{ getMessages: IMessage[] }>(
    GET_ALL_MESSAGES
  );

  if (loading) return <p>Loading ...</p>;

  return (
    <Container>
      {data?.getMessages.map((item) => (
        <Message key={item.id}>
          <p>{item.content}</p>

          <span>{item.user.email}</span>
        </Message>
      ))}
    </Container>
  );
};

export default Board;
