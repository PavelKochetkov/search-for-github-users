import { Navigate } from "react-router-dom";
import { useUsersStore } from "../store/usersStore";
import { ReactElement } from "react";
import PrivateRouteProps from '../models/IPrivateRouteProps';
import getRoutePage from "../helpers/routes";

const PrivateRout = ({ element: Component }: PrivateRouteProps): ReactElement => {
  const { isData } = useUsersStore();

  return isData ? <Component /> : <Navigate to={getRoutePage('HOME_PAGE')} />;
};

export default PrivateRout;
