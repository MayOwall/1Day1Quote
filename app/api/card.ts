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
  const authToken = sessionStorage.getItem("authToken");
  if (!authToken) return { success: false, reason: "unvalid token" };

  const { data } = await apiClient.post("/quoteCard/create", quoteCardData, {
    headers: {
      Authorization: authToken,
    },
  });
  return data;
};

export const postFireNum = async (
  cardId: string,
  fire: "fireUp" | "fireDown"
) => {
  const authToken = sessionStorage.getItem("authToken");
  if (!authToken) return { success: false, reason: "unvalid token" };
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
  if (!authToken) return { success: false, reason: "unvalid token" };
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

export const deleteQuoteCard = async (cardId: string) => {
  const authToken = sessionStorage.getItem("authToken");
  if (!authToken) return { success: false, reason: "unvalid token" };
  const { data } = await apiClient.delete("/quoteCard/delete", {
    headers: {
      Authorization: authToken,
    },
    data: {
      cardId,
    },
  });
  return data;
};
