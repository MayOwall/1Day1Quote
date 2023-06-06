import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Upper = styled.div`
  width: 100%;
  height: 1px;
  flex: 1;
`;

export const Bottom = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  background-color: var(--color0);

  p {
    margin-bottom: 1rem;
    color: var(--color3);
    font: var(--font-light16);
  }
`;

export const Logo = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-main);
  font: var(--font-bold24);
`;

export const KakaoBtn = styled.button`
  padding: 0.9rem 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #000000;
  border: none;
  border-radius: 0.75rem;
  background-color: #fee500;
  font: var(--font-light16);
  font-weight: 400;
  cursor: pointer;

  img {
    position: relative;
    top: 1px;
  }
`;
