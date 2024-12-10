import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getRoutePage from "./helpers/routes";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";

const App = (): ReactElement => {

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={getRoutePage('HOME_PAGE')} element={<HomePage />} />
          <Route path={getRoutePage('SEARCH_PAGE')} element={<SearchPage />} />
          <Route path={getRoutePage('PROFILE_PAGE')} element={<ProfilePage />}/>
          <Route path={getRoutePage('NOT_FOUND_PAGE')} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
