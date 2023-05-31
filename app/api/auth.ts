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
