import IRoutePages from "../models/IRoutePages";

const PAGE_ROUTES: IRoutePages = {
  HOME_PAGE: '/',
  SEARCH_PAGE: '/search',
};

const getRoutePage = (route: keyof IRoutePages): string => PAGE_ROUTES[route];

export default getRoutePage;
