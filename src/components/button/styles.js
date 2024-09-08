import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &disabled {
    opacity: 0.5;
  }
  > svg {
    margin-right: 10px;
  }
`