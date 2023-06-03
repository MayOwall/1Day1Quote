import { TBtn } from "@/type";
import apiClient from "./apiClient";

export const getCardList = async (type: TBtn, pageNum: number) => {
  const { data } = await apiClient.get(
    `/quoteCard/list?sort=${type}&page=${pageNum}`
  );
  return data;
};
