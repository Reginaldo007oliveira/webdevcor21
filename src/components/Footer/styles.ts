import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  color: #fff;
  padding: 1rem;

  .wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    > div + div {
      margin-top: 1rem;
    }
  }

  .credits {
    display: flex;
    justify-content: space-between;
    width: 100%;

    > div {
      width: 50%;
      text-align: center;
    }

    span {
      display: block;
      font-size: 10px;
    }
  }

  .contact {
    flex: 1;

    button {
      width: 200px;
      font-size: 12px;
      font-weight: 600;
      height: 38px;
      text-transform: uppercase;
      border: 0;
      background: #fff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 1rem;
      margin: 0 auto;

      & + button {
        margin-top: 1rem;
      }

      img {
        margin-right: 1rem;
      }

      span {
        flex: 1;
        text-align: left;
      }
    }
  }

  .place {
    font-size: 0.813em;

    h1 {
      position: relative;
      font-size: 1.125rem;
      font-weight: 900;
      margin-bottom: 1rem;

      &:after {
        position: absolute;
        width: 32px;
        height: 4px;
        content: '';
        bottom: -4px;
        background: #fff;
        left: 0;
      }
    }
  }

  @media only screen and (min-width: 67em) {
    padding: 3rem 1rem;

    .wrap {
      width: 1050px;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      > div + div {
        margin-top: 0;
      }

      .contact {
        flex: 1;

        button {
          width: 200px;
        }
      }

      .credits {
        width: auto;

        div + div {
          margin-left: 1rem;
        }
      }
    }
  }
`
