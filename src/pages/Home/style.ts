import styled from "styled-components";

export const Container = styled.div`
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5.75rem 6rem;

    h1 {
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.8rem;
      margin-bottom: 1rem;

      color: ${props => props.theme['gray-800']};
    }

    h3 {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.6rem;
      font-stretch: 100;

      color: ${props => props.theme['gray-700']};
    }
  }
`

export const ContentMain = styled.div`
  margin-bottom: 4.125rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;


  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme['gray-600']};

    &:nth-child(2){
      margin-left: 0.3rem;
    }
  }
`

const STATUS_COLORS = {
  gray: 'gray-600',
  purple: 'purple-400',
  yellow: 'yellow-400',
  dark_yellow: 'yellow-500',
}

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const IconContent = styled.span<StatusProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  border-radius: 1000px;
  background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
  color: ${props => props.theme['white-100']};
` 
