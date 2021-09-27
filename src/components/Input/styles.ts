import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  margin-top: 1rem;
  width: 100%;

  & + div {
    margin-top: 1rem;
  }

  .error-message {
    color: #d7182a;
    font-size: 0.8rem;
    padding-top: 0.25rem;
    text-align: left;
  }

  input {
    font-family: 'Lato', sans-serif;
    flex: 1;
    background: transparent;
    border: 0;
    color: #585858;
    height: 48px;
    font-size: 0.75rem;
    font-weight: 700;
    border: 0;
    padding: 0 1rem;
    border-radius: 5px;
    background: #fff;
    width: 100%;

    ${props =>
      props.isErrored &&
      css`
        border: 1px solid #d7182a;
      `}

    ${props =>
      props.isFocused &&
      css`
        border: 1px solid #bdbdbd;
      `}
  }

  svg {
    margin-right: 16px;
  }
`
