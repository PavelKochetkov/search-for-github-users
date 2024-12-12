/* eslint-disable no-unused-vars */
import { UsersSearchResponse } from "./UserSearchResponseType";

export type UsersActionData = {
  getUsersData: (values: { nickname: string }) => Promise<UsersSearchResponse>,
  resetSearchResult: () => void,
};