import React from 'react';
import styled from 'styled-components';
import Skeleton from '@microfrontend-react-app/ui/components/skeleton';

function RemoteAppSkeleton() {
  return (
    <Container>
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
      <Skeleton height="30px" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default RemoteAppSkeleton;
