import {
  User,
  CreateUserInput,
} from '@microfrontend-react-app/users-repository';

export interface UsersServiceInterface {
  getUsers(): Promise<User[]>;
  createUser(input: CreateUserInput): Promise<User>;
  removeUser(id: string): Promise<void>;
}
