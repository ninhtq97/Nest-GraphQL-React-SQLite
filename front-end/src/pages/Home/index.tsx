import { gql, useMutation } from '@apollo/client';
import { History } from 'history';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Button, Container, Content, Input } from './styles';

type Props = {
  history: History;
};

export const CREATE_OR_LOGIN_USER = gql`
  mutation($email: String!) {
    createOrLoginUser(data: { email: $email }) {
      id
    }
  }
`;

const Home: FC<Props> = ({ history }) => {
  const [input, setInput] = useState<string>('');

  const [createOrLoginUser, { data }] = useMutation(CREATE_OR_LOGIN_USER);

  useEffect(() => {
    if (data) {
      const { createOrLoginUser } = data;
      const { id } = createOrLoginUser;

      history.push(`/dashboard?id=${id}`);
    }
  }, [data, history]);

  const handleRegister = async (e: MouseEvent) => {
    e.preventDefault();

    if (!input.length) {
      alert('Insert a valid e-mail!');
      return;
    }

    createOrLoginUser({ variables: { email: input } });
    setInput('');
  };

  return (
    <Container>
      <Content>
        <form>
          <Input
            value={input}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setInput(e.target.value)}
            placeholder="E-mail"
          />

          <Button onClick={handleRegister}>
            <FaCheck size={36} color="#fff" />
            <span>Login or Register</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Home;
