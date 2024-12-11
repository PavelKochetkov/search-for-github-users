import { ReactElement } from "react";
import UsersCards from "../components/UsersCards";

const UsersPage = (): ReactElement => {
  return (
    <div className="flex gap-5 m-10 justify-center flex-wrap">
      <UsersCards />
    </div>
  );
};

export default UsersPage;
