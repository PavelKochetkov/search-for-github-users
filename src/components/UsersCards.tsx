import { NavLink } from "react-router-dom";
import { useUsersStore } from "../store/usersStore";
import getRoutePage from "../helpers/routes";
import { useTranslation } from "react-i18next";
import UserNotFound from "./UserNotFound";

const UsersCards = () => {
  const { t } = useTranslation();
  const { items } = useUsersStore();
  return (
    <>
      {items.length === 0 && <UserNotFound />}
      {items.length > 0 && items.map((item) => (
        <div 
          className="flex flex-col justify-center flex-wrap bg-slate-400/30 shadow-lg rounded-xl transform transition duration-200 hover:bg-slate-800 hover:-translate-y-4 hover:shadow-blue-200"
          key={item.id}
        >
          <img 
            className="w-40 rounded-full m-5"
            src={item.avatar_url}
            alt={item.login} 
          />
          <div className="font-bold font-mono">
            <div className="text-center text-lg m-2 text-white">{item.login}</div>
          </div>
          <NavLink
            className="text-center m-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            to={getRoutePage('USERS_PAGE') + '/profile/' + item.login}
            rel="noreferrer"
          >
            {t('usersCards.moreDetails')}
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default UsersCards;