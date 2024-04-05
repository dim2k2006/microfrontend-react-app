import React from 'react';
import styled from 'styled-components';
import Heading from '@microfrontend-react-app/ui/components/heading';
import Skeleton from '@microfrontend-react-app/ui/components/skeleton';
import ErrorMessage from '@microfrontend-react-app/ui/components/error-message';
import UserCard from '@microfrontend-react-app/ui/components/user-card';
import {
  useUsers,
  useRemoveUser,
} from '@microfrontend-react-app/users-service-provider';

function UsersList() {
  const usersFetchingState = useUsers();

  const userRemovingState = useRemoveUser();

  function onRemoveUser(userId: string) {
    userRemovingState.mutate(userId);
  }

  return (
    <Container>
      <Header>
        <Heading type="h1" title="Users list" />
      </Header>

      <Content>
        {usersFetchingState.isLoading && (
          <SkeletonContainer>
            <SkeletonItem>
              <Skeleton count={5} />
            </SkeletonItem>

            <SkeletonItem>
              <Skeleton count={5} />
            </SkeletonItem>

            <SkeletonItem>
              <Skeleton count={5} />
            </SkeletonItem>

            <SkeletonItem>
              <Skeleton count={5} />
            </SkeletonItem>
          </SkeletonContainer>
        )}

        {usersFetchingState.isSuccess && (
          <>
            {usersFetchingState.data.length === 0 && (
              <NoResults>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M83.19,174.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2,8,8,0,0,0,83.19,174.4ZM112,112a24,24,0,1,1,24,24A24,24,0,0,1,112,112Zm96-88H64A16,16,0,0,0,48,40V64H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V40A16,16,0,0,0,208,24Zm0,192H64V40H208Z"></path>
                </svg>
                No users found. Let's create one!
              </NoResults>
            )}

            {usersFetchingState.data.length > 0 && (
              <List>
                {usersFetchingState.data.map((user) => (
                  <ListItem key={user.id}>
                    <UserCard
                      name={user.name}
                      email={user.email}
                      age={user.age}
                      onRemove={() => onRemoveUser(user.id)}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </>
        )}

        {usersFetchingState.isError && (
          <ErrorMessage message="Failed to get users list. Please try again." />
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div``;

const SkeletonContainer = styled.div``;

const SkeletonItem = styled.div`
  margin-bottom: 20px;
`;

const NoResults = styled.div`
  svg {
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
  }

  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li``;

export default UsersList;
