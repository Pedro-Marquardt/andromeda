import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    section {
        height: 100vh;
        width: 100%;
        background: #e2e2;
        display: flex;
        .product-content {
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
        }
    }
`;



