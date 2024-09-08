import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 115px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-bottom: 0.5px solid #999591;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 123px; 
    > h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      padding-left: 123px;
      cursor: pointer;
    }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-right: 123px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: right;
  > div {
    display: flex;
    flex-direction: column;

    > span {
      width: 110px;
    }

    > strong {
      color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
      cursor: pointer;
    }
  }
  > img {
    display: flex;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
  }
`