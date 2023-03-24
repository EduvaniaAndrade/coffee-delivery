import styled from "styled-components";


export const SucessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem;
  margin-top: 2rem;

  img {
    width: 492px;
    height: 293px;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${props => props.theme['yellow-500']};
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${props => props.theme['gray-700']};;
    font-stretch: 100;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3.18rem;
  margin-top: 2rem;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  width: 32.8rem;
  height: 16.8rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box, 
  linear-gradient(90deg, #DBAC2C, #8047F8) border-box;
  border-image-slice: 1;
  border-radius: 6px 36px;  

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 0.75rem;

    p {
      width: 19.3rem;
      height: 2.6rem;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: #574F4D;

      span {
        font-style: bold;
      }
    }
  }
`

const ICON_COLORS = {
  purple: 'purple-400',
  dark_yellow: 'yellow-500',
  yellow: 'yellow-400'
}

interface IconProps {
  iconsColors: keyof typeof ICON_COLORS
}

export const IconContent = styled.span<IconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: ${props => props.theme[ICON_COLORS[props.iconsColors]]};
  color: #fff;
  border-radius: 1000px;
`
