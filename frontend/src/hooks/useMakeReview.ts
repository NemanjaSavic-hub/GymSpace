import axios from "axios";
import type { Review } from "../models/Review";
import { DEV_BASE_URL } from "../constants/constants";
import { useMutation } from "react-query";

type MakeReviewRequest = {
  userId: number,
  gymId: number,
  text: string,
  rate: number
};

const makeReview = async ({userId, gymId, text, rate}: MakeReviewRequest): Promise<Review> => {
  const res = await axios.post<Review>(`${DEV_BASE_URL}/review/user/${userId}/gym/${gymId}`, {text, rate},
    {
        auth: {
            username: "savic.nemanja.biz@gmail.com",
            password: "cone123"
        }
    }
);
  return res.data;
};

export const useMakeReview = () => {
  return useMutation({
    mutationFn: makeReview,
    onError: (error) => {console.log(error)}
  });
}