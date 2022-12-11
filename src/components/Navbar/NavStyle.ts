import styled from 'styled-components'


export const NavbarWrapper = styled.nav`
  background: transparent;
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;

  
  .logo h3 {
    color: var(--grey-900);
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 1.2rem;
  }

  .logo .brev {
    background: var(--black);
    color: #FFDE59;
    padding: 0 0.4rem;
  }

  .logo .brand {
    width: 40px;
    height: 40px;
    background: var(--black);
    color: var(--white);
    font-size: 0.9rem;
    font-weigth: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav a {
    margin-left: 1.5rem;
    color: var(--grey-900);
  }


  @media screen and (max-width: 768px) {
    .nav a {
      margin-left: 0.6rem;
    }
    .nav a:nth-of-type(1) {
      display: none;
    }
    .nav a:nth-of-type(2) {
      display: none;
    }

    .logo h3 {
      font-size: 1rem;
    }

    .logo .brand {
      width: 30px;
      height: 30px;
      font-size: 0.8rem;
    }
  }
`