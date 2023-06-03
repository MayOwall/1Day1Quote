interface IGNBProps {
  isAuth: boolean;
}

interface IRoundButtonProps {
  isSelected: boolean;
  children: string;
  handleSelect: (v: boolean) => void;
}

type TBtn = "최신순" | "이번주 인기" | "역대 최고 인기";

interface ICommunityBtnListProps {
  btnListData: {
    btnList: TBtn[];
    selectedBtn: TBtn;
    handleSelectedBtn: (selectedBtn: TBtn) => void;
  };
}

interface ICardListProps {
  cardListData: IQuoteCardData[];
  handleCardData: ThandleCardData;
}

interface ICommunityTemplateProps extends ICommunityBtnListProps {
  isLoading: boolean;
  isLast: boolean;
  cardListData: IQuoteCardData[];
  handleCardData: THandleCardData;
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
export interface IQuoteCardData {
  userData: IQuoteCardUserData;
  contentData: IQuoteCardContentData;
}

// handleCardData
type ThandleCardData = (
  type: "add" | "fire" | "bookmark" | "delete",
  cardId: string,
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

interface IQuoteFormProps {
  handleCardData: ThandleCardData;
}
interface IWriteTemplateProps {
  cardListData: IQuoteCardData[];
  handleCardData: ThandleCardData;
}

interface IProfileCardProps {
  userData: {
    userId: string;
    userName: string;
    userIntroduce: string;
    userImageURL: string;
  };
  userActData: {
    userQuoteNum: number;
    userBookmarkNum: number;
  };
}

interface IProfileBtnListProps {
  selectedType: "write" | "bookmark";
  handleSelectedType: () => void;
}

interface IProfileTemplateProps extends IProfileBtnListProps {
  profileData: IProfileCardProps;
  cardListData: IQuoteCardData[];
  handleCardData: ThandleCardData;
}

interface ICreateQuoteCardData {
  token: string;
  userData: {
    id: string;
    name: string;
    imageURL: string;
  };
  contentData: {
    id: string;
    date: number;
    imageURL: string;
    quote: string;
    speaker: string;
  };
}
export {
  IGNBProps,
  IRoundButtonProps,
  IQuoteCardHeaderProps,
  IQuoteCardBodyProps,
  IQuoteCardProps,
  ICommunityBtnListProps,
  ICardListProps,
  ICommunityTemplateProps,
  IQuoteFormProps,
  IWriteTemplateProps,
  TBtn,
  IProfileCardProps,
  IProfileBtnListProps,
  IProfileTemplateProps,
  ICreateQuoteCardData,
  IQuoteCardData,
};
