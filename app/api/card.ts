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

export const postFireNum = async (
  cardId: string,
  fire: "fireUp" | "fireDown"
) => {
  const authToken = sessionStorage.getItem("authToken");
  const body = {
    cardId,
    fire,
  };
  const { data } = await apiClient.post("/quoteCard/fire", body, {
    headers: {
      Authorization: authToken,
    },
  });
  return data;
};

export const postBookmark = async (
  cardId: string,
  bookmark: "addBookmark" | "cancelBookmark"
) => {
  const authToken = sessionStorage.getItem("authToken");
  const body = {
    cardId,
    bookmark,
  };
  const { data } = await apiClient.post("/quoteCard/bookmark", body, {
    headers: {
      Authorization: authToken,
    },
  });
  return data;
};
