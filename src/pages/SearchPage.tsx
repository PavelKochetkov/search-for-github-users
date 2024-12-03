import { ReactElement } from "react";
import SearhForm from "../components/SearchForm";

const SearchPage = (): ReactElement => {
  return (
    <main className="flex justify-center items-center h-screen text-white">
      <SearhForm />
    </main>
  );
};

export default SearchPage;