import { ReactElement, useEffect } from "react";
import { useUsersDataStore } from "../store/usersStore";
import { Link, useParams } from "react-router-dom";

const ProfileCard = () : ReactElement => {
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
      <div className="p-4">
        <img src={avatar_url} alt={name} className="w-32 h-32 rounded-full border border-gray-300" />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{company}</p>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="text-gray-600">Public Repos: {public_repos}</p>
        <p className="text-gray-600">Followers: {followers}</p>
        <p className="text-gray-600">Following: {following}</p>
      </div>
      <div className="p-4">
        <Link
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          to={html_url!}
          target="_blank"
          rel="noopener noreferrer"
        >
          Посмотреть профиль
        </Link>
      </div>
    </>
  );
};

export default ProfileCard;
