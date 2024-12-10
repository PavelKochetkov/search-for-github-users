import { ReactElement } from "react";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () : ReactElement => {

  return (
    <div className="flex flex-col m-56 w-80 mx-auto items-center justify-center bg-slate-200 shadow-lg rounded-lg">
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
