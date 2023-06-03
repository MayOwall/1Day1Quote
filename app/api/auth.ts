import apiClient from "./apiClient";

interface dataProps {
  id: string | number;
  name: string;
  imageURL: string;
}

export const postLogin = async (loginData: dataProps) => {
  const { data } = await apiClient.post("/login", loginData);
  return data;
};

export const getProfile = async (userId: string) => {
  const { data } = await apiClient.get(`/profile/${userId}`);
  return data;
};
