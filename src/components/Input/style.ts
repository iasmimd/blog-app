import styled, { css } from 'styled-components';

interface ContainerProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  max-width: 320px;

  label {
    font-size: 14px;
    padding-left: 5px;
  }

  input {
    width: 100%;
    height: 30px;
    padding-left: 15px;
    border-radius: 15px;
    border: 1px solid var(--light-blue);
    ${(props) =>
      props.error &&
      css`
        border: 1px solid red;
      `}
  }
`;
