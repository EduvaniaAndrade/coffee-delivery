import styled from "styled-components";

export const RequestContainer = styled.div`
  padding: 2rem 10rem;

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`

export const RequestContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 130%;
    margin-bottom: 0.9rem;

    display: flex;
    align-items: center;
    color: ${props => props.theme['gray-700']};
  }
`


export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;

  font-family: 'Roboto';
  font-style: normal;
  line-height: 130%;

  color: ${props => props.theme['yellow-500']};

  h2 {
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    align-items: center;

    color: ${props => props.theme['gray-700']};
  }

  span {
    font-size: 0.87rem;
    display: flex;
    align-items: center;
    color: ${props => props.theme['gray-600']};
  }
`

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 130%;
    margin-bottom: 0.9rem;

    display: flex;
    align-items: center;
    color: ${props => props.theme['gray-700']};
  }
`