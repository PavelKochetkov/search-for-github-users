import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import getRoutePage from "../helpers/routes";
import { useTranslation } from "react-i18next";

const HomePage = (): ReactElement => {
  const { t } = useTranslation();
  
  return (
    <main className="flex justify-center items-center h-screen text-white">
      <div className="rounded-lg shadow-lg shadow-slate-500/50 p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          {t('homePage.mainTitle')}
        </h1>
        <p className="text-lg mb-4">
          {t('homePage.description')}
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mt-6">
          {t('homePage.mainFunctions')}
        </h2>
        <ul className="list-disc list-inside mt-2 mb-4">
          <li>🔍 
            <strong>
              {' '}
              {t('homePage.searchByNameOrNicknameTitle')}
            </strong>
            {' '}
            {t('homePage.searchByNameOrNicknameDescription')}
          </li>
          <li>👤 
            <strong>
              {' '}
              {t('homePage.viewInformationTitle')}
            </strong>
            {' '}
            {t('homePage.viewInformationDescrition')}
          </li>
          <li>⚙️ 
            <strong>
              {' '}
              {t('homePage.filtrationTitle')}
            </strong>
            {' '}
            {t('homePage.filtrationDescrition')}
          </li>
        </ul>
        <div className="flex justify-center">
          <NavLink
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            to={getRoutePage('SEARCH_PAGE')}
          >
            {t('homePage.startSearching')}
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default HomePage;