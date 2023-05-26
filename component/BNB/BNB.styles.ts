import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: calc(50% - 200px);
  width: 400px;
  @media (max-width: 430px) {
    width: 100%;
    left: 0;
  }
  padding: 0.75rem 0;
  display: flex;
  background-color: var(--color0);
  z-index: 1;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 100%;
  flex: 1;
  border: none;
  background: none;
  cursor: pointer;
`;
