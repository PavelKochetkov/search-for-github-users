/* eslint-disable no-unused-vars */
import { UsersData } from "./UsersDataType";

export type UserActionByLogin = {
 getUserByLogin: (login: string | undefined) => Promise<UsersData>,
};