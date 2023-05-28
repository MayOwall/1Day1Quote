import styled from "@emotion/styled";

export const Container = styled.div`
  width: calc(100% - 2rem);
  margin-top: 2rem;
  padding: 1rem 0.5rem;
  position: relative;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  div:first-of-type {
    flex: 1;
  }
`;

export const UserName = styled.h1`
  margin-bottom: 0.25rem;
  color: var(--color4);
  font: var(--font-bold16);
`;

export const UserIntroduce = styled.p`
  color: var(--color2);
  font: var(--font-light16);
`;

export const UserImage = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserActData = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
`;

export const LabelNum = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.small`
  color: var(--color2);
  font: var(--font-light12);
`;

export const Num = styled.div`
  color: var(--color4);
  font: var(--font-light16);
`;

export const ProfileEditBtn = styled.span`
  position: absolute;
  top: -1rem;
  right: 0.5rem;
  color: var(--color-main);
  font: var(--font-light12);
`;
