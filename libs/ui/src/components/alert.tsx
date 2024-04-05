import React from 'react';
import styled from 'styled-components';

type AlertProps = {
  message: string;
};

function Alert({ message }: AlertProps) {
  return (
    <Container>
      <Header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
        </svg>
      </Header>

      <Content>
        <p>{message}</p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.iron};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.iron};
`;

const Header = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.promo};
  }
`;

const Content = styled.div`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.main};

  p {
    margin: 0;
  }
`;

export default Alert;
