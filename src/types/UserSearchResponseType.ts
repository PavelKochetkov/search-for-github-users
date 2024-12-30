import { UsersData } from "./UsersDataType";

export type UsersSearchResponse = {
    total_count: number,
    items: UsersData[],
    isLoading: boolean,
    isData: boolean,
    per_page: number,
    page: number,
    nickname: { nickname: string },
    totalPages: number,
    currentPage: number,
    currentPerPage: number,
    error: string | null,
};