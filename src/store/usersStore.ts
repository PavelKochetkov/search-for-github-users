import axios, { AxiosError } from 'axios';
import { UsersSearchResponse } from '../types/UserSearchResponseType';
import { UsersActionData } from '../types/UsersActionsResponse';
import { create, StateCreator } from 'zustand';
import { UsersData } from '../types/UsersDataType';
import { UserActionByLogin } from '../types/UserActionsByLogin';

const BASE_URL = 'https://api.github.com';
const usersSliceResponse: StateCreator<UsersSearchResponse & UsersActionData> = (set, get) => ({
  isData: false,
  total_count: 0,
  items: [],
  isLoading: false,
  per_page: 10,
  page: 1,
  nickname: { nickname: '' },
  totalPages: 0,
  currentPage: 1,
  currentPerPage: 10,
  error: null,
  
  getUsersData: async (values: { nickname: string }, page: number, per_page: number): Promise<UsersSearchResponse | undefined> => {
    const query = values.nickname;

    try {
      const { data } = await axios.get<UsersSearchResponse>(`${BASE_URL}/search/users`, {
        params: { q: query, page, per_page, sort: 'repositories' }
      });
      const { total_count } = get();
      
      set({
        isData: true,
        total_count: data.total_count <= 1000 ? data.total_count : 1000,
        items: data.items,
        isLoading: true,
        nickname: values,
        totalPages: Math.ceil(total_count / per_page),
        error: null,
      });
  
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        set({ error: error.code });
      }
    }
  },

  setSwitchForward: (numberPage) => {
    const { currentPage, currentPerPage } = get();
    
    set({
      page: numberPage + 1,
      currentPage: currentPage + 10,
      currentPerPage: currentPerPage + 10
    });
  },

  setSwitchBack: (numberPage) => {
    const { currentPage, currentPerPage } = get();
    
    set({
      page: numberPage - 1,
      currentPage: currentPage - 10,
      currentPerPage: currentPerPage - 10
    });
  },

  resetSearchResult: () => {
    set({
      isData: false,
      total_count: 0,
      items: [],
      isLoading: false,
      per_page: 10,
      page: 1,
      nickname: { nickname: '' },
      totalPages: 0,
      currentPage: 1,
      currentPerPage: 10,
      error: null,
    });
  },
});

const userSliceData: StateCreator<UsersData & UserActionByLogin> = (set) => ({
  login: undefined,
  avatar_url: undefined,
  id: undefined,
  url: undefined,
  name: undefined,
  public_repos: undefined,
  followers: undefined,
  company: undefined,
  location: undefined,
  following: undefined,
  html_url:undefined,
  
  getUserByLogin: async (loginName: string | undefined): Promise<UsersData> => {
    const { data } = await axios.get<UsersData>(`${BASE_URL}/users/${loginName}`);
    const {
      login,
      avatar_url,
      id,
      url,
      name,
      public_repos,
      followers,
      company,
      location,
      following,
      html_url,
    } = data;
    
    set({
      login,
      avatar_url,
      id,
      url,
      name,
      public_repos,
      followers,
      company,
      location,
      following,
      html_url,
    });

    return data;
  },
});

export const useUsersStore = create<UsersSearchResponse & UsersActionData>(usersSliceResponse);
export const useUsersDataStore = create<UsersData & UserActionByLogin>(userSliceData);
