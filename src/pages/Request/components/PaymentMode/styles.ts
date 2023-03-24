import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  width: 40rem;
  height: 12.9rem;

  background: ${props => props.theme['gray-100']};
  border-radius: 6px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  div {
    color: ${props => props.theme['purple-500']};
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  width: auto;
  height: 3.18rem;
  background: ${props => props.theme['gray-300']};
  border-radius: 6px;
  flex-grow: 1;

  &:hover {
    background: ${props => props.theme['gray-400']};
    cursor: pointer;
  }

  &.selected {
    border: 1px solid ${props => props.theme['purple-400']};;
  }

  &.notSelected {
    border: 0;
  }

  input {
    color: ${props => props.theme['gray-600']};
    background-color: inherit;
    border: 0;
    width: 8rem;
    cursor: pointer;
  }
`

export const PaymentForms = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
  width: 35rem;
  height: 3.18rem;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
