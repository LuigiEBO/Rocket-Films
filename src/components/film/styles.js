import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 123px;
  margin-bottom: 25px;
`

export const Text = styled.div`
  padding: 32px;
  border-radius: 10px;
  background-color: rgba(255, 133, 155, 0.1);
  > h2 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > svg {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > p {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
    opacity: 1;
  }
`
export const Tags = styled.div`
display: flex;
gap: 10px;
`