import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getRoutePage from "./helpers/routes";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavigationMenu from "./components/NavigationMenu";

const App = (): ReactElement => {

  return (
    <div className="h-screen w-full bg-slate-200">
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path={getRoutePage('HOME_PAGE')} element={<HomePage />} />
          <Route path={getRoutePage('SEARCH_PAGE')} element={<SearchPage />} />
          <Route path={getRoutePage('NOT_FOUND_PAGE')} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
