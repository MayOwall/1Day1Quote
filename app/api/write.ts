import apiClient from "./apiClient";
import { ICreateQuoteCardData } from "@/type";

export const postImage = async (image: FormData) => {
  const { data } = await apiClient.post("/image/upload", image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const postQuoteCard = async (quoteCardData: ICreateQuoteCardData) => {
  const { data } = await apiClient.post("/quoteCard/create", quoteCardData);
  return data;
};
