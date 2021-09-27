import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
`

export const Content = styled.div`
  > h1 {
    position: relative;
    font-size: 1.125rem;
    font-weight: 900;
    margin: 1rem;

    &:after {
      position: absolute;
      width: 32.5px;
      height: 4px;
      content: '';
      bottom: -4px;
      background: #c0c0c0;
      left: 0;
    }
  }

  .products {
    padding: 0 0.5rem 3rem 0.5rem;

    .slick-slide {
      font-size: 0;
      padding: 0 0.5rem;
    }

    .slick-dots {
      bottom: 1rem;
      height: 16px;
      font-size: 0;
      left: 0;
    }

    .slick-dots li {
      width: 16px;
      height: 16px;
      margin: 0 0.25rem;
    }

    .slick-dots li button::before {
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 10px;
    }

    .slick-dots li.slick-active button::before {
      color: red;
    }

    .product {
      position: relative;
      overflow: hidden;
      padding: 0;

      .off {
        position: absolute;
        top: 0;
        right: 0rem;
        width: 51px;
        height: 44px;
        background: #f8475f;
        text-align: right;
        padding: 0.5rem 0.25rem 0 0;
        color: #fff;
        font-weight: 600;
        -webkit-clip-path: polygon(0 0, 100% 100%, 100% 0%, 0% -100%);
        clip-path: polygon(0 0, 100% 100%, 100% 0%, 0% -100%);
        font-size: 0.625rem;
      }

      img {
        display: block;
        width: 100%;
      }

      h1 {
        color: #7a7a7a;
        font-size: 0.625rem;
        margin-top: 0.25rem;
        font-weight: 600;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .listPrice {
        font-size: 0.75rem;
        text-decoration: line-through;
        color: #7a7a7a;
        display: block;
        text-align: center;
      }

      .price {
        font-weight: 700;
        display: block;
        text-align: center;
        font-size: 1rem;
      }

      .installments {
        font-size: 0.75rem;
        color: #7a7a7a;
        display: block;
        text-align: center;
      }

      button {
        background: #000;
        border: 0;
        height: 36px;
        width: 100%;
        border-radius: 5px;
        margin-top: 0.5rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.9rem;
      }

      .rating {
        display: flex;
        justify-content: center;
        margin: 0.25rem 0;

        img {
          width: 12px;

          & + img {
            margin-left: 0.25rem;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 67em) {
    > h1 {
      margin: 1rem auto;
      width: 1050px;
    }

    .products {
      width: 1050px;
      margin: 0 auto;
      padding: 0 0 1rem 0;

      .slick-list {
        margin: 0 -1rem;
      }

      .slick-slide {
        padding: 0 1rem;
      }

      .slick-arrow {
        width: 40px;
        height: 40px;
        font-size: 0;

        &:before {
          font-size: 40px;
          line-height: 40px;
          color: #000;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          font-family: 'Font Awesome 5 Pro';
        }

        &.slick-prev {
          left: -50px;

          &:before {
            content: '\f053';
          }
        }

        &.slick-next {
          right: -50px;

          &:before {
            content: '\f054';
          }
        }

        &.slick-disabled {
        }
      }

      .product {
        padding: 0;
        transition: all 0.5s ease;
        margin: 0;

        button {
          transition: all 0.5s ease;
          opacity: 0;
          visibility: hidden;
        }

        &:hover {
          background: #e6e8ea;

          button {
            opacity: 1;
            visibility: visible;
          }
        }

        .product-content {
          padding: 0 1rem 1rem;
        }

        .off {
          position: absolute;
          width: 82px;
          height: 72px;
          padding: 1rem 0.5rem 0 0;
          font-weight: 900;
          font-size: 1rem;
        }
      }
    }
  }
`
