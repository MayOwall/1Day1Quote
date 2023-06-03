import apiClient from "./apiClient";

const getCardList = async (pageNum: number) => {
  const { data } = await apiClient.get(`/quoteCard/list?page=${pageNum}`);
  return data;
};
