import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 600px;
  height: 180px;
  border-radius: 50px;
  background: #e0e0e0;
  margin: 0 auto;
  padding: 30px;
  box-shadow: 5px 20px 70px #bebebe, -20px -10px 0px #ffffff;

  p {
    align-self: flex-start;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const UserContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 80px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
