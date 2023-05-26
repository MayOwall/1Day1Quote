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

interface ICommunityCardHeaderProps {
  userData: {
    _id: string;
    name: string;
    portrait: string;
  };
}

interface ICommunityCardBodyProps {
  bodyData: {
    contentData: {
      _id: string;
      date: string;
      image?: string;
      quote: string;
      speaker: string;
      isFired: boolean;
      fireCount: number;
      isBookMarked: boolean;
    };
    handleFire: (_id: string) => void;
    handleBookmark: (_id: string) => void;
  };
}

interface ICommunityCardProps
  extends ICommunityCardHeaderProps,
    ICommunityCardBodyProps {}

interface ICommunityTemplateProps extends ICommunityBtnListProps {
  cardListData: ICommunityCardProps[];
}

export {
  IGNBProps,
  IRoundButtonProps,
  ICommunityCardHeaderProps,
  ICommunityCardBodyProps,
  ICommunityCardProps,
  ICommunityBtnListProps,
  ICommunityTemplateProps,
};
