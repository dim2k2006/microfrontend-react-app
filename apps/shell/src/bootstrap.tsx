import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '@microfrontend-react-app/ui/theme';
import 'normalize.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { UsersRepository } from '@microfrontend-react-app/users-repository';
import { UsersService } from '@microfrontend-react-app/users-service';
import { UsersServiceProvider } from '@microfrontend-react-app/users-service-provider';
import routes from './routes';

import App from './components/app';
import UserForm from './components/user-form';
import UsersList from './components/users-list';
import SplitView from './components/split-view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const MyGlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, serif;
    background-color: ${(props) => props.theme.colors.alabaster};
  }
`;

const queryClient = new QueryClient();

const usersRepository = new UsersRepository();

const usersService = new UsersService({ usersRepository });

root.render(
  <StrictMode>
    <UsersServiceProvider service={usersService}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MyGlobalStyle />

            <App>
              <Routes>
                <Route path={routes.createUserPage()} element={<UserForm />} />

                <Route path={routes.usersPage()} element={<UsersList />} />

                <Route
                  path={routes.splitViewPage()}
                  element={
                    <SplitView view1={<UserForm />} view2={<UsersList />} />
                  }
                />
              </Routes>
            </App>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </UsersServiceProvider>
  </StrictMode>
);
