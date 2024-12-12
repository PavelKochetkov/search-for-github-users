import axios from 'axios';
import { UsersSearchResponse } from '../types/UserSearchResponseType';
import { UsersActionData } from '../types/UsersActionsResponse';
import { create, StateCreator } from 'zustand';
import { UsersData } from '../types/UsersDataType';
import { UserActionByLogin } from '../types/UserActionsByLogin';

const BASE_URL = 'https://api.github.com';
const usersSliceResponse: StateCreator<UsersSearchResponse & UsersActionData> = (set) => ({
  isData: false,
  total_count: 0,
  items: [],
  isLoading: false,
  
  getUsersData: async (values: { nickname: string }): Promise<UsersSearchResponse> => {
    const query = values.nickname;
    const response = await axios.get<UsersSearchResponse>(`${BASE_URL}/search/users`, {
      params: { q: query, per_page: 16 }
    });
    
    set({
      isData: true,
      total_count: response.data.total_count,
      items: response.data.items,
      isLoading: true,
    });

    return response.data;
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
    const response = await axios.get<UsersData>(`${BASE_URL}/users/${loginName}`);
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
    } = response.data;
    
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

    return response.data;
  },
});

export const useUsersStore = create<UsersSearchResponse & UsersActionData>(usersSliceResponse);
export const useUsersDataStore = create<UsersData & UserActionByLogin>(userSliceData);
