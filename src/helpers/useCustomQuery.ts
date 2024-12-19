// import { useQuery } from "@tanstack/react-query";
// import { useUsersStore } from "../store/usersStore";

// export const useCustomQuery = (values: { nickname: string}, page: number, per_page: number) => {
//   const { getUsersData } = useUsersStore();  
//   const query = useQuery({
//     queryKey: ['users', values],
//     queryFn: () => getUsersData(values, page, per_page),
//   });

//   console.log(query);

//   return query;
// };
