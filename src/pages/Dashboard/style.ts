import styled from 'styled-components';

export const PostList = styled.ul`
display: flex;
flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid gray;
  border-right: 1px solid gray;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 150px;
    max-height: 500px;
    padding: 30px;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

`;

export const UserContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
`;

export const PostSettings = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
`;

export const TextContainer = styled.div`

  textarea{
      width: 80%;
      height: 80px;
  }

  button {
    align-self: flex-end;
    position: absolute;
    font-weight: 600;
    height: 40px;
    padding: 12px 20px;
    outline: none;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 5px;

    :after {
      content: '';
      position: absolute;
      width: 100%;
      top: 7px;
      left: 7px;
      height: 100%;
      background-color: rgb(201, 184, 246);
      z-index: -1;
      transition: all 0.35s;
      border-radius: inherit;
    }

    :hover:after {
      top: 0px;
      left: 0px;
    }
  }

`