import { ReactElement } from "react";
import SearhForm from "../components/SearchForm";
import UsersCards from "../components/UsersCards";

const SearchPage = (): ReactElement => {
  return (
    <main className="flex justify-center flex-col items-center h-screen text-white">
      <SearhForm />
      <UsersCards />
    </main>
  );
};

export default SearchPage;