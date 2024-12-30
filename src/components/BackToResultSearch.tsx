import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import getRoutePage from "../helpers/routes";

const BackToResultSearch = (): ReactElement => {
  const navigate = useNavigate();
  const handToResultSearch = () => {
    navigate(getRoutePage('USERS_PAGE'));
  };
  const { t } = useTranslation();

  return (
    <button
      className="px-4 py-2 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
      onClick={handToResultSearch}
    >
      {t('profilePage.backToSearch')}
    </button>
  );
};

export default BackToResultSearch;