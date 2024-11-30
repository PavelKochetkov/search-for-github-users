import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getRoutePage from "./helpers/routes";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";

const App = (): ReactElement => {

  return (
    <div className="h-screen bg-slate-200 flex flex-col">
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path={getRoutePage('HOME_PAGE')} element={<HomePage />} />
          <Route path={getRoutePage('SEARCH_PAGE')} element={<SearchPage />} />
          <Route path={getRoutePage('NOT_FOUND_PAGE')} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
