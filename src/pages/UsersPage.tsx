import { ReactElement } from "react";
import UsersCards from "../components/UsersCards";
import ResetSearchResult from "../components/ResetSearchResult";
import Pagination from "../components/Pagination";

const UsersPage = (): ReactElement => {
  return (
    <>
      <div className="flex flex-col items-start">
        <ResetSearchResult />
      </div>
      <div className="flex gap-5 m-8 justify-center flex-wrap">
        <UsersCards />
      </div>
      <Pagination />
    </>
  );
};

export default UsersPage;
