import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import getRoutePage from "../helpers/routes";
import menuLogo from '../assets/icons/logomenu.svg';

const NavigationMenu = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <nav className= "bg-blue-600 font-mono text-2xl shadow-lg shadow-cyan-500/50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          className="text-white"
          to={getRoutePage('HOME_PAGE')}>
          {t('navigation.title')}
        </NavLink>
        <img src={menuLogo} alt={t('navigation.alt')} />
        <div className="block w-auto">
          <ul className="font-medium flex p-0 mt-0 space-x-8">
            <li>
              <NavLink
                className="block text-white hover:text-blue-950"
                to={getRoutePage('HOME_PAGE')}>
                {t('navigation.home')}
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="block text-white hover:text-blue-950"
                to={getRoutePage("SEARCH_PAGE")}>
                {t('navigation.search')}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default NavigationMenu;