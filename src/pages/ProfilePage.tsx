import { ReactElement } from "react";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () : ReactElement => {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-80 mx-auto items-center text-center justify-center bg-slate-200 shadow-lg rounded-lg">
        <ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
