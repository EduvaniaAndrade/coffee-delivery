import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, .25); */

  nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;

      span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        border-radius: 6px;
        gap: 4px;

        &:first-child {
          background-color: ${props => props.theme['purple-300']};
          color: ${props => props.theme['purple-500']};
        }

        span {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;

          width: 20px;
          height: 20px;
          top: 1.7rem;
          right: 9.5rem;
          
          background: ${props => props.theme['yellow-500']}!important; 
          color: ${props => props.theme['white-100']}!important;
          border-radius: 1000px;

          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 130%;
        }

        .show {
          opacity: 1;
        }

        .hide {
          opacity: 0;
        }

        &:last-child {
          background-color: ${props => props.theme['yellow-300']};
          color: ${props => props.theme['yellow-500']};
        }
      }
    }
`