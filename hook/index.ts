import { postImage } from "@/api";

export const saveImageFormData = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  try {
    let formData = new FormData();
    if (e.target.files) {
      formData.append("image", e.target.files[0]);
      const { result, data } = await postImage(formData);
      if (!result) throw new Error();
      return data.imageURL;
    } else {
      return "error";
    }
  } catch (e) {
    return "error";
  }
};

export const DateFormatter = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const today = date.getDate();
  return `${year}.${month}.${today}`;
};

export const CardIdFormatter = () => {
  return `${new Date().getDate()}${Math.random()}`;
};
