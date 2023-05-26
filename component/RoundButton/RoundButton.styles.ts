import styled from "@emotion/styled";

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.375rem 0.75rem;
  color: ${({ isSelected }) =>
    isSelected ? "var(--color0)" : "var(--color2)"};
  border: ${({ isSelected }) =>
    isSelected ? "1px solid var(--color-main)" : "1px solid var(--color1)"};
  border-radius: 1rem;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-main)" : "var(--color0)"};
  cursor: pointer;
  font: var(--font-light12);
`;
