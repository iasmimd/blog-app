import styled, { css } from 'styled-components';

interface ContainerProps {
  error?: boolean;
}

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: left;
  div {
    span {
      color: var(--red);
    }

    margin-bottom: 5px;
  }
`;
export const InputContainer = styled.div<ContainerProps>`
  background: var(--white);
  border-radius: 10px;
  border: 1px solid var(--light-blue);
  color: var(--gray);
  height: 40px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  transition: 0.4s;

  ${(props) =>
    props.error &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    width: 85%;
    margin-left: 30px;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--black);
    }
  }

  svg {
    position: absolute;
  }
`;
