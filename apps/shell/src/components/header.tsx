import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@microfrontend-react-app/ui/components/logo';
import routes from '../routes';

const urls = [
  { url: routes.createUserPage(), title: 'Create user' },
  { url: routes.usersPage(), title: 'Users list' },
  { url: routes.splitViewPage(), title: 'Split view' },
];

function Header() {
  const location = useLocation();

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo url={routes.createUserPage()} />
        </LogoContainer>

        <Content>
          <List>
            {urls.map(({ url, title }) => (
              <Item key={url}>
                <Link
                  to={url}
                  className={url === location.pathname ? 'active' : ''}
                >
                  {title}
                </Link>
              </Item>
            ))}
          </List>
        </Content>
      </Container>

      <Placeholder />
    </>
  );
}

const Container = styled.header`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  height: 64px;
  padding: 10px 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 7;

  @media (${({ theme }) => theme.breakpoints.S}) {
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    height: 106px;
  }
`;

const LogoContainer = styled.div`
  @media (${({ theme }) => theme.breakpoints.S}) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (${({ theme }) => theme.breakpoints.S}) {
    margin-bottom: 5px;
  }
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin-left: 30px;

  @media (${({ theme }) => theme.breakpoints.S}) {
    margin: 0 10px;
  }

  a {
    position: relative;
    padding: 12px 0;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.3s;
    }
  }

  a.active {
    &::after {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 64px;

  @media (${({ theme }) => theme.breakpoints.S}) {
    height: 106px;
  }
`;

export default Header;
