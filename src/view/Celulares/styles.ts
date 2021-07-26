import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20rem;

    section {
        height: 100vh;
        width: 100%;
        background: #FFF;
        display: flex;
        .product-content {
            display: grid;
            text-align: center;
            margin-top: 10rem;
            height: 400px;
            background: blueviolet;
            border-radius: 12px;
            padding: 12px;
            color: #fff;
            width: 40%;
            margin-right: 1rem;
            margin-left: 2rem;
            img{
                margin-left:4rem;
            }
        }
        button{
            background-color: #fff;
            border: 1px solid blueviolet;
            cursor: pointer;
        }
    }
    ${media.lessThan('medium')`
        margin-top: 10rem;
        section{
            flex-direction: column; 
            .product-content{
            width: 80%;
            margin-left:1rem;
            }
        }
    `}
`;