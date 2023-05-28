interface IGNBProps {
  isAuth: boolean;
}

interface IRoundButtonProps {
  isSelected: boolean;
  children: string;
  handleSelect: (v: boolean) => void;
}

interface ICommunityBtnListProps {
  btnListData: {
    selectedBtn: "recent" | "weekly" | "whole";
    handleSelectedBtn: (selectedBtn: "recent" | "weekly" | "whole") => void;
  };
}

/*--QuoteCard--*/
// QuoteCard의 유저 데이터 타입
interface IQuoteCardUserData {
  userId: string;
  name: string;
  profileImage: string;
}

// QuoteCard의 콘텐츠 데이터 타입
interface IQuoteCardContentData {
  cardId: string;
  date: string;
  imageURL?: string;
  quote: string;
  speaker: string;
  fireCount: number;
  isFired: boolean;
  isBookMarked: boolean;
}

// QuoteCard의 전체 데이터 타입
interface IQuoteCardData {
  userData: IQuoteCardUserData;
  contentData: IQuoteCardContentData;
}

// handleCardData
type ThandleCardData = (
  type: "add" | "fire" | "bookmark" | "delete",
  cardId?: string,
  newCardData?: {
    quote: string;
    speaker: string;
    imageURL: string;
  }
) => void;

// QuoteCard의 헤더 타입
interface ICQuoteCardHeaderProps {
  userData: IQuoteCardUserData;
  handleDelete: (_id: string) => void;
}

// QuoteCard의 바디 타입
interface IQuoteCardBodyProps {
  contentData: IQuoteCardContentData;
  handleFire: () => void;
  handleBookmark: () => void;
}

// QuoteCard의 프롭 타입
interface IQuoteCardProps {
  cardData: IQuoteCardData;
  handleCardData: ThandleCardData;
}

interface ICommunityTemplateProps extends ICommunityBtnListProps {
  cardListData: ICommunityCardProps[];
}

interface IQuoteFormProps {
  handleCardData: ThandleCardData;
}
interface IWriteTemplateProps {
  cardListData: IQuoteCardData[];
  handleCardData: ThandleCardData;
}

export {
  IGNBProps,
  IRoundButtonProps,
  IQuoteCardHeaderProps,
  IQuoteCardBodyProps,
  IQuoteCardProps,
  ICommunityBtnListProps,
  ICommunityTemplateProps,
  IQuoteFormProps,
  IWriteTemplateProps,
};
