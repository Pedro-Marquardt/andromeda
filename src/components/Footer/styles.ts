import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.footer`
    width: 100%;
    height: 5rem;
    overflow: hidden;
    background: blueviolet;
    position: fixed;
    bottom:0;
    text-align : center ;
    display:none;
    ${media.lessThan('medium')`
        display:none;
    `}
    p{
        color: #FFF;
        size: 24px;
    }
`;