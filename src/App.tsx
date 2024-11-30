import { BrowserRouter, Routes, Route } from "react-router-dom";
import getRoutePage from "./helpers/routes";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const App = () => {

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-slate-200">
      <BrowserRouter>
        <Routes>
          <Route path={getRoutePage('HOME_PAGE')} element={<HomePage />} />
          <Route path={getRoutePage('SEARCH_PAGE')} element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
