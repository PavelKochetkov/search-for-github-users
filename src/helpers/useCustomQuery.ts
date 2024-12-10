import { useQuery } from "@tanstack/react-query";
import { useUsersStore } from "../store/usersStore";

export const useCustomQuery = (values: { nickname: string}) => {
  const { getUsersData } = useUsersStore();  
  const query = useQuery({
    queryKey: ['users', values],
    queryFn: () => getUsersData(values),
  });

  console.log(query);

  return query;
};
