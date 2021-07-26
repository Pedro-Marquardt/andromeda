import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    background: blueviolet;
    border-radius: 0.5rem;
    padding-bottom: 2rem;
    margin-top: 2rem;
    padding-top: 2rem;
    margin-bottom: 10rem;
    ${media.lessThan('medium')`
        margin-bottom: 8rem;
        width: 80%;
    `}

    input {
        width: 80%;
        margin: auto;
        margin-top: 1rem;
        height: 2.5rem;
    }
    button{
        margin-top: 5rem;
        width: 80%;
        margin: auto;
        background: #fff;
        height: 2.5rem;
        border: 1px solid blueviolet;
        border-radius: 0.5rem;
        cursor: pointer;

    }
`;
