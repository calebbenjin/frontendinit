import styled from 'styled-components'


export const HeroWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  text-align: center;
  padding-top: 8rem;
  padding-bottom: 3rem;

  .heroContent {
    text-align: center;

    .description {
      font-size: 1.5rem;
      color: #666666;
      width: 70%;
      margin: 0 auto 4rem auto;
    }

    .heroBtn {
      background: var(--black);
      padding: 1.2rem 4rem;
      border-radius: 4px;
      color: #fff;
      font-weight: 700;
      text-transform: capitalize;
      transition: all 0.5s linear;

      &:hover {
        opacity: 0.8;
      }
    }

    .hero-topic {
      margin-top: 3rem;
      width: 70%;
      margin: 3rem auto 0 auto;

      .sub-title {
        margin-bottom: 4rem;
        font-weight: 700;
        font-size: 1.2rem;
        color: #666666;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        justify-content: center;
        gap: 2rem;
        color: #666666;

        .iconWrapper {
          display: flex;
          align-items: center;

          .icon {
            font-size: 2rem;
          }

          p {
            margin-left: 5px;
            font-weight: 900;
            font-size: 1.2rem;
          }
        }
      }
    }
  }


  .wrapper {
    color: var(--black);
    font-weight: 900;
    display: grid;
    font-size: 7rem;
    font-family: 'Inter', sans-serif;
  }

  .wrapper>div {
    grid-area: 1/1/-1/-1;
  }

  .hero-title-top {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    clip-path: polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%);
  }

  .hero-title-bottom {
    clip-path: polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%);
    background-clip: text;
    -webkit-backround-clip: text;
    transform: translateX(-0.04em);
  }

  @media screen and (max-width: 1180px){
    .wrapper {
      font-size: 4.5rem;
      font-family: 'Inter', sans-serif;
    }
  }

  @media screen and (max-width: 901px){
    .wrapper {
      font-size: 3rem;
      font-family: 'Inter', sans-serif;
    }
  }

  @media screen and (max-width: 768px){
    height: 100%;
    padding-top: 6rem;

    .wrapper {
      font-size: 1.5rem;
      font-family: 'Inter', sans-serif;
      margin-bottom: 0.5rem;
    }

    .heroContent {
      .hero-topic {

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          justify-content: center;
          gap: 2rem;
          color: #666666;
          padding-bottom: 3rem;

          .iconWrapper {
            display: block;
            align-items: center;
  
            .icon {
              font-size: 1.3rem;
            }
  
            p {
              margin-left: 0;
              font-weight: 900;
              font-size: 0.8rem;
            }
          }
        }

        .sub-title {
          margin-bottom: 4rem;
          font-weight: 700;
          font-size: 1rem;
          color: #666666;
        }

      }

      .description {
        font-size: 1rem;
        width: 100%;
      }

      .heroBtn {
        padding: 1rem 2rem;
        font-weight: 500;
  
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  

`