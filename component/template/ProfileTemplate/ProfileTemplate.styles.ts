import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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
