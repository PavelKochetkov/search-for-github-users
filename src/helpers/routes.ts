import IRoutePages from "../models/IRoutePages";

const PAGE_ROUTES: IRoutePages = {
  HOME_PAGE: '/',
  SEARCH_PAGE: '/search',
  USERS_PAGE: '/search/users',
  PROFILE_PAGE: '/search/users/profile/:login',
  NOT_FOUND_PAGE: '*',
};

const getRoutePage = (route: keyof IRoutePages): string => PAGE_ROUTES[route];

export default getRoutePage;
