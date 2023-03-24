import styled from "styled-components"

export const CoffeeContainer = styled.div`
padding: 2rem 7rem;

h1 {
  font-family: 'Baloo 2' sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  display: flex;
  align-items: center;

  color: ${props => props.theme['gray-700']};
}
`

export const CoffeeContent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 2.5rem 1.56rem;
margin-top: 3.375rem;
`

export const CoffeeCard = styled.div`
width: 16rem;
height: 19rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 1rem;

background-color: ${props => props.theme['gray-100']};
border-radius: 6px 36px;

 img {
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
  top: -2rem;
  margin-bottom: 2rem;
}

h3 {
 font-style: normal;
 font-weight: 700;
 font-size: 1.25rem;
 line-height: 130%;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 margin-bottom: 0.5rem;
 
 color: ${props => props.theme['gray-700']};
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;

  color: ${props => props.theme['gray-500']};
} 
`

export const Title = styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: -3.1rem;
margin-bottom: 1rem;
width: 5.9rem;
height: 1.56rem;

background: ${props => props.theme['yellow-300']};
border-radius: 100px;

color: ${props => props.theme['yellow-500']};
`

export const BuyContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 1.8rem;
margin-top: 2rem;

strong {
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 130%;

  text-align: right;
  color: ${props => props.theme['gray-600']};
}

div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 4.5rem;
  height: 2.375rem;

  background-color: ${props => props.theme['gray-300']};
  border-radius: 6px;

  span {
    width: 1.25rem;
    height: 1.3rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    text-align: center;

    color: ${props => props.theme['gray-800']};
  }
} 
`

export const IconCarAffect = styled.span`
  color: ${props => props.theme['purple-400']}!important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s color;

  &:hover {
    color: ${props => props.theme['purple-500']}!important;
    cursor: pointer;
  }
`

export const IconContent = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: -1.25rem;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;
  background-color: ${props => props.theme['purple-500']};
  color: ${props => props.theme['white-100']};
  transition: 1s background;

  &:hover {
    background-color: ${props => props.theme['purple-400']};
    cursor: pointer;
  }
`
