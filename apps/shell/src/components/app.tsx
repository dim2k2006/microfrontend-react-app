import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

type AppProps = {
  children: React.ReactNode;
};

export function App({ children }: AppProps) {
  return (
    <Container>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 1000px;
  margin: 0 auto;
  padding: 40px;

  @media (${({ theme }) => theme.breakpoints.XL}) {
    width: 800px;
  }

  @media (${({ theme }) => theme.breakpoints.L}) {
    width: 700px;
  }

  @media (${({ theme }) => theme.breakpoints.S}) {
    width: 100%;
    padding: 20px;
  }
`;

export default App;
