/* eslint-disable no-unused-vars */
import { UsersSearchResponse } from "./UserSearchResponseType";

export type UsersActionData = {
  getUsersData: (values: { nickname: string }, page: number, per_page: number) => Promise<UsersSearchResponse>,
  resetSearchResult: () => void,
  setSwitchForward: (numberPage: number) => void,
  setSwitchBack: (numberPage: number) => void,
};