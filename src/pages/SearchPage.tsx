import { ReactElement } from "react";
import SearchForm from "../components/SearchForm";

const SearchPage = (): ReactElement => {
  return (
    <main className="flex justify-center flex-col items-center min-h-dvh text-white">
      <SearchForm />
    </main>
  );
};

export default SearchPage;