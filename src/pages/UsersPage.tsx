import { ReactElement } from "react";
import UsersCards from "../components/UsersCards";
import ResetSearchResult from "../components/ResetSearchResult";
import Pagination from "../components/Pagination";
import handleError from "../helpers/handleError";
import { useUsersStore } from "../store/usersStore";

const UsersPage = (): ReactElement => {
  const { error } = useUsersStore();
  const errorMessage = handleError(error);
  return (
    <>
      {error && <div className="text-center text-red-500 text-sm mt-2">{errorMessage}</div>}
      <div className="flex flex-col items-start">
        <ResetSearchResult />
      </div>
      <div className="flex gap-5 m-5 justify-center flex-wrap">
        <UsersCards />
      </div>
      <Pagination />
    </>
  );
};

export default UsersPage;
