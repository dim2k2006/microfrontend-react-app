import React from 'react';
import styled from 'styled-components';
import RemoteAppSkeleton from './remote-app-skeleton';

const UsersList = React.lazy(() => import('users-list/Module'));

function UsersListContainer() {
  return (
    <Container>
      <React.Suspense fallback={<RemoteAppSkeleton />}>
        <UsersList />
      </React.Suspense>
    </Container>
  );
}

const Container = styled.div``;

export default UsersListContainer;
