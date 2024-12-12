import { UsersData } from "./UsersDataType";

export type UsersSearchResponse = {
    total_count: number,
    items: UsersData[],
    isLoading: boolean,
    isData: boolean,
};