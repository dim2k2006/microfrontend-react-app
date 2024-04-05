import localforage from 'localforage';
import { v4 as uuidV4 } from 'uuid';
import {
  UsersRepositoryInterface,
  CreateUserInput,
  User,
} from './users-repository-interface';

class UsersRepository implements UsersRepositoryInterface {
  async createUser(input: CreateUserInput) {
    const id = uuidV4();

    const user: User = { id, ...input };

    const users = await this.getUsers();

    const updatedUsers = [...users, user];

    await localforage.setItem('users', JSON.stringify(updatedUsers));

    return user;
  }

  async getUsers() {
    try {
      const response = await localforage.getItem('users');

      if (typeof response !== 'string') {
        return [];
      }

      const users = JSON.parse(response) as User[];

      return users;
    } catch (error) {
      return [];
    }
  }

  async removeUser(id: string) {
    const users = await this.getUsers();

    const updatedUsers = users.filter((user) => user.id !== id);

    await localforage.setItem('users', JSON.stringify(updatedUsers));
  }
}

export default UsersRepository;
