import React from 'react';
import styled from 'styled-components';
import Logo from '@microfrontend-react-app/ui/components/logo';
import routes from '../routes';

function Footer() {
  return (
    <Container>
      <Logo url={routes.createUserPage()} width={126} height={28} />

      <Address>1234 Elm Street, Anytown, USA 54321</Address>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 10px 40px;
  background: ${(props) => props.theme.colors.secondary};

  @media (${({ theme }) => theme.breakpoints.S}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Address = styled.div`
  font-size: 14px;
  line-height: 1;
  color: ${(props) => props.theme.colors.main};

  @media (${({ theme }) => theme.breakpoints.S}) {
    font-size: 12px;
  }
`;

export default Footer;
