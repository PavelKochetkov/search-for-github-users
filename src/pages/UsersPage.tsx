import { ReactElement } from "react";
import UsersCards from "../components/UsersCards";
import ResetSearchResult from "../components/ResetSearchResult";

const UsersPage = (): ReactElement => {
  return (
    <div className="flex flex-col items-start">
      <ResetSearchResult />
      <div className="flex gap-5 m-10 justify-center flex-wrap">
        <UsersCards />
      </div>
    
    </div>
  );
};

export default UsersPage;
