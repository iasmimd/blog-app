import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--yellow);

  :hover{
      background-color: var(--dark-yellow);
      transition: 0.5s;
  }
`;
