import styled, { css } from 'styled-components'

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;

  p {
    margin: 1rem 0;
  }
`

export const WrapperSubItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  ${Col} {
    > img {
      width: 20rem;
    }
  }
`

export const Box = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;

    ${theme.breakpoints.lessThan.md} {
      display: flex;
      flex-direction: column;
      grid-template-columns: none;
    }
  `}
`

export const SubItem = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 2rem;
  }

  > div {
    margin: 2rem 0;

    img {
      width: 6rem;
    }

    .mug {
      width: 10rem;
    }
  }
`

export const OthersProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
