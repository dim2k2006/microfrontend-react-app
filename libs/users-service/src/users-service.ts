import { UsersServiceInterface } from './users-service-interface';
import {
  UsersRepositoryInterface,
  CreateUserInput,
} from '@microfrontend-react-app/users-repository';

type ConstructorProps = {
  usersRepository: UsersRepositoryInterface;
};

class UsersService implements UsersServiceInterface {
  private usersRepository: UsersRepositoryInterface;

  constructor({ usersRepository }: ConstructorProps) {
    this.usersRepository = usersRepository;
  }

  async getUsers() {
    return this.usersRepository.getUsers();
  }

  async createUser(input: CreateUserInput) {
    return this.usersRepository.createUser(input);
  }

  async removeUser(id: string) {
    return this.usersRepository.removeUser(id);
  }
}

export default UsersService;
