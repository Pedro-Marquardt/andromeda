import styled  from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.div `
    width: 100%;
    height: 5rem;
    background: blueviolet;
    display: flex;
    position: fixed;
    top:0;
    justify-content: space-between;
    padding-top: 1.2rem;
    ${media.lessThan('medium')`
        flex-direction: column;
        height: auto;
        position: absolute;
        top:0;

    `}
`;

export const Icon = styled.div`
    display: flex;
    width: 10%;
    padding-right: 4rem;
    justify-content: space-between;
    
    .icone{
        cursor: pointer;
        padding-top: 0.8rem;
    }

    ${media.lessThan('medium')`
        flex-direction: row;
        width: 40%;
        //margin-left: 8rem;    
    `}
    
`;

export const Logo = styled.div`
    width: 30%;
    //justify-content: space-between;
    display: flex;

    flex-direction: row;
        h1 {
        color: #FFF;
        padding-top: 0.8rem;
        padding-left: 2rem;
        
    }

    a{
        text-decoration: none;
    }

    ${media.lessThan('medium')`
        width:100%
    `}
`;

export const Select = styled.div`
    width: 30%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    h1{
        color: #fff;
        padding-top: 0.8rem;
        padding-left: 1rem;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    ${media.lessThan('medium')`
        flex-direction: column;
        margin-bottom: 2rem;
    `}
`;


export const DivIcon = styled.div`
`;

export const Itens = styled.div`
`;