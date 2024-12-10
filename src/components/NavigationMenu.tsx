import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getRoutePage from "../helpers/routes";
import menuLogo from '../assets/icons/logomenu.svg';

const NavigationMenu = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink
        className="text-white"
        to={getRoutePage('HOME_PAGE')}>
        {t('navigation.title')}
      </NavLink>
      <img src={menuLogo} alt={t('navigation.alt')} />
      <nav className="block w-auto">
        <ul className="font-medium flex p-0 mt-0 space-x-8">
          <li>
            <NavLink
              className="block text-white hover:text-slate-500 transition duration-300 [&.active]:text-slate-500"
              to={getRoutePage('HOME_PAGE')}>
              {t('navigation.home')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="block text-white hover:text-slate-500 transition duration-300  [&.active]:text-slate-500"
              to={getRoutePage("SEARCH_PAGE")}>
              {t('navigation.search')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;