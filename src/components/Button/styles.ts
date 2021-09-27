import styled from 'styled-components'

export const Container = styled.button`
  background: #000;
  border: 0;
  height: 48px;
  width: 100%;
  border-radius: 5px;
  margin-top: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;

  @media only screen and (min-width: 67em) {
    width: 140px;
    padding: 0 1rem;
    text-transform: none;
  }
`
