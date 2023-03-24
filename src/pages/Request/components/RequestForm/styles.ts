import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  width: 40rem;
  height: 18.8rem;
  margin-bottom: 0.25rem;

  background: ${props => props.theme['gray-100']};
  border-radius: 6px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.75rem;
      order: 3;

      input:first-child {
        width: 12.5rem;
      }

      input:last-child {
        width: 21.7rem;
      }
   }

    input {
      padding: 0.75rem;
      gap: 0.25rem;
      width: 35rem;
      height: 2.6rem;
      background: ${props => props.theme['gray-200']};
      border: 1px solid ${props => props.theme['gray-300']};
      border-radius: 4px;

      :focus {
        border: 1px solid ${props => props.theme['yellow-500']};
      }

    }
`

