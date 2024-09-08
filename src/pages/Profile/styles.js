import styled from "styled-components";

export const Container = styled.div`
  > header {
    width: 100%;
    height: 115px;
    background-color: rgba(255, 133, 155, 0.1);
    display: flex;
    align-items: center;
    svg {
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 40px;
      margin-left: 123px;
    }
  }
`
export const Form = styled.form`
max-width: 340px;
margin: -80px auto 32px;
 > div:nth-child(3) {
  margin-top: 24px;
 }
`
export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;
  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50px;
  }
  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    > input {
      display: none;
    }
    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`