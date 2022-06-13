import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100vh;
// `;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0px 15px;
  margin-bottom: 15px;

  textarea {
    width: 70%;
    height: 80px;
    padding: 10px;
  }

  button {
    background-color:  var(--light-blue);
    border-radius: 0.9em;
    padding: 0.8em 1.2em 0.8em 1em;
    transition: all ease-in-out 0.2s;
    font-size: 16px;
  }

  button:hover {
    background-color: var(--dark-blue);
  }
`;

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

  h3{
    padding-left: 10px;
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
