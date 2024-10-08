import styled from "styled-components";

export const Container = styled.div`
 
`
export const Content = styled.div`
  padding: 200px 123px 0;
  overflow-y: scroll;
  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > h1 {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-left: 30px;
    }
  }
  > span {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
  > p {
    margin-top: 20px;
    margin-bottom: 60px;
    text-align: justify;
  }
`
export const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`