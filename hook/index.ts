export const saveImageFormData = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  try {
    return "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=http://t1.daumcdn.net/news/201503/06/ned/20150306160815069.jpeg";
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
