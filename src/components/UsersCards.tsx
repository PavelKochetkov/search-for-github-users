import { NavLink } from "react-router-dom";
import { useUsersStore } from "../store/usersStore";

const UsersCards = () => {
  const { items } = useUsersStore();
  
  return (
    <div className="flex gap-5 m-10 justify-center flex-wrap">
      {items.length > 0 && items.map((item) => (
        <div className="flex flex-col justify-center items-center flex-wrap bg-slate-400/30 shadow-lg rounded-xl" key={item.id}>
          <img className="w-40 rounded-full m-5" src={item.avatar_url} alt={item.login} />
          <div className="font-bold font-mono">
            <div className="text-center text-lg m-2 text-white">{item.login}</div>
          </div>
          <NavLink
            className="text-center m-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            to={'users/profile/' + item.login}
            rel="noreferrer"
          >
            Подробнее
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default UsersCards;