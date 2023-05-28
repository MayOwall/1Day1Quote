import styled from "@emotion/styled";

export const Container = styled.form`
  > div {
    width: 100%;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    border-radius: 10px;
    background-color: var(--color0);
    font: var(--font-light16);
  }
`;

export const Date = styled.span`
  color: var(--color2);
  font: inherit;
`;

export const ImageBtn = styled.button`
  width: fit-content;
  color: var(--color-main);
  background: none;
  padding: 0;
  border: none;
  font: inherit;
  cursor: pointer;
`;

export const ImageDelBtn = styled.button`
  width: fit-content;
  color: var(--color2);
  background: none;
  padding: 0;
  border: none;
  font: inherit;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.div`
  width: 100%;
  aspect-ratio: 2 / 1;
  position: relative;

  img {
    object-fit: cover;
  }
`;

interface IQuoteHeightProps {
  height: number;
}
export const QuoteInput = styled.textarea<IQuoteHeightProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  border: none;
  font: var(--font-bold20);
  resize: none;
  outline: none;
  word-break: break-all;
`;

export const DummyQuote = styled.div`
  width: calc(100% - 2rem);
  min-height: 2rem;
  border: 1px solid;
  font: var(--font-bold20);
  visibility: hidden;
  position: absolute;
  word-break: break-all;
`;

export const SpeakerInput = styled.input`
  width: 100%;
  border: none;
  color: var(--color2);
  font: inherit;
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
