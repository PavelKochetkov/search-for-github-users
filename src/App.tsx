import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getRoutePage from "./helpers/routes";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = (): ReactElement => {

  return (
    <div className="h-screen bg-slate-700 flex flex-col">
      <BrowserRouter>
        <Header />
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
