import apiClient from "./apiClient";

export const getProfile = async (userId: string) => {
  const { data } = await apiClient.get(`/profile/${userId}`);
  return data;
};

export const getUserQuoteList = async (userId: string, page: number) => {
  const { data } = await apiClient.get(
    `/profile/userQuoteList?id=${userId}&page=${page}`
  );
  return data;
};

export const getUserBookmarkList = async (userId: string, page: number) => {
  const { data } = await apiClient.get(
    `/profile/userBookmarkList?id=${userId}&page=${page}`
  );
  return data;
};
