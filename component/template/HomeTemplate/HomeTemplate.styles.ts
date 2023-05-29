import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Announce = styled.aside`
  width: calc(100% - 2rem);
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color0);

  p {
    color: var(--color2);
    font: var(--font-light12);
  }
`;

export const ButtonContainer = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  gap: 0.5rem;
`;

export const CardList = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
`;
