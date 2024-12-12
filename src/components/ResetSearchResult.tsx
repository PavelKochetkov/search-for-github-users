import { ReactElement } from "react";
import { useUsersStore } from "../store/usersStore";
import { useTranslation } from "react-i18next";
import arrowReset from '../assets/icons/arrowreset.svg';

const ResetSearchResult = (): ReactElement => {
  const { resetSearchResult } = useUsersStore();
  const { t } = useTranslation();

  return (
    <button
      className="text-white group flex items-center mt-5 ml-5 px-4 py-2 font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-200"
      onClick={resetSearchResult}
    >
      <img
        className="mr-1 w-6 transform transition duration-200 ease-in-out group-hover:rotate-180" 
        src={arrowReset} 
        alt="arrowreset" 
      />    
      {t('usersPage.resetSearchResult')}
    </button>
  );
};

export default ResetSearchResult;
