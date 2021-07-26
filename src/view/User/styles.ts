import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20rem;
`;

export const Tittle = styled.div`
    margin-top: 2rem;
    width: 80%;
    text-align: center;
    h2{
        color:blueviolet;
        margin-left: 12rem;
    }
    ${media.lessThan('medium')`
        h2{
            margin-left: 4rem;
        }
    `}
`