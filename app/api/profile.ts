import apiClient from "./apiClient";

interface INewProfile {
  name: string;
  introduce: string;
  imageURL: string;
}

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

export const editProfile = async (newProfile: INewProfile) => {
  const token = sessionStorage.getItem("authToken");
  if (!token) return { success: false, reason: "unvalid token" };

  const { data } = await apiClient.post("/profile/edit", newProfile, {
    headers: {
      Authorization: token,
    },
  });

  return data;
};
