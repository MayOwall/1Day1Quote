import styled from "@emotion/styled";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 1px;
  flex: 1;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  div {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      object-fit: contain;
    }
  }
`;

export const CardComment = styled.div`
  color: var(--color3);
  font: var(--font-light16);
`;

export const MeatballContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
`;

interface MeatballProps {
  isSelected: boolean;
}

export const Meatball = styled.span<MeatballProps>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-main)" : "var(--color2)"};
`;
