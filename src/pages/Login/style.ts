import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--dark-blue);

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
    background-color: var(--vanilla);
    border-radius: 4px;
    width: 90%;
    max-width: 400px;
    height: 35%;

  }

  form > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 125px;
  }

  button {
    width: 80%;
    height: 35px;
    align-self: center;
  }

  p{
    width: 80%;
    align-self: center;
  }
`;
