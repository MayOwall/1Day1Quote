import apiClient from "./apiClient";

const getCardList = async (page: number) => {
  const { data } = await apiClient.get(`/card/list?page=${page}`);
  return data;
};
