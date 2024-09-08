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
  }
  > h2 {
    margin-bottom: 20px;
  }
`
export const Inputs = styled.div`
display: flex;
gap: 20px;
margin-top: 20px;
margin-bottom: 20px;
`
export const Marcadores = styled.div`
  display: flex;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  align-items: center;
  border-radius: 10px;
  margin-bottom: 50px;
`
export const Buttons = styled.div`
display: flex;
gap: 20px;
margin-bottom: 50px;
`