import React, { createContext, useContext } from 'react';
import { UsersServiceInterface } from '@microfrontend-react-app/users-service';

const UsersServiceContext = createContext<UsersServiceInterface | null>(null);

type CountriesServiceProviderProps = {
  service: UsersServiceInterface;
  children: React.ReactNode;
};

function UsersServiceProvider({
  service,
  children,
}: CountriesServiceProviderProps) {
  return (
    <UsersServiceContext.Provider value={service}>
      {children}
    </UsersServiceContext.Provider>
  );
}

export function useUsersService(): UsersServiceInterface {
  const ctx = useContext(UsersServiceContext);

  if (!ctx) {
    throw new Error(
      'Failed to retrieve UsersService. Make sure you wrap the component inside the "UsersServiceProvider".'
    );
  }

  return ctx;
}

export default UsersServiceProvider;
