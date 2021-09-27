import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  height: 80px;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
`

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    display: block;
  }

  .menu {
    height: 28px;
  }

  .logo {
    height: 28px;
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .user {
    display: none;
  }

  .cart {
    display: flex;
    align-items: center;
    height: 28px;
    border: 0;
    background: transparent;

    img {
      display: block;
    }

    span {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: #f8475f;
      color: #fff;
      font-size: 0.625em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
    }
  }

  .search {
    width: 100%;
    position: relative;
    height: 28px;
    margin: 0.5rem 0 0;

    input {
      height: 28px;
      width: 100%;
      border: 0;
      border-bottom: 1px solid #000;
      border-radius: 0;

      &::placeholder {
        color: #7a7a7a;
      }
    }

    button {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      background: transparent;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      right: 0;
    }
  }

  @media only screen and (min-width: 67em) {
    width: 1050px;
    margin: 0 auto;
    height: 100%;
    padding: 0;

    .hamburger {
      display: none;
    }

    .logo {
      position: static;
      transform: none;
    }

    .search {
      width: auto;
      flex: 1;
      margin: 0 0 0 6rem;
      order: 2;
    }

    .user {
      order: 3;
      display: flex;
      align-items: center;
      margin-left: 2rem;

      img {
        margin-right: 0.25rem;
      }
    }

    .cart {
      order: 4;
      margin-left: 2rem;
    }
  }
`
