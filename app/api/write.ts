import apiClient from "./apiClient";

export const postImage = async (image: FormData) => {
  const { data } = await apiClient.post("/image/upload", image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

interface ICreateQuoteCardData {
  token: string;
  cardData: {
    _id: string;
    date: string;
    quote: string;
    speaker: string;
    imageURL: string;
  };
}

export const postQuoteCard = async (quoteCardData: ICreateQuoteCardData) => {
  const { data } = await apiClient.post("/quoteCard/create", quoteCardData);
  return data;
};
