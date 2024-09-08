import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`
export const Interact = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 150px 123px 115px;

> Button {
  max-width: 250px;

  > svg {
    ${({theme}) => theme.COLORS.BLACK}
  }
}
`
export const Content = styled.div`
  overflow-y: scroll;
`