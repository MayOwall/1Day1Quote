import styled from "@emotion/styled";

export const Container = styled.form`
  width: 100%;
  > div {
    width: 100%;
    padding: 2rem 1rem;
    background-color: var(--color0);
    border-radius: 10px;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: var(--color4);
  font: var(--font-bold16);
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  margin: 0.5rem 0 1.5rem;
  border-radius: 5px;
  border: none;
  background-color: var(--color1);
  font: var(--font-light16);
  color: var(--color4);
  padding: 0 0.25rem;

  &[type="file"] {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div:last-of-type {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ImagePreview = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background-color: var(--color1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  small {
    font: var(--font-light12);
    color: var(--color2);
  }
`;

export const ImageBtn = styled.button`
  width: fit-content;
  color: var(--color-main);
  background: none;
  padding: 0;
  border: none;
  font: var(--font-light16);
  cursor: pointer;
`;

export const ImageDelBtn = styled.button`
  width: fit-content;
  color: var(--color2);
  background: none;
  padding: 0;
  border: none;
  font: var(--font-light16);
  cursor: pointer;
  margin-left: 0.5rem;
`;

interface ISubmitBtn {
  isSubmitAble: boolean;
}
export const SubmitBtn = styled.button<ISubmitBtn>`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  color: var(--color0);
  background-color: ${({ isSubmitAble }) =>
    isSubmitAble ? "var(--color-main)" : "var(--color2)"};
  border: none;
  border-radius: 10px;
  font: var(--font-light16);
  cursor: pointer;
`;
