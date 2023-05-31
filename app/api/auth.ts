import apiClient from "./apiClient";

interface dataProps {
  userId: string | number;
  userName: string;
  userImageURL: string;
}

export const postLogin = async (loginData: dataProps) => {
  const { data } = await apiClient.post("/login", loginData);
  return data;
};

export const getProfile = async (userId: string) => {
  const { data } = await apiClient.get(`/profile/${userId}`);
  return data;
};
