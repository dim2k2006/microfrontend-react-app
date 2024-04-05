import React from 'react';
import styled from 'styled-components';
import Heading from '@microfrontend-react-app/ui/components/heading';

type SplitViewProps = {
  view1: React.ReactNode;
  view2: React.ReactNode;
};

function SplitView({ view1, view2 }: SplitViewProps) {
  return (
    <Container>
      <Header>
        <Heading type="h1" title="Split view" />
      </Header>

      <Content>
        <View>{view1}</View>

        <View>{view2}</View>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (${({ theme }) => theme.breakpoints.L}) {
    flex-direction: column;
  }
`;

const View = styled.div`
  flex: 1;
`;

export default SplitView;
