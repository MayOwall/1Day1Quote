import { TBtn } from "@/type";
import apiClient from "./apiClient";

export const getCardList = async (type: TBtn, pageNum: number) => {
  const token = sessionStorage.getItem("authToken");
  const { data } = await apiClient.get(
    `/quoteCard/list?sort=${type}&page=${pageNum}`,
    {
      headers: {
        Authorization: token || null,
      },
    }
  );
  return data;
};
