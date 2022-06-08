import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 70px;
    padding: 0px 30px;
    background-color: var(--light-blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;

    button{
        width: 60px;
        height: 30px;
    }

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`