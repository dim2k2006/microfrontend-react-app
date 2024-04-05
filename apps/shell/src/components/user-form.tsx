import React from 'react';
import styled from 'styled-components';
import RemoteAppSkeleton from './remote-app-skeleton';

const UserForm = React.lazy(() => import('user-form/Module'));

function UserFormContainer() {
  return (
    <Container>
      <React.Suspense fallback={<RemoteAppSkeleton />}>
        <UserForm />
      </React.Suspense>
    </Container>
  );
}

const Container = styled.div``;

export default UserFormContainer;
