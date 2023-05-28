import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: var(--color0);
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  border-bottom: 1px solid var(--color1);

  > div:first-of-type {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      width: 2rem;
      height: 2rem;
      aspect-ratio: 1 / 1;
      position: relative;
      border-radius: 50%;

      img {
        border-radius: 50%;
        object-fit: cover;
      }
    }
    span {
      color: var(--color3);
      font: var(--font-light16);
    }
  }
`;

export const CardEditBtns = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  svg {
    padding: 0 0.25rem;
    cursor: pointer;
    opacity: 70%;

    :hover {
      opacity: 100%;
    }
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BodyDate = styled.small`
  color: var(--color2);
  font: var(--font-light16);
`;

export const BodyImage = styled.div`
  width: 100%;
  aspect-ratio: 2 / 1;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const BodyQuotes = styled.div`
  p {
    margin-bottom: 0.5rem;
    color: var(--color3);
    font: var(--font-bold20);
  }

  span {
    color: var(--color2);
    font: var(--font-light16);
  }
`;
export const BodyBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FireBtn = styled.div`
  display: flex;
  gap: 0.5rem;

  small {
    color: inherit;
    font: var(--font-light12);
  }
`;
