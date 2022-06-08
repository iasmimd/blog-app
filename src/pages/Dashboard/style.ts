import styled from 'styled-components';

export const PostList = styled.ul`

    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border-left: 1px solid gray;
    border-right: 1px solid gray;


    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 150px;
        max-height: 500px;
        padding: 30px;
    }

    section{
        display: flex;
        justify-content: space-between;
    }
`

export const UserContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: flex-start;


`

export const PostSettings = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40px;
    
`