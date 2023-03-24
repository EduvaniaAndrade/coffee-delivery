import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;
  width: 28rem;
  height: 32rem;

  background: ${props => props.theme['gray-100']};
  border-radius: 6px 44px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 4px;
    border: 0;
    width: 23rem;
    height: 2.875rem;

    background: ${props => props.theme['yellow-400']};
    color: ${props => props.theme['white-100']};
    border-radius: 6px;

    transition: 1s background;

    &:hover {
      background: ${props => props.theme['yellow-500']};
      cursor: pointer;
    }
  }
`

export const ContainerScroll = styled.div`
  max-height: 20rem;
  overflow: hidden;
  overflow-y: auto;
`

export const CoffeeSelected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0.25rem 1.5rem;
  gap: 3.68rem;
  width: 23rem;
  height: 7rem;

  span {
    width: 3.4rem;
    height: 1.3rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme['gray-600']};

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`

export const Separator = styled.div`
  border: 1px solid ${props => props.theme['gray-300']};
  width: 23rem;
  height: 0px;
`

export const InfoSelectedCoffee = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 0.5rem;

    width: 15.9rem;
    height: 3.8rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      display: flex;
      align-items: center;
      color: ${props => props.theme['gray-700']};
      margin-bottom: 0.5rem;

      flex: none;
      order: 0;
      flex-grow: 0;
    }
`

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;
  width: 16.68rem;
  height: 3.8rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0.5rem;
    gap: 0.25rem;
    width: 5.68rem;
    height: 2rem;
    background: ${props => props.theme['gray-300']};
    color: ${props => props.theme['purple-400']};
    border-radius: 6px;

    transition: 1s background;

    &:hover {
      background: ${props => props.theme['gray-400']};
      cursor: pointer;
    }

      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: ${props => props.theme['gray-600']};
      }
  }
`

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 5rem;
  height: 2rem;
  background: ${props => props.theme['gray-300']};
  color: ${props => props.theme['gray-800']};
  border-radius: 6px;

  .icon {
    color: ${props => props.theme['purple-400']};
    cursor: pointer;
  }
`

export const CoffeeValueInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 0.75rem;
  width: 23rem;
  height: 5.75rem;
`

export const CoffeeValueDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
  width: 23rem;
  height: 1.3rem;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${props => props.theme['gray-600']};

  &:last-child {
    font-weight: 700;
    font-size: 1.25rem;

    color: ${props => props.theme['gray-700']};
  }
`
