// Round Button
interface IRoundButtonProps {
  isSelected: boolean;
  children: string;
  handleSelect: (v: boolean) => void;
}

/*--QuoteCard--*/
// QuoteCard의 유저 데이터 타입
interface IQuoteCardUserData {
  id: string;
  name: string;
  imageURL: string;
}

// QuoteCard의 콘텐츠 데이터 타입
interface IQuoteCardContentData {
  id: string;
  date: string;
  imageURL: string;
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

// QuoteCard의 헤더 타입
interface ICQuoteCardHeaderProps {
  userData: IQuoteCardUserData;
  handleDelete: () => void;
}

// QuoteCard의 바디 타입
interface IQuoteCardBodyProps {
  contentData: IQuoteCardContentData;
  handleFire: () => void;
  handleBookmark: () => void;
}

// handleCardData
type ThandleCardData = (
  type: "fire" | "bookmark" | "delete",
  cardId: string
) => void;

// QuoteCard의 프롭 타입
interface IQuoteCardProps {
  cardData: IQuoteCardData;
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

interface ICardListProps {
  cardListData: IQuoteCardData[];
  handleCardData: ThandleCardData;
}

type TBtn = "최신순" | "역대 최고 인기";

interface IHomeBtnListProps {
  btnListData: {
    btnList: TBtn[];
    selectedBtn: TBtn;
    handleSelectedBtn: (selectedBtn: TBtn) => void;
  };
}

interface IHomeTemplateProps extends IHomeBtnListProps {
  isLoading: boolean;
  isLast: boolean;
  cardListData: IQuoteCardData[];
  handleCardData: THandleCardData;
}

interface IWriteTemplateProps {
  cardListData: IQuoteCardData[];
  handleCardData: ThandleCardData;
}

interface IProfileCardData {
  userData: {
    id: string;
    name: string;
    introduce: string;
    imageURL: string;
  };
  userActData: {
    quoteCount: number;
    bookmarkCount: number;
  };
}
interface IProfileCardProps {
  profileData: IProfileCardData;
}

interface IProfileBtnListProps {
  selectedType: "write" | "bookmark";
  handleSelectedType: () => void;
}

interface IProfileTemplateProps extends IProfileBtnListProps {
  profileData: IProfileCardData;
  cardListData: IQuoteCardData[];
  handleCardData: ThandleCardData;
}

interface IHomePageCardListData {
  data: {
    isLast: boolean;
    cardListData: IQuoteCardData[];
  };
}
export {
  IRoundButtonProps,
  IQuoteCardData,
  IQuoteCardHeaderProps,
  IQuoteCardBodyProps,
  IQuoteCardProps,
  ICreateQuoteCardData,
  ICardListProps,
  IHomeBtnListProps,
  IHomeTemplateProps,
  IQuoteFormProps,
  IWriteTemplateProps,
  TBtn,
  IProfileCardProps,
  IProfileBtnListProps,
  IProfileTemplateProps,
  IHomePageCardListData,
  IProfileCardData,
};
