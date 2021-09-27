import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: -100%;
  left: 0;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.05);
  transition: all 1s ease;

  &.opened {
    top: 80px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-size: 1rem;
      font-weight: 900;
    }

    button {
      border: 0;
      background: transparent;

      svg {
        display: block;
      }
    }
  }

  .product {
    margin-top: 1rem;
    display: flex;

    img {
      width: 64px;
      height: 64px;
      display: block;
    }

    .content {
      padding: 0 1rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      h1 {
        color: #7a7a7a;
        font-size: 0.8rem;
        font-weight: 600;
      }

      p {
        font-size: 0.75rem;
        font-weight: 600;
      }

      button {
        border: 0;
        background: transparent;
        font-size: 0.75rem;
        text-decoration: underline;
      }
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;

      button {
        border: 0;
        outline: 0;
        background: transparent;

        svg {
          display: block;
        }
      }
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    span {
      font-weight: 600;
    }

    h1 {
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width: 67em) {
    width: 300px;
    left: auto;
    right: calc((100% - 1050px) / 2 - 130px);

    &.opened {
      top: 96px;

      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;

        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
        top: -0.5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`
