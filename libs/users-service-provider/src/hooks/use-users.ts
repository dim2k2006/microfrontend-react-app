import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUsersService } from '../components/users-service-provider';

type UseCreateUserInput = {
  name: string;
  email: string;
  age: number;
};

export function useCreateUser() {
  const service = useUsersService();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: UseCreateUserInput) => service.createUser(input),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });
}

export function useUsers() {
  const service = useUsersService();

  return useQuery({
    queryKey: ['users'],
    queryFn: () => service.getUsers(),
  });
}

export function useRemoveUser() {
  const service = useUsersService();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => service.removeUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });
}
