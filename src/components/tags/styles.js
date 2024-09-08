import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  text-align: center;
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  color: ${({ theme }) => theme.COLORS.GRAY};
`