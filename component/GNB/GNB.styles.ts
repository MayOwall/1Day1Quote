import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem 0.75rem;
  background-color: var(--color0);

  * {
    color: var(--color-main);
  }

  button {
    border: none;
    background: none;
    font: var(--font-light16);
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
`;
