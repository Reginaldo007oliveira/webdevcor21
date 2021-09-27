import styled from 'styled-components'

export const Container = styled.div`
  background: #f2f2f2;
  padding: 1rem;
  font-family: 'Lato', sans-serif;

  h1 {
    font-size: 22px;
    line-height: 1;
  }

  .success {
    font-size: 0.75rem;
    text-align: center;

    h1 {
      font-size: 0.875rem;
    }
  }

  @media only screen and (min-width: 67em) {
    text-align: center;

    .success {
      padding: 1rem 0;
    }

    form {
      width: 1050px;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      > div {
        width: 280px;
        margin-right: 1rem;
      }

      button {
        width: 140px;
        padding: 0 1rem;
        text-transform: none;
      }
    }

    .success button {
      width: 320px;
      text-transform: none;
    }
  }
`
