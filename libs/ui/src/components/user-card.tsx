import React from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';

type UserCardProps = {
  name: string;
  email: string;
  age: number;
  onRemove: () => void;
};

function UserCard({ name, email, age, onRemove }: UserCardProps) {
  const firstLetter = name.length > 0 ? name[0] : '';

  const bgColor = randomColor({
    seed: name,
    luminosity: 'light',
    format: 'rgba',
    alpha: 1,
  });

  return (
    <Container>
      <Avatar $background={bgColor}>{firstLetter}</Avatar>

      <Content>
        <Name>{name}</Name>

        <Email>Email: {email}</Email>

        <Age>Age: {age}</Age>
      </Content>

      <RemoveButton type="button" aria-label="Remove" onClick={onRemove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
        </svg>
      </RemoveButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border: 1px solid #ccc;
  padding: 15px 15px 15px 80px;
  margin-bottom: 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.secondary};
`;

const Avatar = styled.div<{ $background: string }>`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 15px;
  left: 15px;
  font-weight: bold;
  font-size: 24px;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  border-radius: 50%;
  background-color: ${(props) => props.$background};
`;

const Content = styled.div``;

const Name = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.main};
`;

const Email = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.main};
`;

const Age = styled.div`
  font-size: 16px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.main};
`;

const RemoveButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export default UserCard;
