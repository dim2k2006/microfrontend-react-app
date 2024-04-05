export type CreateUserInput = {
  name: string;
  email: string;
  age: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

export interface UsersRepositoryInterface {
  createUser(input: CreateUserInput): Promise<User>;

  getUsers(): Promise<User[]>;

  removeUser(id: string): Promise<void>;
}
