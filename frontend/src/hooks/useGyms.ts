import axios from "axios";
import type { GymResponse } from "../models/GymResponse";
import { DEV_BASE_URL } from "../constants/constants";
import { useInfiniteQuery } from "react-query";

interface GymQuery {
    pageSize: number
}

const getGyms = async (page: number = 0, pageSize: number = 20): Promise<GymResponse> => {
  const res = await axios.get<GymResponse>(`${DEV_BASE_URL}/gyms`, {
    headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`
    },
    params: {page, pageSize},
},);
  return res.data;
};

export const useGyms = (query: GymQuery) => {
  return useInfiniteQuery<GymResponse, Error>({
    queryKey: ['gyms'],
    queryFn: ({pageParam}) => getGyms(pageParam, query.pageSize),
    staleTime: 2 * 60 * 1000, //2 min
    // keepPreviousData: true,
    getNextPageParam: (lastPage, _allPages) => {
        if(lastPage.page.number + 1 < lastPage.page.totalPages){
            return lastPage.page.number + 1;
        }
        return undefined
    }
  });
}