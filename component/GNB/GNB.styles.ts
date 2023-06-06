import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - 200px);
  width: 400px;
  @media (max-width: 430px) {
    width: 100%;
    left: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--color0);
  z-index: 1;

  * {
    color: var(--color-main);
  }

  button {
    border: none;
    background: none;
    font: var(--font-light16);
    font-size: 14px;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  span {
    font: var(--font-bold16);
  }
`;

export const LoginBtn = styled.button``;
export const LogoutBtn = styled.button`
  color: var(--color2);
  opacity: 50%;
`;
