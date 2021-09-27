import styled from 'styled-components'

import background from '../../assets/banner.png'

export const Container = styled.div`
  background: #333;
  height: 190px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    opacity: 0.6;
    height: 100%;
    width: auto;
  }

  .heading {
    z-index: 1;
    position: relative;
    padding: 1rem;
    color: #fff;

    h2 {
      font-size: 20px;
    }

    h1 {
      font-size: 30px;
      font-weight: 900;
      line-height: 31px;
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);

    span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.8;

      & + span {
        margin-left: 0.5rem;
      }

      &.active {
        background: #f8475f;
        opacity: 1;
      }
    }
  }

  @media only screen and (min-width: 67em) {
    height: 430px;

    &:after {
      background: url(${background}) no-repeat top right;
      content: '';
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    img {
      width: 60%;
      right: 0;
    }

    .heading {
      width: 1050px;
      margin: 0 auto;
      padding: 0;

      h1 {
        width: 50%;
        font-size: 45px;
        line-height: 1.1;
      }

      h2 {
        font-size: 30px;
      }
    }
  }
`
