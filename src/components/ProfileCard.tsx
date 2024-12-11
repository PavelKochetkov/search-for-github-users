import { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useUsersDataStore } from "../store/usersStore";
import { Link, useParams } from "react-router-dom";

const ProfileCard = () : ReactElement => {
  const { t } = useTranslation();
  const params = useParams<{ login: string }>();
  const {
    getUserByLogin,
    name,
    company,
    location,
    public_repos,
    followers,
    following,
    avatar_url,
    html_url,
  } = useUsersDataStore();

  useEffect(() => {
    getUserByLogin(params.login)
      .then((data) => data);
  }, [params.login, getUserByLogin]);


  return (
    <>
      <div className="flex items-center p-4">
        <img 
          className="w-32 h-32 rounded-full border border-gray-300"
          src={avatar_url}
          alt={name}
        />
        <div className="ml-4 text-xl">
          <h2 className="font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{company}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <div className="p-4 border-t text-xl">
        <p className="text-gray-600">{t('profilePage.numberOfRepo')}: {public_repos}</p>
        <p className="text-gray-600">{t('profilePage.numberOfSubscribers')}: {followers}</p>
        <p className="text-gray-600">{t('profilePage.numberOfSubscriptions')}: {following}</p>
      </div>
      <div className="p-4">
        <Link
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          to={html_url!}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('profilePage.viewProfile')}
        </Link>
      </div>
    </>
  );
};

export default ProfileCard;
